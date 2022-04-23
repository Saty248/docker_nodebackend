const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
	username:{
		type:String,
		required:[true,'include name'],
		unique:true,
	},
	password:{
		type:String,
		
		unique:true
	}
});

const User=mongoose.model("user",userSchema);
module.exports=User;
