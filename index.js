const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();

// connection 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expenses_app'
})

connection.connect(err => {
    if(err){
        return err;
    }
})

app.use(cors());

// get expenses data
app.get('/', (req, res) => {
    const {user_id} = req.query;
    connection.query(`SELECT id, title, sub_title, amount, expense_date, user_id, table_coler FROM all_expenses WHERE user_id=${user_id} ORDER BY title`, (err, results) => {
        if(err) {
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})


// get incomes data
app.get('/income', (req, res) => {
    const {user_id} = req.query;
    connection.query(`SELECT id, incom_source, amount, DATE_FORMAT(incom_date, '%M %D %Y') As incom_date, color, user_id FROM incomes WHERE user_id=${user_id};`, (err, results) => {
        if(err){
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// add new income
app.get('/addIncome', (req, res) => {
    const {incom_source, amount, incom_date, color, user_id} = req.query;
    connection.query(`INSERT INTO incomes(incom_source, amount, incom_date, color, user_id) VALUES (${incom_source}, ${amount}, ${incom_date}, ${color}, ${user_id})`, (err, results) => {
        if(err){
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// delete Income
app.get('/deleteIncome', (req, res) => {
    const {id} = req.query;
    connection.query(`DELETE FROM incomes WHERE id=${id};`, (err, results) => {
        if(err) {
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// add new table(but bot for real)
app.get('/addTable', (req, res) => {
    const {title, sub_title, amount, expense_date, table_coler, user_id} = req.query;
    connection.query(`INSERT INTO all_expenses(title, sub_title, amount, expense_date, user_id, table_coler) VALUES (${title}, ${sub_title}, ${amount}, ${expense_date}, ${user_id}, CONCAT('#', ${table_coler}));`, (err, results) => {
        if(err) {
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// statistics by title
app.get('/statisticsTitle', (req, res) => {
    const {user_id} = req.query;
    connection.query(`SELECT title, COUNT(sub_title) AS number_of_items, SUM(amount) as money_from_title, table_coler as color FROM all_expenses WHERE user_id=${user_id} GROUP BY title;`, (err, results) => {
        if(err){
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// delete row from table
app.get('/deleteItem', (req, res) => {
    const {id} = req.query;
    connection.query(`DELETE FROM all_expenses WHERE id=${id};`, (err, results) => {
        if(err) {
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// delete table(but not for real)
app.get('/deleteTable', (req, res) => {
    const {title, user_id} = req.query;
    connection.query(`DELETE FROM all_expenses WHERE title=${title} && user_id=${user_id};`, (err, results) => {
        if(err){
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})

//create a new user
app.get('/createUser', (req, res) => {
    const {first_name, last_name, user_email, user_id} = req.query;
    connection.query(`INSERT INTO expenses_users(first_name, last_name, user_email, user_id) VALUES (${first_name}, ${last_name}, ${user_email}, ${user_id});`, (err, results) => {
        if(err){
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
})


app.listen(4000, () => {
    console.log('this app runs on localhost:4000')
})