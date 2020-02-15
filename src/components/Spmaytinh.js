import React, { Component } from 'react';

class Spmaytinh extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="col-sm-12 productBox">
                    <div className="paddingTop">
                        <img src="https://picsum.photos/240/112" alt='' />
                    </div>
                    <div className="products">
                        <div className="productName">DDR3_4GB Laptop Hynix</div>
                    </div>
                    <div className="prices">
                        <div>650.000 đ <s>690.000 đ</s></div>
                    </div>
                    <div className="desciption">
                        <div className="">DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...</div>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg btn-block buyNow"><i className="fas fa-shopping-cart"></i> MUA NGAY</button>
                </div>
            </div>
        );
    }
}

export default Spmaytinh;