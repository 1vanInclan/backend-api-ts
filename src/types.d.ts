
interface Address {
    Calle: string
    Numero: number
    Estado: string
    Estado_Abreviado: string
}

export interface ParkingEntry {
    Id: number
    Name: string
    Address: Address
    Amenities : string[]
    Score: number
    Price: number
    Type: string
    Images: string[]
    Description: string

}

export type newParkingEntry = Omit<ParkingEntry, 'Id'>
