
export interface ParkingEntry {
    Id: number
    Address: string
    Amenities : string[],
    Score: number
    Price: number
    Type: string
    Images: string[]
    Description: string

}

export type newParkingEntry = Omit<ParkingEntry, 'Id'>
