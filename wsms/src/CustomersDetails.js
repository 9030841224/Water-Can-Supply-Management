import CustomersData from  './db.json'
import React from 'react';
import './App.css';

const CustomersDetails=()=>{
      return(
        <table  id='customers' >
            <thead>
                <tr>
                    <th scope="col"><center>Customer Name</center></th>
                    <th scope="col"><center>Email</center></th>
                    <th scope="col"><center>Phone Number</center></th>
                    <th scope="col"><center>City</center></th>
                    <th scope="col"><center>IsActive</center></th>
                </tr>
            </thead>
            <tbody>
            {
                CustomersData.CustomerDetails.map((data, key)=>{
                    return(
                        <tr key = {key} >
                                    <td>{data.CustomerName}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.PhoneNumber}</td>
                                    <td>{data.City}</td>
                                    <td>{data.IsActive}</td>

                                </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default CustomersDetails;