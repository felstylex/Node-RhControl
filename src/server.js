import express  from "express";
import employeeController from "./database/controllers/employeeController.js";
import userController from "./database/controllers/userController.js";

const routes = express.Router();

routes.get("/employee", employeeController.findAll);
routes.post("/employee", employeeController.createEmployee);
routes.get("/employee/:id", employeeController.findById);
routes.put("/employee/:id", employeeController.updateEmployee);
routes.delete("/employee/:id", employeeController.deleteEmployee);

routes.post("/register", userController.register);
routes.post("/login", userController.login);

export default routes;