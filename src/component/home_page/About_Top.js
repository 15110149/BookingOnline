import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import {
  Modal,
  Row,
  Button,
  Form,
  Select,
  Radio,
  DatePicker,
  message
} from "antd";
import "antd/dist/antd.css";
import CustomInput from "../CustomInput/index.js";
import ModalDatPhong from "./ModalDatPhong";

const FormItem = Form.Item;

message.config({
  top: 100
});

class About_Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiPhong: [],
      dataphongtrong: null,
      valueLoaiPhong: null,
      visibleModal: false,
      loadingCheckPhongTrong: false,
      NgayDi: "",
      NgayDen: ""
    };
  }

  handleFetchLoaiPhong = async () => {
    const res = await axios.get(
      "https://mighty-coast-18749.herokuapp.com/api/loaiphong"
    );
    if ((res.status = 200)) {
      this.setState({ LoaiPhong: res.data });
    }
    console.log(this.state);
  };

  handleChangeLoaiPhong = value => {
    console.log(value);
    this.setState({ valueLoaiPhong: value });
  };

  handleRenderSelectLoaiPhong = data =>
    data.map(item => {
      return (
        <Select.Option name="LoaiPhong" value={[item._id, item.TenLoaiPhong]}>
          {item.TenLoaiPhong}
        </Select.Option>
      );
    });

  handleCheckPhongTrong = async e => {
    const { NgayDi, NgayDen, valueLoaiPhong } = this.state;
    console.log(new Date(NgayDi).getTime() < new Date(NgayDen).getTime());
    if (NgayDen === "" || NgayDi === "" || valueLoaiPhong === null) {
      console.log(this.state);
      message.error("Vui lòng điền đầy đủ thông tin để tìm phòng");
    } else if (new Date(NgayDi).getTime() < new Date(NgayDen).getTime()) {
      message.error("Ngày đi phải lớn hơn ngày đến ");
    } else {
      this.setState({ loadingCheckPhongTrong: true });
      const res = await axios.post(
        "https://mighty-coast-18749.herokuapp.com/api/phong/phongtrong",
        {
          LoaiPhong: valueLoaiPhong[0],
          NgayDi,
          NgayDen
        }
      );
      if ((res.status = 200)) {
        console.log("res 200");
        this.setState({
          dataphongtrong: res.data,
          loadingCheckPhongTrong: false
        });
        if (this.state.dataphongtrong.length === 0) {
          message.error("Hiện tại không có phòng cho loại phòng này");
        } else {
          message.success("Tìm thấy phòng");
          this.setState({ visibleModal: true });
        }
      }
      console.log(this.state);
    }
    e.preventDefault();
  };

  onChangeNgayDi = (date, dateString) => {
    this.setState({ NgayDi: dateString });
    console.log(dateString);
  };

  onChangeNgayDen = (date, dateString) => {
    this.setState({ NgayDen: dateString });
    console.log(dateString);
  };

  handleCancel = () => {
    this.setState({ visibleModal: false});
  };

  componentDidMount = () => {
    this.handleFetchLoaiPhong();
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    console.log("State ", this.state);
    return (
      <div>
        <section id="about" className="about">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp">BOOKING NOW</h1>
                <Form onSubmit={values => this.handleCheckPhongTrong(values)}>
                  <div className="row">
                    <div className="col-md-3 col-sm-8 wow fadeInDown">
                      <div className="career-p3-cont text-center">
                        <FormItem
                          label="Ngày Đến"
                          className="career-p3-cont text-center"
                        >
                          <DatePicker
                            format="MM/DD/YYYY"
                            onChange={this.onChangeNgayDen}
                          />
                        </FormItem>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-8 wow fadeInDown">
                      <div className="career-p3-cont text-center">
                        <FormItem label="Ngày Đi">
                          <DatePicker
                            format="MM/DD/YYYY"
                            onChange={this.onChangeNgayDi}
                          />
                        </FormItem>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-8 wow fadeInDown">
                      <div className="career-p3-cont text-center">
                        <FormItem label="Loại Phòng">
                          <Select
                            name="LoaiPhong"
                            style={{ width: 200 }}
                            onChange={this.handleChangeLoaiPhong}
                          >
                            {this.state.LoaiPhong.length > 0
                              ? this.handleRenderSelectLoaiPhong(
                                  this.state.LoaiPhong
                                )
                              : console.log("Không có list")}
                          </Select>
                        </FormItem>
                      </div>
                    </div>
                    {/* <Button
                      type="primary"
                      htmlType="submit"
                      className="button"
                      onClick={e=> e.preventDefault()}
                      //   loading={adddatphong.isFetching} // true
                      //   disabled={adddatphong.isFetching}
                    >
                      Thêm
                    </Button> */}
                    <div className="col-md-3 col-sm-8 wow fadeInDown">
                      <div className="career-p3-cont text-center">
                        <div style={{ paddingTop: "28%" }}>
                          <Button
                            className="btn btn-general btn-white"
                            role="button"
                            onClick={this.handleCheckPhongTrong}
                            loading={this.state.loadingCheckPhongTrong}
                            disabled={this.state.loadingCheckPhongTrong}
                          >
                            {/* <Link
                              to="/news"
                              className="nav-link smooth-scroll"
                              style={{ color: "rgb(243, 181, 9)" }}
                            > */}
                            SEARCH
                            {/* </Link> */}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              {/* <div style={{display: 'flex', marginLeft:'90%'}}>
                           <button className="btn btn-general btn-white" role="button"  >
                            <Link to="/news" className="nav-link smooth-scroll"  style={{color : 'rgb(90, 194, 21)'}}>SUBMIT</Link>
                            </button>
                     </div> */}
            </div>
          </div>
        </section>
        <ModalDatPhong
          dataphongtrong={this.state.dataphongtrong}
          LoaiPhong={this.state.valueLoaiPhong}
          NgayDen={this.state.NgayDen}
          NgayDi={this.state.NgayDi}
          visible={this.state.visibleModal}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          {...this.props}
        />
      </div>
    );
  }
}

// export default connect(
//     mapStateToProps,
// )(About_Top);

About_Top = reduxForm({
  form: "editForm",
  //   validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true
})(About_Top);
export default About_Top;
