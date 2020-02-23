import React from "react";
import EmployeeList from "../data/Employees.json";

function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => employee.name.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employees</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <img src={result.url} className="employee-icon" alt="employee icon for {result.name}"></img> {result.name} | {result.location} | {result.phone}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmployeeInfo;
