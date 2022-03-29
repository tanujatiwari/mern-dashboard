import React, { Component } from 'react'
import './Employees.css'
import AddEmployee from './AddEmployee';
export class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isVisible: true
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this)
    }
    addEmployee(newEmp) {
        this.setState(curState => ({
            employees: [...curState.employees, newEmp]
        }))
    }
    handleVisibility() {
        this.setState(curState => ({
            isVisible: !curState.isVisible
        }))
    }
    render() {
        return (
            <div className="Employees">
                <div className="Employees-header-container">
                    <p>Our Company Assets</p>
                    <button onClick={this.handleVisibility}>{this.state.isVisible ? 'Hide all' : 'See all'}</button>
                </div>
                <hr />
                {this.state.isVisible &&
                    <AddEmployee addEmployee={this.addEmployee} />}
                {this.state.isVisible &&
                    <table>
                        <thead>
                            <tr>
                                <td>Employee Code</td>
                                <td>Department</td>
                                <td>Name</td>
                                <td>Mobile</td>
                                <td>Gender</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EMP101</td>
                                <td>Finance</td>
                                <td>John Doe</td>
                                <td>987654321</td>
                                <td>Female</td>
                            </tr>
                            {this.state.employees.map(emp => (
                                <tr>
                                    <td>{emp.empcode}</td>
                                    <td>{emp.deptt}</td>
                                    <td>{emp.name}</td>
                                    <td>+91 {emp.mobile}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

            </div>
        )
    }
}

export default Employees