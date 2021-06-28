import React, { Component } from 'react'

export default class BaiTapChonKinh extends Component {
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
