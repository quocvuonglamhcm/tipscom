import React, { Component } from 'react';
import Spmayin from './Spmayin';

class Banner extends Component {
    render() {
        return (
            <div className="mayIn">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="lkMaytinh">linh kiện máy in</div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                <Spmayin />
                <Spmayin />
                <Spmayin />
                <Spmayin />
                <Spmayin />
                <Spmayin />
                <Spmayin />
                <Spmayin />
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-sm-5">
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary btn-lg btn-block viewAll">XEM TẤT CẢ</button>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;