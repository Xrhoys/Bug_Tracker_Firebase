const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const { ref } = require('firebase-functions/lib/providers/database')

const app = express()

const databaseURL = JSON.parse(process.env.FIREBASE_CONFIG).databaseURL

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: databaseURL,
})

app.get('/hello', (req, res) => res.send('hell o world'))

exports.app = functions.https.onRequest(app)
