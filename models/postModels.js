const mongoose=require('mongoose');

const postSchema =new mongoose.Schema({
	title:{
		type:String,
		required:[true,"include title"]
	},
	body:{
		type:String,
		required:[true,"body needed"]
	}
});

const post= mongoose.model("post",postSchema);

module.exports= post;
