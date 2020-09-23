module.exports = function build({ check }) {
    return function createSubscriber({ id, email, firstName, lastName, phone }) {
        if (!id) {
            throw new Error('The Subscriber entity must have an id field.');
        }
        if (!email) {
            throw new Error('The Subscriber entity must have an email field.');
        }
        if (!firstName) {
            throw new Error('The Subscriber entity must have a firstName field.');
        }
        if (!lastName) {
            throw new Error('The Subscriber entity must have a lastName field.');
        }
        if (!phone) {
            throw new Error('The Subscriber entity must have a phone field.');
        }
        return Object.freeze({
            id: check.string(id),
            email: check.string(email),
            firstName: check.string(firstName),
            lastName: check.string(lastName),
            phone: check.string(phone),
            get fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        });
    }
}