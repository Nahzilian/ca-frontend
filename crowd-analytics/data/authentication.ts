import { AbstractUser, User, Company } from './interfaces'

export class AbsUser {
    firstName: string
    lastName: string
    address: string
    city: string
    province: string
    postalCode: string
    username: string
    password: string
    constructor(data: AbstractUser) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.address = data.address
        this.city = data.city
        this.province = data.province
        this.postalCode = data.postalCode
        this.username = data.username
        this.password = data.password
    }

    setFirstName(newFirstName: string) {
        this.firstName = newFirstName
        return this
    }

    setLastName(newLastName: string) {
        this.lastName = newLastName
        return this
    }

    setAddress(newAddress: string) {
        this.address = newAddress
        return this
    }

    setCity(newCity: string) {
        this.city = newCity
        return this
    }

    setProvince(newProvince: string) {
        this.province = newProvince
        return this
    }

    setPostalCode(newPostalCode: string) {
        this.postalCode = newPostalCode
        return this
    }

    setUsername(newUsername: string) {
        this.username = newUsername
        return this
    }

    setPassword(newPassword: string) {
        this.password = newPassword
        return this
    }

    updateInformation () {
        // API call
    }
}

export class UserInfo extends AbsUser {
    point: number
    constructor(data: User) {
        super(data)
        this.point = data.point
    }

    setPoint(newPoint: number) {
        this.point = newPoint
        return this
    }

    updatePoint() {}
}

export class CompanyInfo extends AbsUser {
    size?: number
    constructor(data: Company) {
        super(data)
        this.size = data.size
    }

    setSize(newSize: number) {
        this.size = newSize
        return this
    }

    updateSize () {}
}

