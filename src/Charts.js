import React, { Component } from 'react'
import './Charts.css'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import axios from 'axios';
export class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api')
            .then(res => (
                this.setState({ apiData: res.data })
            ))
            .catch(err => console.log(err))
    }
    render() {
        let dashboardData = this.props.data.map((d, key) => {
            return (
                <div className="Chart Chart-blue" key={key}>
                    <div className='Chart-heading'>
                        <div>
                            <p>{d.title}</p>
                        </div>
                        <p className='Chart-main-data'>{d.data}</p>
                    </div>
                    <div className='Chart-stats'>
                        <p>4.3% Improvement over</p>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie data={this.state.apiData} dataKey="value" cx="50%" cy="50%" innerRadius={70} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div >
            )
        })
        return (
            <section className='Charts' >
                <div className="Charts-row">
                    {dashboardData}
                </div>
            </section>
        )
    }
}

export default Charts