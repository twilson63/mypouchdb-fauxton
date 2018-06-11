require('dotenv').config()
const PouchDB = require('pouchdb')
const express = require('express')
PouchDB.plugin(require('pouchdb-adapter-mysql'))

const MyPouchDB = PouchDB.defaults({
  adapter: 'mysql'
})

const app = express()

app.use(require('express-pouchdb')(MyPouchDB))

app.listen(6984)
