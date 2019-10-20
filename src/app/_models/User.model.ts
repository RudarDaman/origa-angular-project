export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: CompanyDetails;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeographicalCoordinates;
}

export interface GeographicalCoordinates {
    lat: string;
    lng: string;
}

export interface CompanyDetails {
    name: string;
    catchPhrase: string;
    bs: string;
}
