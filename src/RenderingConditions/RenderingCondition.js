import React, { Component } from 'react'

export default class RenderingCondition extends Component {

    login = true;
    userName = "Tran Quang Phuc"

    rederContent = () => {
        if(this.login) {
            return <p> Hello {this.userName} </p>
        }
        return <button>Login</button>
    }

    render() {
        return (
            <div>
                {/* {this.login ? <p> Hello {this.userName} </p> : <button>Login</button>} */}
                {this.rederContent()}
            </div>
        )
    }
}
