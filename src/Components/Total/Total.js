import React from 'react';

const Total = (props) => {
    const total = props.total;
    const totalSalary =total.reduce((totalSalary,employee)=>totalSalary+employee.price,0);

    return (
        <div>
            <h4>Employee Added: {total.length}</h4>
            <h5>Total amount: {totalSalary}</h5>
        </div>
    );
};

export default Total;