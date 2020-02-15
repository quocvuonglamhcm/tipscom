import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer row">
                <div className="col-sm-4 postsList">
                    <div className="posts">Bài viết gần đây</div>
                    <div className="posts">Bài viết 1</div>
                    <div className="posts">Bài viết 2</div>
                    <div className="posts">Bài viết 3</div>
                    <div className="posts">Bài viết 4</div>
                </div>
                <div className="col-sm-4">
                    <div className="reasons1">Tại sao nên chọn TSC</div>
                    <div className="reasonsList">
                        <div className="reasons">Mang đến giải pháp tối ưu cho mọi vấn đề về máy tính, thiết bị văn phòng.</div>
                        <div className="reasons">Dịch vụ nhanh chóng, chuyên nghiệp, hiệu quả cao</div>
                        <div className="reasons">Chi phí cạnh tranh, tiết kiệm thời gian cho bạn và doanh nghiệp</div>
                        <div className="reasons">Tư vấn 24/7 qua điện thoại, Skype, Zalo, Facebook</div>
                    </div>
                </div>
                <div className="col-sm-4 aboutUs">
                    <div className="abouts">Dịch vụ vi tính TSC</div>
                    <div className="about">TSC  cung cấp giải pháp tối ưu về các vấn đề liên quan đến máy tính, máy in, thiết bị văn phòng. Đến với TSC bạn hoàn toàn yên tâm về chất lượng dịch vụ.</div>
                    <div className="mail"><i className="fas fa-envelope icon"></i>quocvuonglamhcm@gmail.com</div>
                    <div className="phone"><i className="fas fa-phone-volume icon"></i>096 994 2689</div>
                    <div className="address"><i className="fas fa-map-marker-alt icon"></i>Địa chỉ:  177 Lũy Bán Bích, Tân Thành, Tân Phú, HCM</div>
                </div>
            </div>
        );
    }
}

export default Footer;