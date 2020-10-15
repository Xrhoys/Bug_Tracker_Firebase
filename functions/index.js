const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const { ref } = require('firebase-functions/lib/providers/database')

const app = express()

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://bug-tracker-acb50.firebaseio.com/',
})

admin.database().ref('test').child('test').set({ test: 'test' })

app.get('/hello', (req, res) => res.send('hell o world'))

exports.app = functions.https.onRequest(app)
