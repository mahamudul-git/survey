// syncFirebaseUsers.js
// One-time script to sync all Firebase users into MongoDB
const admin = require('firebase-admin');
const mongoose = require('mongoose');
const User = require('./models/User');
const path = require('path');

// Path to your service account key JSON file
const serviceAccount = require(path.join(__dirname, 'serviceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Connect to MongoDB
require('./config/db')();

async function syncFirebaseUsersToMongo() {
  let nextPageToken;
  let count = 0;
  do {
    const result = await admin.auth().listUsers(1000, nextPageToken);
    for (const firebaseUser of result.users) {
      const { uid, email, displayName, photoURL } = firebaseUser;
      if (!email) continue; // skip users without email
      let user = await User.findOne({ uid });
      if (!user) {
        await User.create({
          uid,
          name: displayName || '',
          email,
          photoURL: photoURL || '',
          profession: 'unknown',
          role: 'surveyor'
        });
        count++;
      }
    }
    nextPageToken = result.pageToken;
  } while (nextPageToken);
  console.log(`Synced ${count} users from Firebase to MongoDB.`);
  process.exit(0);
}

syncFirebaseUsersToMongo().catch(err => {
  console.error('Error syncing users:', err);
  process.exit(1);
});