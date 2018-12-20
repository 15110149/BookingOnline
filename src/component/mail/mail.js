import React, { Component } from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com'
import Form_Contact from '../form_contact/Form_Contact'
function mapStateToProps(state) {
    return {

    };
}
// var myform = $("form#myform");
// //var myform = document.getElementById("myform");
// myform.submit(function(event){
// 	event.preventDefault();

//   // Change to your service ID, or keep using the default service
//   var service_id = "default_service";
//   var template_id = "mail";
//   emailjs.init("user_fO7VzY7nYpCElZH26vl43");
//   myform.find("button").text("Sending...");
//   emailjs.sendForm(service_id,template_id,"myform")
//   	.then(function(){ 
//     	alert("Sent!");
//        myform.find("button").text("Send");
//     }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });
class mail extends Component {
    render() {
        return (
            <div>
          {/* <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
                <script type="text/javascript"> (function(){ emailjs.init("user_fO7VzY7nYpCElZH26vl43")})();</script>
            */}
              

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(mail);