import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row topbar">
                <div className="col-sm-4">
                    <div className="float-left"><i className="fas fa-envelope icon"></i> quocvuonglamhcm@gmail.com</div>
                    <div className="float-right"><i className="fas fa-phone-volume icon"></i> 0969.942.689</div>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-2 social">
                    <div className="col-w20">
                        <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className="col-w20">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col-w20">
                        <i className="fab fa-pinterest-square"></i>
                    </div>
                    <div className="col-w20">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="col-w20">
                        <i className="fab fa-skype"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;