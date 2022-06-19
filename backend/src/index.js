const express = require("express");

const server = express();

server.use(express.json());

let numberOfRequests = 0;
const projects = [];

function checkProjectExists(req, res, next) {
  const { name } = req.params;
  const project = projects.find(p => p.name == name);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}

function checkList(req, res, next) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Task not informed" });
  }

  req.name = name;

  return next();
}

/**
 * Middleware que dá log no número de requisições
 */
function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Número de requisições: ${numberOfRequests}`);

  return next();
}

server.use(logRequests);

server.get("/projects/index", (req, res) => {
  return res.json(projects);
});

server.post("/projects/show", (req, res) => {
  const { name, valor } = req.body;

  const project = {
    name,
    valor
  };

  projects.push(project);

  return res.json(project);
});

server.put("/projects/:name", checkProjectExists, (req, res) => {
    const { name } = req.params;
    const { valor } = req.body;

    const project = projects.find(p => p.name == name);

    project.valor = valor;

    return res.json(project);
    
});

server.delete("/projects/:name", (req, res) => {
  const { name } = req.params;

  const projectIndex = projects.findIndex(p => p.name == name);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.listen(3001);