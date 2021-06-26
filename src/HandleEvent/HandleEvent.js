import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //Định nghĩa hàm xử lý sự kiện khi click vào button Click me       
    handleClick = () => {
        alert("Hello");
    }

    //Truyền tham số 
    handelClickparam = (param) => {
        alert("param: " + param)
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.handleClick()
                    }}>Click me</button>
                <button onClick={() => {
                    this.handelClickparam("name")
                    }}>Click me</button>
            </div>
        )
    }
}
