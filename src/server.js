import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/appRoutes';

const PORT = 3000;
const app = express();
const MONGO_URL = 'mongodb://mongo:27017/node-app-db';

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, { useNewUrlParser: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is listening on port ${PORT}`)
);
