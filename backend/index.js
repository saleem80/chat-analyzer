require("dotenv").config();
const Op = require("sequelize").Op;
const { sequelize, Orders, Visitors, analytics, ip_address } = require("./models");
const express = require("express");
const decompress = require("decompress");
// const config = require("./config");
const app = express();
// const { promisify } = require("util");
HttpsProxyAgent = require("https-proxy-agent");
const proxy = process.env.http_proxy || "localhost:3000"; // HTTP/HTTPS proxy to connect to
const agent = new HttpsProxyAgent(proxy);
const axios = require("axios");
var cors = require("cors");
var http = require("http").createServer(app);
app.use(cors());
const { mail } = require("./utils/mailer");
const fileupload = require("express-fileupload");
const fs = require("fs");
const whatsapp = require("whatsapp-chat-parser");
const path = require("path");
// const analytics = require("./models/analytics");
app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "300mb" }));

// app.get('/', (req, res) => {
//     res.send("Hello..");
// });

// CheckOut Order API
app.post("/api/v1/checkout_order", async (req, res) => {
  const {
    name,
    phone,
    address,
    city,
    pincode,
    email,
    payment_id,
    payment_method,
    from_ip,
    from_browser,
  } = req.body;
  try {
    var date = Date();
    const order = await Orders.create({
      name,
      phone,
      address,
      city,
      pincode,
      email,
      payment_id,
      payment_method,
      from_ip,
      from_browser,
      date,
    });
    return res.json({ msg: "Order Success", details: order });
  } catch (e) {
    //console.log(e);
    return res.status(500).json(e);
  }
});

// Checkout Order Update
app.post("/api/v1/checkout_order_update/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  const { status, capture_status, payment_id } = req.body;
  try {
    const order_update = await Orders.update(
      { status, capture_status, payment_id  },
      { where: { order_id } }
    );
    return res.json({ msg: "Success", details: order_update });
  } catch (e) {
    //console.log(e);
    return res.status(500).json(e);
  }
});

