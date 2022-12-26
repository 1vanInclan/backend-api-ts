import { newParkingEntry } from "./types";


const parseName = (nameFromRequest: any): string =>  {
    if (!isString(nameFromRequest)){
        throw new Error('Incorrect or missing Type')
    }

    return nameFromRequest;
}

const parseAddress = (addressFromRequest: Object): any =>  {
    if( !isObject(addressFromRequest) ){
        throw new Error('Incorrect or missing Image')
    }

    return addressFromRequest;
}

const parseAmenities = ( amenitiesFromRequest: any[] ): string[] => {
    if( !isArrayString(amenitiesFromRequest) ){
        throw new Error('Incorrect or missing Amenitie')
    }

    return amenitiesFromRequest;
}

const parseScore = ( scoreFromRequest: any ): number => {
    if( !isNumber(scoreFromRequest) ){
        throw new Error('Incorrect or missing Score')
    }

    return scoreFromRequest;
}

const parsePrice = ( priceFromRequest: any ): number => {
    if( !isNumber(priceFromRequest) ){
        throw new Error('Incorrect or missing Price')
    }

    return priceFromRequest;
}

const parseType = (typeFromRequest: any): string =>  {
    if (!isString(typeFromRequest)){
        throw new Error('Incorrect or missing Type')
    }

    return typeFromRequest;
}

const parseImages = ( imagesFromRequest: any[] ): string[] => {
    if( !isArrayString(imagesFromRequest) ){
        throw new Error('Incorrect or missing Image')
    }

    return imagesFromRequest;
}

const parseDescription = (descriptionFromRequest: any): string =>  {
    if (!isString(descriptionFromRequest)){
        throw new Error('Incorrect or missing Address')
    }

    return descriptionFromRequest;
}


const isString = (string: string): boolean => {
    return typeof string === 'string';
}

const isNumber = (number: number): boolean => {
    return typeof number === 'number';    
}

const isArrayString = ( array: string[] ): boolean => {
    return array.every((a) => typeof a === "string");
}

const isObject = ( obj: Object ): boolean => {
    return typeof obj === 'object';
}

const toNewParkingEntry = (object: any): newParkingEntry => {

    const newEntry: newParkingEntry = {
        Name: parseName(object.Name),
        Address: parseAddress(object.Address),
        Amenities: parseAmenities(object.Amenities),
        Score: parseScore(object.Score),
        Price: parsePrice(object.Price),
        Type: parseType(object.Type),
        Images: parseImages(object.Images),
        Description: parseDescription(object.Description)
    }

    return newEntry;

}

export default toNewParkingEntry;