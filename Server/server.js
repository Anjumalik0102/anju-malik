require('dotenv').config();  
const cors = require('cors');
const express = require("express");
const path = require('path');
const app = express();
const router = require("./router/auth.router");
const connectDb = require('./utils/db');
app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'build')));

// // For all routes, send the index.html file to support React routing (if applicable)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get('/', (req, res) => {
  res.send("hello anju");
});

app.use("/api/auth" , router);

// app.options('*', cors());
const port = process.env.PORT;
connectDb().then(()=>{
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
})


