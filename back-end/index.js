const express = require('express');
const cors = require ("cors")
const { apiRouter } = require('./routes');
const { connectDB } = require('./config/db');
const cookieParser = require('cookie-parser');
const { handlerError } = require('./utils/error');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
})
);

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api",apiRouter);

app.use(handlerError)

app.all("*",(req,res)=>{
  res.status(404).json({ message : "end point does exist"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
