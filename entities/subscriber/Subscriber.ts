class Subscriber {
    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phone: string;
    private _isSubscribed: boolean;

    public get id() : string {
        return this._id;
    }

    public get firstName() : string {
        return this._firstName;
    }
    
    public set firstName(firstName : string) {
        this._firstName = firstName;
    }

    public get lastName() : string {
        return this._lastName;
    }
    
    public set lastName(lastName : string) {
        this._lastName = lastName;
    }

    public get fullName() : string {
        return this._firstName + ' ' + this._lastName;
    }

    public get email() : string {
        return this._email;
    }
    
    public set email(email : string) {
        this._email = email;
    }

    public get phone() : string {
        return this._phone;
    }
    
    public set phone(phone : string) {
        this._phone = phone;
    }

    public get isSubscribed() : boolean {
        return this._isSubscribed;
    }
}

export default Subscriber;