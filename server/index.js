import express from 'express';
import { engine } from 'express-handlebars'
import path from 'path'
import { createRoles } from './libs/initialSetup'
import authRoutes from './routes/auth.routes'
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes'
import productsRoutes from "./routes/products.routes";
import "./database"
import cors from 'cors'
var bodyParser = require('body-parser')

const app = express()
createRoles()

// Template Engine
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/products", productsRoutes)
app.use(indexRoutes)

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log("servidor conectado")
} )