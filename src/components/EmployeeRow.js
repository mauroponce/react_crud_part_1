import React from 'react';
function statusLabel(isActive) {
  return isActive ? 'Active' : 'Inactive'
}
const EmployeeRow = (props) => {
  const { employee, onDeleteClick, onEditClick } = props;
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{statusLabel(employee.active)}</td>
      <td>
        <button onClick={onEditClick} className="edit btn btn-link">
          <i className="material-icons" title="Edit">&#xE254;</i>
        </button>
        <button onClick={onDeleteClick} className="delete btn btn-link">
          <i className="material-icons" title="Delete">&#xE872;</i>
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;