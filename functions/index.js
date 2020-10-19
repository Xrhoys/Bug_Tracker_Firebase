const functions = require('firebase-functions')
const express = require('express')

const app = express()

app.get('/api', (req, res) => res.send('API portal, contact owner.'))

exports.app = functions.https.onRequest(app)
