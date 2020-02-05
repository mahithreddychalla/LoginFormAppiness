import React, { Component } from 'react';
import { userData } from '../data';
import './TableData.css';
class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    console.log(userData);
    return (
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>gender</th>
            <th>email</th>
            <th>phoneNo</th>
          </tr>
          {userData.user.map(userFeild => {
            debugger;
            return (
              <tr>
                <td>{userFeild.id}</td>
                <td>{userFeild.name}</td>
                <td>{userFeild.age}</td>
                <td>{userFeild.gender}</td>
                <td>{userFeild.email}</td>
                <td>{userFeild.phoneNo}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TableData;
