
// creating conncetion
const mongoose = require('mongoose');
const express = require("express");
const bodyParser=require("body-parser")
const app = express();
// require('dotenv').config()

const DB = 'mongodb+srv://rahul:rahul2018$$$$$@cluster0.nderl.mongodb.net/mernstack?retryWrites=true&w=majority'

// app.use(express.json());
// // middleware
// const middleware = (req,res,next) =>{
//   console.log(`hello my middleware`);
//   next();
// }

// // code for  connecting with databse 
mongoose.connect(DB).then(() => {
  console.log(`connection successfull`);
}).catch((err) => console.log(`no connection`));

const { spawn } = require('child_process');

// const childpython = spawn('python',['--version']);
const hellopython = spawn('python',['cap.py']);
const childpython = spawn('python',['screenrecorder.py']);
// const videopython = spawn('python',['Videoaudio.py']);


// for screenrecodrer file starts from here
childpython.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
childpython.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
childpython.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
// screenrecorder ends here

// image caputre starts from here
hellopython.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
hellopython.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
hellopython.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
// image capture ends here
// 
// videopython.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// videopython.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });
// videopython.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// 




// // console.log("hello everyone"); it is used to check server running output in CMD

app.listen(8000, () =>{
  console.log(`server is running at port no 8000`);  
}) 