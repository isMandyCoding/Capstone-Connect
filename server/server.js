const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/admin/projects', function(req, res, next){
  knex('projects')
  .fullOuterJoin('users', {'projects.project_owner_id': 'users.user_id'})

  .then(projects => res.json(projects))
})

app.get('/users', function(req, res, next){
  knex('users')
  .then(users => res.json(users))
})


app.get('/users/:id', function(req,res ){
  knex('users')
  .where("user_id", req.params.id)
  .then(users => res.json(users))
})

app.get('/messages/:id', function(req, res){

  knex('messages')
  .where(function () {
    this
      .where("sender_id", req.params.id)
      .orWhere("recipient_id", req.params.id)
  })
  .then(messages => res.json(messages))
})

app.get('/bookmarks/:id', function(req, res, next){
  knex('bookmarks')
  .where("user_id", req.params.id)
  .then(users => res.json(users))
})

app.post('/admin/new_project', function(req, res){
  knex('projects')
  .insert({
    project_owner_id: req.body.project_owner_id,
    project_name: req.body.project_name,
    project_type: req.body.project_type,
    tools: req.body.tools,
    paid_opportunities: req.body.paid_opportunities,
    description: req.body.description,
    role_type: req.body.role_type,
    business_problem: req.body.business_problem
  })
  .then(projects => res.json(projects))
  .catch((err)=> console.log(err))
})

app.put('/projects/:id', function(req, res){
  knex('projects')
  .where ({ "projects.project_id" : req.params.id})
  .insert({
    project_owner_id: req.body.project_owner_id,
    project_name: req.body.project_name,
    project_type: req.body.project_type,
    tools: req.body.tools,
    paid_opportunities: req.body.paid_opportunities,
    description: req.body.description,
    role_type: req.body.role_type,
    business_problem: req.body.business_problem
  })
  .then(projects => res.json(projects))
  .catch((err)=> console.log(err))
})


app.post('/new_user', function(req, res){
  knex('users')
  .insert({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    website: req.body.website,
    phone: req.body.phone,
    role: req.body.role,
    is_approved: false,
  })
  .then(users => res.json(users))
  .catch((err)=> console.log(err))
})

app.put('/users/:id', function(req, res){
  knex('users')
  .where ({ "users.user_id" : req.params.id})
  .insert({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    website: req.body.website,
    phone: req.body.phone,
    role: req.body.role,
    is_approved: req.body.is_approved,
  })
  .then(users => res.json(users))
  .catch((err)=> console.log(err))
})

app.post('/new_message', function(req, res){
  knex('messages')
  .insert({
    sender_id: req.body.sender_id,
    recipient_id: req.body.recipient_id,
    subject: req.body.subject,
    message: req.body.message
  })
  .then(messages => res.json(messages))
  .catch((err)=> console.log(err))
})

app.post('/new_bookmark', function(req, res){
  knex('bookmarks')
  .insert({
    user_id: req.body.user_id,
    project_id: req.body.project_id
  })
  .then(bookmarks => res.json(bookmarks))
  .catch((err)=> console.log(err))
})

app.post('/requested_info', function(req, res){
  knex('requested_info')
  .insert({
    user_id: req.body.user_id,
    project_id: req.body.project_id
  })
  .then(messages => res.json(messages))
  .catch((err)=> console.log(err))
})

app.get('/projects/:id', function(req, res){
  knex.table('projects')
  .where({'project_id': req.params.id})
  .innerJoin('users', 'projects.project_owner_id', '=', 'users.user_id')
  .then(project => res.json(project))
  .catch((err)=> console.log(err));
})

app.get('/student/projects', function(req, res, next){
  knex('projects')
  .where({committed_student_id: null})

  .orderBy('timestamp', 'asc')
  .join('users', {'projects.project_owner_id': 'users.user_id'})
  .then(projects => res.json(projects))
})



app.get('/student/messages/:id', function(req, res, next){
  knex('messages')
  .where({"student_id": req.params.id})
  .join('businesses', 'messages.business_id', '=', 'businesses.business_id')
  .select('businesses.business_id', 'messages.timestamp', 'messages.sender_role', 'messages.message', 'businesses.contact_name', 'businesses.contact_company')
  .then(messages => {
    res.json(messages)
  })
})

app.get('/admin/permissions/businesses', function(req, res, next){
    knex('businesses')
    .select('business_id','bcontact_name', 'contact_company')
    .then(businesses => {
      res.json(businesses)
    })
})

app.get('/admin/permissions/students', function(req, res, next){
      knex('students')
      .select('students.name','students.is_assigned')
      .then(businesses => {
        res.json(businesses)
    })
})

app.get('/business/messages/:id', function(req, res, next){
  knex('messages')
  .where({'sender_id': req.params.id})
  .then(messages => res.json(messages))

})

app.delete('/projects/:id', function (req, res, next){
  knex('projects')
    .where({'project_id': req.params.id })
    .del()
    .then(num => {
      res.json(num)
  })
})

app.delete('/users/:id', function (req, res, next){
  knex('users')
    .where({'user_id': req.params.id })
    .del()
    .then(num => {
      res.json(num)
  })
})

app.delete('/info_requests/:id', function (req, res, next){
  knex('requested_info')
    .where({'request_id': req.params.id })
    .del()
    .then(num => {
      res.json(num)
  })
})
app.delete('/bookmarks/:id', function (req, res, next){
  knex('bookmarks')
    .where({'bookmark_id': req.params.id })
    .del()
    .then(num => {
      res.json(num)
  })
})
app.delete('/messages/:id', function (req, res, next){
  knex('messages')
    .where({'message_id': req.params.id })
    .del()
    .then(num => {
      res.json(num)
  })
})

app.listen(port, function() {
  console.log("listening on port: ", port);
})
