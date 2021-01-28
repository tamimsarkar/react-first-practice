import React from 'react';

const UserSalary = ({salary}) => {
    return (
        <div style={{border: '1px solid', width:'330px',margin:'10px',padding:'10px'}}>
            <h4>{salary.first_name}</h4>
            <h5>Annual Salary - ${salary.salary}</h5>

        </div>
    );
};

export default UserSalary;