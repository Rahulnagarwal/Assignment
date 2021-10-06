export interface IPatient {
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    age: number
    email: string
    mobile: string
    doctorID: string;
    patientID: string;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IApiResponse {
    status: boolean;
    success?: boolean;
    error?: string;
    data?: any
}
