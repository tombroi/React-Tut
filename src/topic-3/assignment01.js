import React from 'react';
import './style.css';
export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [
        { id: 15637, name: 'Shan', email: 'shan@email.com' },
        { id: 28297, name: 'Ashik', email: 'ashik@email.com' },
        { id: 30198, name: 'Sree', email: 'sree@email.com' },
        { id: 47890, name: 'Lakshmi', email: 'lakshmi@email.com' },
        { id: 56749, name: 'Kajol', email: 'kajol@email.com' }
      ]
    };
  }

  empData() {
    return this.state.emp.map((emps, index) => {
      const { id, name, email } = emps;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Employee Email Id</th>
            </tr>
          </thead>
          <tbody>{this.empData()}</tbody>
        </table>
      </>
    );
  }
}
