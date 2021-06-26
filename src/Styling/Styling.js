import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';
import Child from './Child'

export default class Styling extends Component {
    render() {
        //Luu y viet duoi dang thuoc tinh document.getElementById('id').style.backgroundColor
        const styleText = {
            color: 'pink',
            padding: '15px',
            backgroundColor: 'black',
        }

        return (
            <div>
                <p className="txt">Hello</p>
                <span className={style.txtStyle}>Hello module</span>
                <p style={styleText}>Hello 123123</p>
                <Child />
            </div>
        )
    }
}
