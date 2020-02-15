import React, { Component } from 'react';

class Notes extends Component {
    render() {
        return (
            <div className="note row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div><b>Đối với khách hàng ký hợp đồng dài hạn sẽ có những chính sách ưu đãi kèm theo</b></div>
                    <div><strong>Những vấn đề khác về máy tính, máy in, hệ thống mạng vui lòng gọi 0969.942.689 để được báo giá  chi tiết</strong></div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        );
    }
}

export default Notes;