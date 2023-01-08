const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// "mongodb://localhost/userportfolio",

mongoose.connect("mongodb://localhost/userportfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


    // const payload = {
    //     id: user._id
    //   };
       
      // notice that we're using the SECRET_KEY from our .env file
    //   const userToken = jwt.sign(payload, process.env.SECRET_KEY);

  //   const connectDB =  async ()=>{

  //     try{
  //         const conn = await mongoose.connect(process.env.MONGO_URI,{
  //             //must add in order to not get any error masseges:
  //             useUnifiedTopology:true,
  //             useNewUrlParser: true,
  //             useCreateIndex: true
  //         })
  //         console.log(`mongo database is connected!!! ${conn.connection.host} `)
  //     }catch(error){
  //         console.error(`Error: ${error} `)
  //         process.exit(1) //passing 1 - will exit the proccess with error
  //     }
  
  // }
  
  // export default connectDB