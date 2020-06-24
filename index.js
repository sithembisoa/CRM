import express from 'express';
import routes from './src/route/crm_routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser Setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

// Serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Node and Express server running on port ${PORT}`)
);