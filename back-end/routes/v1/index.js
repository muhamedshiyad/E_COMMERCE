const express = require('express');
const { userRouter } = require('./userRouters');
const { adminRouter } = require('./adminRouters');
const { orderRouter } = require('./orderRouters');
const { productRouter } = require('./producteRouter');
const { cartRouter } = require('./cartRouters');
const { reviewRouter } = require('./reviewRoutes');

const v1Router = express.Router();

v1Router.use("/user",userRouter);
v1Router.use("/admin",adminRouter);
v1Router.use("/order",orderRouter);
v1Router.use("/product",productRouter);
v1Router.use("/cart",cartRouter);
v1Router.use("/review",reviewRouter);


module.exports = {v1Router};