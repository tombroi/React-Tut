import React from 'react';
import './style.css';

export default class Multi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { factor: 5 };
  }

  empData() {
    for (let i = 1; i <= 10; i++) {
      let number = 5;
      const result = i * number;
      console.log(`${number} * ${i} = ${result}`);
    }
  }

  multiplier(digit) {
    return digit * this.state.factor;
  }

  multiplication_table(digit) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
      let row = (
        <tr key={digit}>
          <td>
            {digit} * {i}
          </td>
          <td>{this.multiplier(i)}</td>
        </tr>
      );
      table.push(row);
    }
    return table;
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <th>Multiplication of {this.state.factor} am here</th>
          </thead>
          <tbody>{this.multiplication_table(this.state.factor)}</tbody>
        </table>
      </>
    );
  }
}
