import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select, message, Input } from "antd";
import CustomInput from "../../../component/CustomInput";
import CustomDatePicker from "../../../component/CustomDatePicker";
import validate from "./validate";
import axios from "axios";

const FormItem = Form.Item;

class ModalDatPhong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingDatPhong: false,
      KhachHang: "",
      Phong: "",
      SoNguoi: "",
      HoTen: "",
      Email: "",
      DienThoai: ""
    };
  }

  onChangeSoNguoi = e => {
    this.setState({ SoNguoi: e.target.value });
  };

  onChangeHoTen = e => {
    this.setState({ HoTen: e.target.value });
  };

  onChangeEmail = e => {
    this.setState({ Email: e.target.value });
  };

  onChangeDienThoai = e => {
    console.log(this.state);
    this.setState({ DienThoai: e.target.value });
  };

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };

  checkvalidate = () => {
    const { SoNguoi, HoTen, Email, DienThoai } = this.state;
    if (SoNguoi === "" || HoTen === "" || DienThoai === "" || Email === "") {
      message.error("Không được bỏ trống ô");
      return false;
    }
  };

  handleDatPhong = async () => {
    const { SoNguoi, HoTen, Email, DienThoai } = this.state;
    const { NgayDi, NgayDen, dataphongtrong, onCancel } = this.props;
    if (this.checkvalidate() !== false) {
      this.setState({ loadingDatPhong: true });
      const res = await axios.post("https://mighty-coast-18749.herokuapp.com/api/online", {
        Phong: dataphongtrong._id,
        NgayDi,
        SoNguoi,
        NgayDen,
        HoTen,
        Email,
        SoDienThoai: DienThoai
      });
      if ((res.status = 200)) {
        this.setState({ loadingDatPhong: false });
        message.success("Đặt phòng thành công");
        message.success("Kiểm tra mail để biết thêm chi tiết");

        this.setState({
          KhachHang: "",
          Phong: "",
          SoNguoi: "",
          HoTen: "",
          Email: "",
          DienThoai: ""
        });
        onCancel();
      }
    }
  };

  render() {
    const {
      NgayDen,
      NgayDi,
      handleSubmit,
      visible,
      onCancel,
      LoaiPhong
    } = this.props;
    const { SoNguoi, HoTen, Email, DienThoai,loadingDatPhong } = this.state;
    console.log("Modal dat phong ", this.props);
    console.log("Visible dat phong ", visible);
    return (
      <Modal
        title="Đặt phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values =>
            this.handleDatPhong(values, onCancel)
          )}
        >
          <FormItem label="Ngày đến" {...this.formItemLayout}>
            {NgayDen}
          </FormItem>

          <FormItem label="Ngày đi" {...this.formItemLayout}>
            {NgayDi}
          </FormItem>
          <FormItem label="Loại Phòng" {...this.formItemLayout}>
            {LoaiPhong !== null ? LoaiPhong[1] : null}
          </FormItem>
          <FormItem label="Số người" {...this.formItemLayout}>
            <Input
              placeholder="Nhập số người"
              value={SoNguoi}
              onChange={this.onChangeSoNguoi}
              //   ref={node => (this.userNameInput = node)}
            />
          </FormItem>
          <FormItem label="Họ tên" {...this.formItemLayout}>
            <Input
              placeholder="Nhập Họ tên"
              value={HoTen}
              onChange={this.onChangeHoTen}
              //   ref={node => (this.userNameInput = node)}
            />
          </FormItem>
          <FormItem label="Email" {...this.formItemLayout}>
            <Input
              placeholder="Nhập Email"
              value={Email}
              onChange={this.onChangeEmail}
              //   ref={node => (this.userNameInput = node)}
            />
          </FormItem>
          <FormItem label="Điện thoại" {...this.formItemLayout}>
            <Input
              placeholder="Nhập điện thoại"
              value={DienThoai}
              onChange={this.onChangeDienThoai}
              //   ref={node => (this.userNameInput = node)}
            />
          </FormItem>

          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
                loading={loadingDatPhong} // true
                disabled={loadingDatPhong}
            >
              Đặt phòng
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalDatPhong = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalDatPhong);

export default ModalDatPhong;
