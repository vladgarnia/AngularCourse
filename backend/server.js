const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const employees = require("./entities/employees.js");
app.get('/employee', (req, res) => {
    res.send(employees);
});

app.post('/employee', (req, res) => {
    const employee = req.body;
    employee.id = employees[employees.length - 1].id + 1;
    employees.push(employee);
    res.send();
});

app.get('/employee/:id', function (req, res) {
    const employee = employees.filter(function (entity) {
        return entity.id === parseInt(req.params.id);
    })[0];
    res.send(employee);
})

app.delete('/employee/:id', function (req, res) {
    const index = employees.filter(entity => entity.id === parseInt(req.params.id))[0];
    employees.splice(index, 1);
    res.send();
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))