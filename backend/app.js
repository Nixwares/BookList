const cors = require('cors')
const morgan = require('morgan')
const authRouter = require('./routers/auth')
const bookRouter = require('./routers/book.js')
const userRouter = require('./routers/user')
const leaderBoardRouter = require('./routers/leaderBoard.js')
const reviewsRouter = require('./routers/reviews.js')
const adminRouter = require('./routers/admin.js')
const authorRouter = require('./routers/author.js')
const { PORT } = require('./config')
const helmet = require('helmet')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(morgan())
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())
app.use(helmet())
app.use(express.json({ type: ['application/json', 'text/plain'] }))
app.use(express.urlencoded({ extended: true }))
app.use('/', authRouter)
app.use('/', bookRouter)
app.use('/', userRouter)
app.use('/', reviewsRouter)
app.use('/', leaderBoardRouter)
app.use('/', adminRouter)
app.use('/', authorRouter)

app.listen(PORT, () => console.log(`Server start port - ${PORT}`))
