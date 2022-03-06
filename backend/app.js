const cors = require('cors');
const  authRouter = require('./auth.js');
const  bookRouter = require('./book.js');
const  userRouter = require('./user.js');
const reviewsRouter  = require('./reviews.js');
const { PORT } = require('./config');
const helmet = require('helmet');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(helmet());
app.use(express.json({type: ['application/json', 'text/plain']}));  
app.use('/', authRouter);
app.use('/', bookRouter);
app.use('/', userRouter);
app.use('/', reviewsRouter);

app.listen(PORT, () => console.log(`Server start port - ${PORT}`));