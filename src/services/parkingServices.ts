import { newParkingEntry, ParkingEntry } from '../types';
import parkingData from './parkings.json';

const parkings: ParkingEntry[] = parkingData as ParkingEntry[];

export const getEntries = (): ParkingEntry[] => parkings;

export const findById = (id: number): ParkingEntry | undefined => {
    const entry = parkings.find(p => p.Id === id)
    return entry;
}

export const filterByType = (type: string): ParkingEntry [] | undefined => {
    const entry = parkings.filter( p => p.Type === type)
    return entry;
}

export const filterByMax = (): ParkingEntry [] => {
    const entry = parkings.sort( (a,b) => b.Price - a.Price );
    return entry;
}

export const filterByMin = (): ParkingEntry [] => {
    const entry = parkings.sort( (a,b) => a.Price - b.Price );
    return entry;
}

export const filterByAmenie= (amenie: string): ParkingEntry [] | undefined => {
    const entry = parkings.filter( (p) => p.Amenities.includes(amenie.toLocaleLowerCase()) )
    return entry;
}


export const addParking = (newParkingEntry: newParkingEntry): ParkingEntry => {
    const newParking = {
        Id: Math.max(...parkings.map( p => p.Id )) + 1,
        ...newParkingEntry
    }

    parkings.push(newParking)
    return newParking
}

export const deleteById = (id: number): ParkingEntry[] | undefined => {
    const parking = parkings.filter(p => p.Id === id);
    const deleteParking = parkings.findIndex(p => p.Id === id);

    parkings.splice(deleteParking,1);
        
    return parking;
}