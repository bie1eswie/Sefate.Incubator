export class Registration {
    username: string;
    password: string;
    email: string;
    fullname: string;
    lastname: string;
    phone: string;
    id: number;
    role: number;

    constructor(username: string,
        password: string,
        email: string, fullname: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullname = fullname;
    }
}
