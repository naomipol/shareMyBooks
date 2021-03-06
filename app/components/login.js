import React from 'react';
import * as restService from './../service/restService';
var $ = require("jquery");

var user={};

class Login extends React.Component{
	login(){
		$("#noUser").text("");
		var err=false; 
		var email=$("#email").val();
		var password=$("#password").val();
		if(password.trim()=="" || email.trim()==""){
	        $("#spnErr").text("You must fill in required fields!!! :(");
	        err=true;
	    }else{
	    	 $("#spnErr").text("");
	    }
	    if(!err){
	    	var user={
	    		"email":email,
	    		"password":password
	    	};
			restService.post('/users/login',user).then(function(fetchUser){
				console.log("Im here");
				//result = fetchUser;
				console.log(fetchUser);
				if(!fetchUser){
					$("#noUser").text("one detail or more is incorrect");
				}else{
					this.props.onUserChange(fetchUser);
				}
				console.log("firstRender");	
				
			});
		}
	}
	render(){
		return(
			<div>
			enter your details to log in:<br/><br/>
			Email: <input type="text" id="email"/><br/><br/>
			Password <input type="password" id="password"/><br/><br/>
		 	<button className="login"  onClick={()=>this.login() } >login</button>
		 	<span id="spnErr"></span><br/><br/>
		 	<span id="noUser"></span><br/><br/>

		 	</div>
		);
	}
}
 export default Login;
