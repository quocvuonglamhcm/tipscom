import React, { Component } from 'react';

class Headbar extends Component {
    render() {
        return (
            <div className="row headbar">
                <div className="col-sm-2 logo">
                    LOGO
				</div>
                <div className="col-sm-3">

                </div>
                {/* <!-- navigation bar--> */}
                {/* <!-- <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div> --> */}
                <div className="col-sm-7">
                    <div className="navigation">
                        <div className="navItem col-w20">Trang chủ</div>
                        <div className="navItem col-w20">Giới thiệu</div>
                        <div className="navItem col-w20">Dịch vụ</div>
                        <div className="navItem col-w20">Linh kiện</div>
                        <div className="navItem col-w20">Liên hệ</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headbar;