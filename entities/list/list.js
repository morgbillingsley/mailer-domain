module.exports = function build({ check }) {
    return function createList({ id, name }) {
        if (!id) {
            throw new Error('The List entity must have an id field.');
        }
        if (!name) {
            throw new Error('The List entity must have a name field.');
        }
        return Object.freeze({
            id: check.string(id),
            name: check.string(name)
        });
    }
}