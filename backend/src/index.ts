import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"


// configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// rouers here
app.use('/dashboard', dashboardRoutes); // http://localhost:8000/dashboard
app.use('/products', productRoutes); // http://localhost:8000/product
app.use('/users', userRoutes); // http://localhost:8000/users

// port server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})


