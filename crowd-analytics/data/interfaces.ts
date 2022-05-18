export interface Login {
    username: string
    password: string
}

export interface AbstractUser {
    firstName: string
    lastName: string
    address: string
    city: string
    province: string
    postalCode: string
    username: string
    password: string
}

export interface User extends AbstractUser{
    point: number
}

export interface Company extends AbstractUser {
    size?: number
}