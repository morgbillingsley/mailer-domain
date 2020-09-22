module.exports = function createList({ id, check }) {
    return Object.create({
        id: id,
        get id() {
            return this.id;
        },
        get name() {
            return this.name;
        },
        set name(name) {
            this.name = check.string(name);
        }
    });
}