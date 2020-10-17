const functions = require('firebase-functions')
const express = require('express')

const app = express()

app.get('/hello', (req, res) => res.send('hell o world'))

exports.app = functions.https.onRequest(app)
