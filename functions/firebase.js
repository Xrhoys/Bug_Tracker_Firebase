const admin = require('firebase-admin')

const databaseURL = JSON.parse(process.env.FIREBASE_CONFIG).databaseURL

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: databaseURL,
})

module.exports = {
  database: admin.database(),
  auth: admin.auth(),
}
