import React, { Component } from 'react'
import logo from './logo.png';
import './VerticalNav.css'

export class VerticalNav extends Component {
    render() {
        return (
            this.props.isVisible && <div className="VerticalNav">
                <div className="VerticalNav-container">
                    <div>
                        <ul className='VerticalNav-logo'>
                            <li><a href=""><img src={logo}></img></a></li>
                        </ul>
                        <ul className='VerticalNav-list'>
                            <li className='active'><a href=""><i className="fa fa-home"></i></a></li>
                            <li><a href=""><i className="fa fa-folder"></i></a></li>
                            <li><a href=""><i className="fa fa-envelope"></i></a></li>
                            <li><a href=""><i className="fa fa-calendar"></i></a></li>
                            <li><a href=""><i className="fa fa-plane"></i></a></li>
                            <li><a href=""><i className="fa fa-cog"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default VerticalNav