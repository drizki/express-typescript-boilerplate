import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import helmet from 'helmet';

const PORT = 8080;
const server = express();
server.use(cors());
server.use(helmet()); 
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);
server.listen(PORT, () => console.log(`[SERVER RUNNING ON PORT ${PORT}]`));