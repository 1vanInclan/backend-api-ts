const cors = require('cors');

import express from 'express'; 
import parkingRouter from './routes/parking';


const app = express();
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 5000;

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE']
}));

app.use('/api/parkings', parkingRouter);

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});



