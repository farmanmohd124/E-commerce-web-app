import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectBD from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import producRoutes from './routes/productRoutes.js'
import cors from 'cors'

// configure dotenv
dotenv.config();

//database config
connectBD();

const app = express();
// middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use('/api/v1/product', producRoutes);

//rest api
app.get("/", (req, res) => {
    res.send(
        '<h1>welcome to ecommerce app<h1/>'
    );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`.bgCyan.white);
});