import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <p>count is { this.state.count }</p>
                <button onClick={ () => { this.setState((prev) => ({count: prev.count + 1})) } }>修改count</button>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)  

        this.setState({
            count: this.state.count + 1
        })

        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        })

        console.log(this.state.count)

        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 0);
    }
}
