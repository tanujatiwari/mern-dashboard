import React, { Component } from 'react'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='Header-container'>
                    <div>
                        <p>Optimize your <span>data</span></p><i class="fa fa-sort"></i>
                    </div>
                    <div className='Header-dashboard-features'>
                        <a href="" className='Header-edit-dashboard'>Edit Dashboard</a>
                        <a href="" className='Header-add-data'>Add Data</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header