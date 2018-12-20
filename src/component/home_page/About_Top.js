import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select,Radio } from "antd";
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import CustomerDatePicker from "../CustomDatePicker/index.js"
import CustomInput from "../CustomInput/index.js"
import DropdownButton from "../DropdownButton/index.js"
const FormItem = Form.Item;
function mapStateToProps(state) {
    return {

    };
}

class About_Top extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        //   LoaiKhachHang: "",
        //   GioiTinh: true,
        };
      }
    
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
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">
                        <div className="row title-bar">
                            <div className="col-md-12">
                                <h1 className="wow fadeInUp">BOOKING NOW</h1>
                                <div className="row">   
                                   <div className="col-md-3 col-sm-8 wow fadeInDown">
                                      <div className="career-p3-cont text-center">
                                    
                                        <FormItem label="Ngày Đến" className="career-p3-cont text-center">
                                            <Field
                                                name="NgayDen" {...this.formItemLayout}
                                                type="text"
                                                component={CustomerDatePicker}
                                             />
                                        </FormItem>
                                       
                                      </div>
                                   </div>

                                   <div className="col-md-3 col-sm-8 wow fadeInDown">
                                      <div className="career-p3-cont text-center">
                                    
                                        <FormItem label="Ngày Đi" >
                                            <Field
                                                name="NgayDen" {...this.formItemLayout}
                                                type="text"
                                                component={CustomerDatePicker}
                                             />
                                        </FormItem>
                                       
                                      </div>
                                   </div>

                                    <div className="col-md-3 col-sm-8 wow fadeInDown">
                                      <div className="career-p3-cont text-center">
                                    
                                        <FormItem label="Loại Phòng" >
                                            <Field
                                                name="LoaiPhong" {...this.formItemLayout}
                                                type="text"
                                                component={DropdownButton}
                                             />
                                        </FormItem>
                                       
                                      </div>
                                   </div>


                                <div className="col-md-3 col-sm-8 wow fadeInDown">
                                      <div className="career-p3-cont text-center">
                                    <div style={{paddingTop: '10%'}}>
                                      <button className="btn btn-general btn-white" role="button"  >
                                      <Link to="/news" className="nav-link smooth-scroll"  style={{color : 'rgb(243, 181, 9)'}}>SEARCH</Link>
                                        </button>
                                    </div>
                                      </div>
                                   </div>



                                </div>
                               
                            </div>
                            {/* <div style={{display: 'flex', marginLeft:'90%'}}>
                           <button className="btn btn-general btn-white" role="button"  >
                            <Link to="/news" className="nav-link smooth-scroll"  style={{color : 'rgb(90, 194, 21)'}}>SUBMIT</Link>
                            </button>
                     </div> */}
                            </div>
                   
                        </div>
                    
                </section>
            </div>
        );
    }
}

// export default connect(
//     mapStateToProps,
// )(About_Top);

About_Top = reduxForm({
    form: 'editForm' ,
   //   validate, // <--- validation function given to redux-form
    forceUnregisterOnUnmount: true,
  })(About_Top)
  export default About_Top;