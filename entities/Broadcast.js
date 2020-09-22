module.exports = function createBroadcast({ id, sesv2, check }) {
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
        },
        get listId() {
            return this.listId;
        },
        set listId(listId) {
            this.listId = check.string(listId);
        },
        async get template() {
            if (this.templateName) {
                let request = sesv2.getEmailTemplate({ TemplateName: this.templateName });
                let template = await request.promise();

                return template;
            }
        },
        set template(template) {
            if (undefined !== template.TemplateName && typeof template.TemplateName === "string") {
                this.templateName = template.TemplateName;
            } else {
                throw new Error('This template field must be an object with the TemplateName variable.');
            }
        },
        get templateData() {
            if (this.templateData) {
                return JSON.parse(this.templateData);
            }
        },
        set templateData(templateData) {
            const data = check.object(templateData);
            this.templateData = JSON.stringify(data);
        }
    });
}