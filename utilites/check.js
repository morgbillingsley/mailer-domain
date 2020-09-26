module.exports = Object.freeze({
    string: function(data) {
        if (typeof data === "string") {
            return data;
        } else {
            throw new Error('The data type must be a string.');
        }
    },
    number: function(data) {
        if (typeof data === "number") {
            return data;
        } else {
            throw new Error('The data type must be a number.');
        }
    },
    object: function(data) {
        if (typeof data === "object") {
            return data;
        } else {
            throw new Error('The data type must be an object.');
        }
    },
    boolean: function(data) {
        if (typeof data === "boolean") {
            return data;
        } else {
            throw new Error('The data type must be a boolean.');
        }
    },
    array: function(data) {
        if (data instanceof Array) {
            return data;
        } else {
            throw new Error('The data type must be an array.');
        }
    }
})