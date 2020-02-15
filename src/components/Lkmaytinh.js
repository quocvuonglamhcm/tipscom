import React, { Component } from 'react';
import Spmaytinh from './Spmaytinh';

class Lkmaytinh extends Component {
    render() {
        return (
            <div className="mayTinh">
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                        <div className="lkMaytinh">linh kiện máy tính</div>
                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>
                <div className="row">
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
                <Spmaytinh />
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

export default Lkmaytinh;