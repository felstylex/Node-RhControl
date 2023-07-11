import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function register(req, res) {
  const {name, email, password} = req.body;

  try {
    const existingUser  = await userModel.findOne({where: {email} });
    if (existingUser) {
      res.status(400).json({message: "Email já cadastrado"});
    }

    const hashPassowrd = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashPassowrd,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({erro: "Erro no servidor"});
  }
}

async function login(req, res) {
  const {email, password} = req.body;

  try {
    const user = await userModel.findOne({where: {email}});
    if(!user) {
      return res.status(401).json({message: "Usuário ou senha inválidos"});
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword) {
      return res.status(401).json({message: "Usuário ou senha inválidos"})
    }

    const token = jwt.sign({data: email}, "JWT_SECRET", {expiresIn: '3h', algorithm: 'HS256'});

    return res.json({message: "Login efetuado com sucesso", token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Erro no servidor"});
  }
}


export default {register, login}