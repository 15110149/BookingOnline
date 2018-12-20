import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect'
import Mail from '../mail/mail'
import emailjs from 'emailjs-com'

function mapStateToProps(state) {
    return {

    };
}

class Form_Contact extends Component {
    constructor(props){
        super(props);
         this.state = {
             isRedirect : false,
             name:"",
             email:"",

         }
    }
  
    isChange = (event)=>{
      
        const ten = event.target.value;
     
     console.log(ten);
   
        // this.setState({
        //     [ten]:event.target.name

        // })
         
       
    }

    // submitForm= (event)=>{
    //     event.preventDefault();
    //     this.setState({
    //         isRedirect: true
    //     });
    // }

    submitForm= (event)=>{
   // var myform = ("myform");
    var myform = document.getElementById("myform");
    myform.submit(function(event){
        event.preventDefault();
  // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "mail";
      emailjs.init("user_fO7VzY7nYpCElZH26vl43");
      myform.find("button").text("Sending...");
      emailjs.sendForm(service_id,template_id,"myform")
          .then(function(){ 
            alert("Sent!");
           myform.find("button").text("Send");
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });
      return false;
    });

    }

    render() {
        if(this.state.isRedirect=== true)
        {
            console.log(this.state.name);
            return <Redirect to = "../home_page/Home_About.js"/>;
        }
        return (
            <div>
                <div>
  <div className="overlay-contact-h" />
  <section id="contact-h" className="bg-parallax contact-h-bg">
    <div className="container">
      <div id="contact-form">
        {/* idsend !*/}
        <div className="row">
          <div className="col-md-6">
            <div className="contact-h-cont">
              <h4 className="cl-white" >CUSTOMER'S INFORMATION</h4>
              <br />
              <form method="POST" id="myform">
                <div className="form-group cl-white">
                  <label htmlFor="name">Your Name</label>
                  <input onChange = {(event)=>{this.isChange(event)}} type="text" className="form-control" name="name" aria-describedby="nameHelp" placeholder="Enter name" />
                </div>
                <div className="form-group cl-white">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group cl-white">
                  <label htmlFor="subject">Phone Number</label>
                  <input type="text" className="form-control" name="phonenumber" aria-describedby="subjectHelp" placeholder="Enter subject" />
                </div>
                <div className="form-group cl-white">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows={3} defaultValue={""} />
                </div>
                <button onClick = {(event) =>{this.submitForme(event)}} className="btn btn-general btn-white" type="submit">
                  <i fa fa-right-arrow />SEND</button>
              </form>            
              <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            
            
            
            
             </div></div></div></div></div></section></div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Form_Contact);