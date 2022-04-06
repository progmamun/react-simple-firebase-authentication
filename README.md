# React Firebase Authentication

## Steps to use firebase

<img src='https://user-images.githubusercontent.com/67066348/161901462-4cd81088-f714-4337-8add-61609865a237.png' height='200' alt='firebase-logo'>

- 1. Create a project on console.firebase.google.com
- 2. npm install firebase
- 3. Register web app in firebase
- 4. Copy Firebase init with config from firebase project settings
- 5. Export default app from firebase.init.js
- 6. import getAuth from firebase/auth and create const auth = getAuth(app) in App.js
- 7. import app firebase init.js into your app.js
- 8. turn on Authentication (firebase> authentication> enable google sign)
- 9. create google provider
- 10. signWithPropup and pass auth and provider
- 11. handle .then(if successful) and catch error (if error)
