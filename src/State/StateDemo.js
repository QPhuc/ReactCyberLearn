import React, { Component } from 'react'

export default class StateDemo extends Component {

    // state: la thuoc tinh co san cua react class component giup dinh nghia nhung noi dung co kha nang thay doi khi nguoi dung thao tac su kien
    state = {
        status: false
    }
    //setState: phuong thuc co san giup thay doi gia tri state va render lai giao dien

    userLogin = {
        name: 'admin',
        age: 20
    }

    login = () => {
        // this.state.status = true; ko set gia tri truc tiep
        let newState = {
            status : true
        }
        //Goi phuong thuc setState
        //setState la phuong thuc bat dong bo
        this.setState(newState, () => {
            console.log(this.state);
        });
        // console.log(this.state);
    }

    renderUserLogin = () => {
        if(this.state.status){
            return <div className="text-center">{this.userLogin.name}</div>
        }
        return <button onClick={ () => {this.login()}}>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        )
    }
}
