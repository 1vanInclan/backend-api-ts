import  express  from "express";
import * as parkingServices from '../services/parkingServices';
import toNewParkingEntry from "../utils";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(parkingServices.getEntries());
});

router.get('/:id', (req, res) => {
    const parking = parkingServices.findById(+req.params.id);
    return (parking != null)
        ?   res.send(parking)
        :   res.send(404)
})

router.get('/types/:types', (req, res) => {
    const parking = parkingServices.filterByType(req.params.types);

    return (parking != null)
    ?   res.send(parking)
    :   res.send(404)
        
})

router.get('/price/max', (_req, res) => {
    const parking = parkingServices.filterByMax();
    return (parking != null)
    ?   res.send(parking)
    :   res.send(404)
        
})

router.get('/price/min', (_req, res) => {
    const parking = parkingServices.filterByMin();
    return (parking != null)
    ?   res.send(parking)
    :   res.send(404)
   
})

router.get('/amenie/:amenie', (req, res) => {
    const parking = parkingServices.filterByAmenie(req.params.amenie);
    return (parking != null)
    ?   res.send(parking)
    :   res.send(404)
   
})

router.post('/', (req, res) => {

    try {

        const newParkingEntry = toNewParkingEntry(req.body)

        const addedParkingEntry = parkingServices.addParking(newParkingEntry)
    
        res.json(addedParkingEntry)

    } catch (e:any) {
        res.status(400).send(e.message)
    }


})

export default router;