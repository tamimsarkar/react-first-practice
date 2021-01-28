import React from 'react';
import UserSalary from './UserSalary';

const Salary = ({addSalary}) => {
    return (
        <div className="salary container">
        {
            addSalary.map(salary => <UserSalary salary={salary} key={salary.id}></UserSalary>)
        }
        </div>
    );
};

export default Salary;