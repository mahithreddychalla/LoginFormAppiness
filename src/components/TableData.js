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
        <table class="table">
        <thead class="thead-dark">

          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">gender</th>
            <th scope="col">email</th>
            <th scope="col">phone number</th>
          </tr>
          </thead>
          {userData.user.map(userFeild => {
            debugger;
            return (
              <tr>
                <td scope="row">{userFeild.id}</td>
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
