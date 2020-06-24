import express from 'express';
import routes from './src/route/crm_routes';

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Node and Express server running on port ${PORT}`)
);