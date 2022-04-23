const express=require('express');
const mongoose = require('mongoose');
const session = require("express-session")
const redis=require('redis')

const  MONGO_USER=require('./config/config.js').MONGO_USER;
const  MONGO_USER1=require('./config/config.js').MONGO_USER1;

const SESSION_SECRET=require('./config/config.js').SESSION_SECRET;

let RedisStore = require("connect-redis")(session)
let redisClient= redis.createClient({
        host: 'redis',
        port: 6379

})
const postRouter=require("./routes/postRoutes.js")


const userRouter=require('./routes/userRoute.js');
const app=express();
app.use(session({
	store:new RedisStore({client: redisClient}),
	secret:SESSION_SECRET,
	cookie:{
		secure: false,
		resave: false,
		saveUnitialized: false,
		httpOnly: true,
		maxAge: 30000
	}
}))
app.use(express.json());
const connectRetry= ()=>{
	mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_USER1}@mongo:27017/?authSource=admin`)
        .then(()=>console.log("success!!"))
                .catch((e)=>{console.log(e);
				setTimeout(connectRetry,5000)


		});


}

connectRetry();

app.get("/", (req,res)=>{
 res.send("<h2>hi there!!</h2>");
})
app.use("/posts",postRouter)
app.use("/users",userRouter)
const port= process.env.PORT || 3000;
app.listen(port,()=>console.log(`listeming on ${port} ${MONGO_USER1} ${MONGO_USER}`));
