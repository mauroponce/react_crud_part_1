import axios from 'axios';
const EMPLOYEES_URL = 'http://localhost:3001/employees';

function getEmployees() {
  return axios.get(`${EMPLOYEES_URL}`);
}

function deleteEmployee(id) {
  return axios.delete(`${EMPLOYEES_URL}/${id}`);
}

function createEmployee(params) {
  return axios.post(`${EMPLOYEES_URL}`, params);
}

function updateEmployee(params) {
  return axios.put(`${EMPLOYEES_URL}/${params.id}`, params);
}

export const Employee = {
  all: getEmployees,
  delete: deleteEmployee,
  create: createEmployee,
  update: updateEmployee
}