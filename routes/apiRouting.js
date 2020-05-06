const router = require("express").Router();
const Employee = require("../models/Employee");

router.route("/api/employees").post((req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let position = req.body.position;

    let newEmployee = new Employee({
        employee:
        {
            firstName,
            lastName,
            email,
            position
        }
    });
    newEmployee.save()
    .then(() => res.json("Employee added!"))
    .catch(err => res.status(400).json(`Error:${err}`));
});


module.exports = router;