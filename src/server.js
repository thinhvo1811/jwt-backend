import express from 'express';
require('dotenv').config();
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import configCors from './config/cors';
import initWebRoutes from './routes/web';
import initApiRoutes from './routes/api';
// import connection from './config/connectDB';

const app = express();
const PORT = process.env.PORT || 8080;

//config CORS
configCors(app);
//config view engine
configViewEngine(app);

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection db
// connection();

//init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
    console.log('>>> JWT Backend is running on the port = ' + PORT);
});
