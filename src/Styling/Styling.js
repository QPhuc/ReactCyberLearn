import React, { Component } from 'react'
import './Styling.css'
import style from 'S'
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <p className="txt">Hello</p>
                <Child />
            </div>
        )
    }
}
