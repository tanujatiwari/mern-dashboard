import React, { Component } from 'react'
import './Dashboard.css'
import VerticalNav from './VerticalNav';
import HorizontalNav from './HorizontalNav';
import Header from './Header';
import Charts from './Charts';
import Employees from './Employees';
import axios from 'axios'
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            isVisible: null,
            dashboardData: []
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('load', this.updateWindowDimensions);
        axios.get('http://localhost:5000/dashboard')
            .then(res => (
                this.setState({ dashboardData: res.data })
            ))
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('load', this.handleLoad)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
        if (this.state.width < '945') {
            this.setState({ isVisible: false })
        }
        else {
            this.setState({ isVisible: true })
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <VerticalNav isVisible={this.state.isVisible} />
                <main>
                    <HorizontalNav />
                    <Header />
                    <Charts data={this.state.dashboardData} />
                    <Employees />
                </main>
            </div>
        )
    }
}

export default Dashboard