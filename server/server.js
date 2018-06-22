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
  .join('users', {'projects.project_owner_id': 'users.user_id'})
  .orderBy('timestamp', 'desc')
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

app.get('/bookmarks/:user_id', function(req, res, next){
  knex("user_id", req.params.id)
  .where('')
  .orderBy('timestamp', 'asc')
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

app.get('/projects/:id', function(req, res){
  knex.table('projects')
  .where({"project_id": req.params.id})
  .innerJoin('users', 'projects.project_owner_id', '=', 'users.user_id')
  .then(project => res.json(project))
  .catch((err)=> console.log(err));
})

app.get('/student/projects', function(req, res, next){
  knex('projects')
  .where({committed_student_id: null})
  .orderBy('timestamp', 'asc')
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
  .where({"business_id": req.params.id})
  .then(messages => res.json(messages))

})



app.listen(port, function() {
  console.log("listening on port: ", port);
})
