const axios = require('axios');
const { response } = require('express');

// it will render index file
exports.homeRoutes = (req, res) => {
    //make a get request to api/users
    axios.get('https://user-management-system.subhodiproy1.repl.co/api/users')

        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}
// it will render add_user file
exports.add_user = (req, res) => {
    res.render('add_user');
}
// it will render update_user file
exports.update_user = (req, res) => {
    axios.get('https://user-management-system.subhodiproy1.repl.co/api/users', {params:{ id: req.query.id }})
    .then(function(userdata){
        res.render("update_user",{user: userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}