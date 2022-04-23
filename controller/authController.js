const User= require('../models/usermodel.js');
const bcrypt=require('bcryptjs');


exports.signUp=async (req,res)=>{
		try{
		const {username,password}=req.body;
		const hashpassword=await bcrypt.hash(password,12);
		const newUser=User.create({username,password:hasspassword,
		 });
		res.status(201).json({
			status:'success',
			data:{
				user:newUser}
		})
	}
	catch (e){
		res.status(400).json({
			status:"fail",
		});
	}
}

exports.login=async (req,res)=>{
        try{
                const {username,password}=req.body;
                const user=findOne({username})
		if(!user){
			return res.status(404).json({
				status:'fail',
				message:'user not found'
			})

                 }
		const isCorrect=await bcrypt.compare(pasword,user.password)

		if(isCorrect){
			req.session.user= user;
			res.status(200).json({
				status:'success'
			})
		}
		else{
			res.status(400).json({
				status:'fail',
				mwssage:'wrong password'
			})
		}
                
                                        
        }
        catch (e){
                res.status(400).json({
                        status:"fail",
                });
        }
}
