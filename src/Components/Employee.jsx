import React from "react";
import { employeeItems } from "./employeeItem";

const Employee = () => {
  return (
    <>
      {employeeItems &&
        employeeItems.map((value, index) => {
          return (
            <div className="employee-box">
              <div className="employee-pic">
                <img src={value.pic} alt="employee-pic" />
              </div>
              <div>
                <div className="employee-name">{value.heading}</div>
                <div className="employee-role">{value.role}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Employee;
