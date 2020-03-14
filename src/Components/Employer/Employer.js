import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Employer.css';
import Information from '../Information/Information';
import Total from '../Total/Total';
const Employer = () => {
    const first15 = fakeData.slice(0,15);
    const [employee,setEmployee] = useState(first15);
    const [name,setName]=useState([]);
    const handleAddEmployee = (employee)=>{
        console.log("Employee added",employee);
        const newName = [...name,employee];
        setName(newName);
    }

    return (
        
        <div className ="employer">
            <div className="employer-info">
                {
                    employee.map(person=> <Information
                        handleAddEmployee = {handleAddEmployee}
                        employee = {person}></Information>)
                }
            </div>
            <div className="employer-total">
                <Total total={name}></Total>
            </div>
        </div>
    );
};

export default Employer;
