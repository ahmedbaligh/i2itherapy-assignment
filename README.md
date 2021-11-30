# i2iTherapy MVP

This is an MVP of i2iTherapy website made as coding assignment as a part of their selection process.

## Overview

The MVP has the following features:

- users can sign up using their email and password.
- users can login and logout.
- users can see a (fake) list of their clients, update it, and add to and delete from it.

### Connecting to Firebase

This web application makes use of [Firebase](https://firebase.google.com/) for authentication. In order to use these services, make a new firebase project [here](https://console.firebase.google.com/u/0/). From there create a new web app.

You need to get your connection's private keys (you may find them [here](https://console.firebase.google.com/u/0/project/i2itherapy-assignment/settings/general/web:NGNiN2ZkZDktODYyZC00YWZjLTg1ODQtNzRkN2FjZDcyNGQ1)). Finally,create a `.env.local` file in the root directory and add the following inside:

```env
REACT_APP_FIREBASE_API_KEY=<your_api_key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your_authed_domain>
REACT_APP_FIREBASE_PROJECT_ID=<your_project_id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your_storage_bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_sender_id>
REACT_APP_FIREBASE_APP_ID=<your_app_id>
```

### Installing Dependencies

Make sure to have `node` and `yarn` installed then, in the root directory, run:

```bash
yarn
```

### Running the Sever

To run the development server, execute:

```bash
yarn start
```
