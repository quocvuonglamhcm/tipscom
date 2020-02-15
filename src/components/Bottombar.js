import React, { Component } from 'react';

class Bottombar extends Component {
    render() {
        return (
            <div className="bottombar row">
                <div className="col-sm-3"><i className="far fa-copyright icon"></i>2019 TSC Corporation</div>
                <div className="col-sm-4"></div>
                <div className="col-sm-5">
                    <div className="miniNav col-w20">Trang chủ</div>
                    <div className="miniNav col-w20">Giới thiệu</div>
                    <div className="miniNav col-w20">Dịch vụ</div>
                    <div className="miniNav col-w20">Linh kiện</div>
                    <div className="miniNav col-w20">Liên hệ</div>
                </div>
            </div>
        );
    }
}

export default Bottombar;