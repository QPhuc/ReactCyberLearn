import React, { Component } from 'react'

export default class BaiTapChonKinh extends Component {

    renderGlasses = () => {

    }

    render() {
        return (
            <div style={{backgroundImage:'url(./glassesImage/background.jpg)', minHeight:'700px'}}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', minHeight:'700px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img style={{height:'150px'}} src="./glassesImage/model.jpg" alt="model" />
                            </div>
                            <div className="col-6">
                            <img style={{height:'150px'}} src="./glassesImage/g1.jpg" alt="model" />
                            </div>
                        </div>
                        <div className="row">
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g1.jpg" alt="model" />
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g2.jpg" alt="model" />
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g3.jpg" alt="model" />
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g4.jpg" alt="model" />
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g5.jpg" alt="model" />
                        <img style={{height:'100px', width:'100px'}} src="./glassesImage/g6.jpg" alt="model" />
                        {this.renderGlasses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
