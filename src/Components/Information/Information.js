import React from 'react';
import './Information.css';
const Information = (props) => {
    const {img,key,price}=props.employee;
    console.log(props.employee);
    return (
        <div className="employee">
            <div>
                <img class="circular" src="https://i.imgur.com/foLeHUY.jpg" alt=""/>
            </div>
            <div className="info"> 
                <h6>Employee Name: {key}</h6>
                <h5>Salary: ${price}</h5>
                <button class ="add-button"
                onClick={()=>props.handleAddEmployee(props.employee)}
                >Add Employee</button>
            </div>
        </div>
    );
};

export default Information;