// Fetch All Orders
app.get("/api/v1/fetch_orders", async (req, res) => {
  try {
    const orders = await Orders.findAll();
    return res.json(orders);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Fetch a single Order
app.get("/api/v1/fetch_single_order/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  try {
    const order = await Orders.findOne({
      where: { order_id },
    });
    return res.json(order);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// Visitors API
app.post("/api/v1/visitors", async (req, res) => {
  const { name, email, phone, msg } = req.body;
  try {
    const visitor = await Visitors.findOne({ where: { email, phone } });
    if (visitor) {
      return res.json({ msg: "Email & Phone Numnber already Exist!" });
    }
    const order = await Visitors.create({
      name,
      email,
      phone,
      msg
    });
    const mailSent = await mail(email,msg);
    return res.json({ Status: "success" });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

// Post TXT File APi
app.post("/api/v1/postTxt", async(req, res) => {
  const file = req.files.file;
  const result = await analytics.findOne({
    where: { id : 1 },
    raw: true
  });
  console.log(result.txt_count)
  const result_update = await analytics.update({ txt_count: (result.txt_count + 1) }, { where: { id : 1 } });
  // Timestamp for renaming the file
  var renamed = new Date().getTime() + ".txt";
  // Moving File to myuploads folder
  file.mv(path.join(__dirname, "./myuploads/" + renamed), (err) => {
    if (err) {
      // console.log(err);
      return res.json({ msg: err });
    }
    // readFile function to parse and send txtn as response
    // readFile(req, res, renamed);
    const fileContents = fs.readFileSync(
      path.join(__dirname, "./myuploads/" + renamed),
      "utf8"
    );

    whatsapp
      .parseString(fileContents)
      .then((messages) => {
        // delete files
        fs.unlink(
          path.join(__dirname, "./myuploads/" + renamed),
          function (err) {
            if (err) console.log("err", err);
          }
        );
        return res.send(messages);
        // Do whatever you want with messages
      })
      .catch((err) => {
        return res.send(err);
        // Something went wrong
      });
  });
});

// Zip file Endpoint
app.post("/api/v1/zip", async (req, res) => {
  try {
    const result = await analytics.findOne({
      where: { id : 1 },
      raw: true
    });
    console.log(result.zip_count)
    const result_update = await analytics.update({ zip_count: (result.zip_count + 1) }, { where: { id : 1 } });

    const target = path.join(__dirname, "./myuploads");
    const file = req.files.file;
    var renamed = new Date().getTime() + ".zip";
    file.mv(path.join(__dirname, "./myuploads/" + renamed), (err) => {
      if (err) {
        // console.log(err);
        return res.json({ msg: err });
      }
      unzipFiles(req, res, renamed);
    });
    //return res.json({"msg":"ok"});
  } catch (e) {
    console.log("err", e);
    res.status(500).json(e);
  }
});
// Unzipping Files
async function unzipFiles(req, res, renamed) {
  // Unzip file into myuploads folder
  var file_name;
  const f = await decompress(
    path.join(__dirname, "./myuploads/" + renamed),
    path.join(__dirname, "./myuploads/")
  ).then((files) => {
    file_name = files[0].path;
  });
  // Delete the zip folder after extracting files
  fs.unlink(path.join(__dirname, "./myuploads/" + renamed), function (err) {
    if (err) console.log(err);
  });
  console.log(renamed);
  console.log(file_name);
  const fileContentss = fs.readFileSync(
    path.join(__dirname, "./myuploads/" + file_name),
    "utf8"
  );

  whatsapp.parseString(fileContentss).then((messages) => {
    // delete file
    fs.unlink(path.join(__dirname, "./myuploads/" + file_name), function (err) {
      if (err) console.log("err", err);
    });
    return res.send(messages);
    // Do whatever you want with messages
  });
  // return res.json("ok");
}

app.post('/api/v1/ip', async (req, res) => {
  try {
    const ip = req.body.ip;
    const ip_res = await ip_address.findOne({
      where: { ip },
      raw: true
    });
    console.log(ip_res)
    if( ip_res != null){
      return res.json({ status: "success", msg: "Already exist" });
    }
    const ip_cre = await ip_address.create({
      name: "user",
      ip
    });
    const result = await analytics.findOne({
      where: { id : 1 },
      raw: true
    });
    console.log(result.user_count)
    const result_update = await analytics.update({ user_count: (result.user_count + 1) }, { where: { id : 1 } });
    return res.json({ status: "success", msg: "Added Successfully!" });
  }
  catch (e) {
      console.log(e);
      return res.json(e);
  }
})

app.get('/api/v1/stats', async (req, res) => {
  try {
      const orders = await Orders.findAll();
      const visitors = await Visitors.findAll();
      const users_counts = await analytics.findOne({
        where: { id : 1 },
        raw: true
      });
      var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
      var today = new Date()
      // Get last 24 hrs record
      const last_24_hrs = await Orders.findAll({
          where: {
              date: {
                  [Op.between]: [yesterday, today]
              }
          }
      })
      var total_users = orders.length + visitors.length + users_counts.user_count;
      // var total_orders_per_day = last_24_hrs.length;
      // var total_orders = orders.length;
      var total_analyzed = users_counts.txt_count + users_counts.zip_count;
      var total_analyzed_per_day = last_24_hrs.length
      // console.log(total_users)
      // console.log(total_orders_per_day)
      // console.log(total_orders)
      // Set default values
      if (total_users < 150) total_users = 150
      if (total_analyzed_per_day < 10) total_analyzed_per_day = 15
      if (total_analyzed < 90) total_orders = 100
      return res.json({ "Total_Users": total_analyzed, "total_analyzed_per_day": total_analyzed_per_day, "total_analyzed": total_analyzed });
  }
  catch (e) {
      console.log(e);
      return res.json(e);
  }
});

http.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
    console.log(`server running on port ${process.env.PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    // console.log(`server running on port ${process.env.PORT}`);
  }
});
