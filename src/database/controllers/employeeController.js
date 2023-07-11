import employeeModel from "../models/employeeModel.js";

async function findAll(_req, res) {
  try {
    const employees = await employeeModel.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Falha ao buscar funcionários" });
  }
}

async function findById (req, res) {
  try {
    const employee = await employeeModel.findByPk(req.params.id);
    employee ? res.json(employee) : res.status(400).json({error: "Funcionário não encontrado"});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Falha ao buscar funcionário"});
  }
}

async function createEmployee (req, res) {
  try {
    const employee = await employeeModel.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Falha ao criar funcionário"});
  }
};

async function updateEmployee (req, res) {
  try {
      await employeeModel.update(
        { 
          name: req.body.name,
          office: req.body.office,
          department: req.body.department,
          admissionDate: req.body.admissionDate,
          birthDate: req.body.birthDate,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          salary: req.body.salary,
          status: req.body.status,
          workedHours: req.body.workedHours 
        },
          {where: {id:  req.params.id }}
      );
      const employee = await employeeModel.findByPk(req.params.id);
      employee ? res.json(employee) : res.status(400).json({error: "Funcionário não encontrado"});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Falha ao atualizar funcionário"});
  }
}

async function deleteEmployee (req, res) {
  try {
    const rowsDeleted = await employeeModel.destroy({where: {id:  req.params.id }});   
    if (rowsDeleted > 0) {
      res.status(204).json({ message: 'Funcionário excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Funcionário não encontrado' });
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({error: "Falha ao deletar funcionário"});
  }
}
export default { findAll, findById, createEmployee, updateEmployee, deleteEmployee };
