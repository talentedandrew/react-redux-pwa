import express from "express";
import path from 'path';
import React from "react";
import { renderToString } from "react-dom/server";
import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import hotMiddleware from "webpack-hot-middleware";
import config from "../../config/webpack.dev.js";
import App from "../client/App";
const app = express();
const compiler = webpack(config);
app.use(
  middleware(compiler, {
    contentBase: path.join(__dirname, "../public"),
    compress: true,
    port: 9000,
    open: true
  })
);


app.use(hotMiddleware(compiler));

app.use(express.static("public"));

// app.use(({ req, res }) => {
//   const html = renderToString(<App />);

//   res.send(`
//     <!DOCTYPE html>
//     <head>
//         <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title></title>
//         <meta name="description" content="">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link rel="stylesheet" href="">
//     </head>
//     <body>
//         <div id="react-pwa">${html}</div>
//         <script src="main.js"></script> 
//     </body>
//     </html>
//     `);
// });

app.listen(3000, () => console.log("Listening at port 3000"));
