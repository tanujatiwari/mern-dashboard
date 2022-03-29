import React, { Component } from 'react'
import './AddEmployee.css'
export class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            empcode: '',
            deptt: '',
            gender: '',
            mobile: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addEmployee(this.state);
        this.setState({ name: '', empcode: '', deptt: '', gender: '', mobile: '' })
    }
    render() {
        return (
            <div className='AddEmployee'>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Employee Name' name="name" value={this.state.name} onChange={this.handleChange} required />
                    <input type="text" placeholder='Employee Code' name="empcode" value={this.state.empcode} onChange={this.handleChange} required />
                    <input type="text" placeholder='Employee Department' name="deptt" value={this.state.deptt} onChange={this.handleChange} required />
                    <input type="text" placeholder='Employee Gender' name="gender" value={this.state.gender} onChange={this.handleChange} required />
                    <input type="tel" placeholder='Employee Mobile (+91)' name='mobile' value={this.state.mobile} onChange={this.handleChange} required />
                    <button className='Add-asset'><i className='fa fa-plus'></i></button>
                </form>
            </div>
        )
    }
}

export default AddEmployee