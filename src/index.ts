import express from 'express'; 

import parkingRouter from './routes/parking';


const app = express();
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 3000;

app.use('/api/parkings', parkingRouter);

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});



