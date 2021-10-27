//Import Express framework
const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');


// Bây giờ, hãy tạo ứng dụng Express:
const app = express();
//Và đặt giá trị Port:
const PORT = process.env.PORT || 2000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Bây giờ, chúng ta có thể tạo một api GET đơn giản. Khi người dùng truy cập api,
// thông báo "Hello World, from express" sẽ xuất hiện. Chúng tôi muốn đặt nó ở trên trang chủ, vì vậy URL cho điểm cuối là /:
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
//
const PRODUCTS = [
    {
      imageLink: "http://mvbinz.xyz/images/1.jpg",
      name: "Rayon a-line Dress",
      price: "13.45",
      type: "Other",
    },
  ];
  app.post("/products", (req, res) => {
    const product = req.body;
  
    // Output the product to the console for debugging
    console.log(product);
    PRODUCTS.push({...product});
  
    res.status(201).json({mess: "Products is added to the database"});
  });

  app.get("/products", (req, res) => {
    res.status(200).json({ products: PRODUCTS });
  });
  

//Cuối cùng viết câu lệnh để lắng nghe request từ người dùng:
app.listen(PORT, () =>
  console.log('Hello world app listening on port ${PORT} with url http://localhost:${PORT}')
);