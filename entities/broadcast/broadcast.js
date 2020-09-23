module.exports = function build({ check }) {
    return function createBroadcast({ id, name, listId, template, templateData }) {
        if (!id) {
            throw new Error('The Broadcast entity must have an id field.');
        }
        if (!name) {
            throw new Error('The Broadcast entity must have a name field.');
        }
        if (!listId) {
            throw new Error('The Broadcast entity must have a listId field.');
        }
        if (!template) {
            throw new Error('The Broadcast entity must have a template field.');
        }
        if (!templateData) {
            throw new Error('The Broadcast entity must have a templateData field.');
        }
        return Object.freeze({
            id: check.string(id),
            name: check.string(name),
            listId: check.string(listId),
            template: check.string(template),
            templateData: check.object(templateData)
        });
    }
}