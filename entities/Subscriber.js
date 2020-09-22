module.exports = function createSubscriber({ id, check }) {
    return Object.create({
        id,
        get id() {
            return this.id;
        },
        get email() {
            return this.email;
        },
        set email(email) {
            this.email = check.string(email);
        },
        get firstName() {
            return this.firstName;
        },
        set firstName(firstName) {
            this.firstName = check.string(firstName);
        },
        get lastName() {
            return this.lastName;
        },
        set lastName(lastName) {
            this.lastName = check.string(lastName);
        },
        get phone() {
            return this.phone;
        },
        set phone(phone) {
            this.phone = check.string(phone);
        }
    });
}