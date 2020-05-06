const mongoose = require("mongoose");

// Validates the email
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee: {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            validate: [validateEmail, "Invalid email address"],
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },

        position: {
            type: String,
            required: true
        },
    }
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;