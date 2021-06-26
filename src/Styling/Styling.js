import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <p className="txt">Hello</p>
                <span className={style.txtStyle}>Hello module</span>
                <Child />
            </div>
        )
    }
}
