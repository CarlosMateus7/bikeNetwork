export interface Location {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
}

export interface Network {
    company:string[];
    href:string;
    location: Location;
    name:string;
    id:string;
}

export interface Networks{
    networks:Network[];
}

export interface NetworkError{
    error: string;
}

export interface Station {
    name: string;
    timestamp: string;
    longitude: number;
    latitude: number;
    free_bikes: number;
    empty_slots: number;
    id: string;
}

export interface NetworkById {
    name: string;
    stations: Station[];
    company: string[];
    href: string;
    location: Location;
    id: string;
}