/*
Simple firebase integration:
--------initailization
1. visit: console.firebase.google.com
2. create project (skip google analytics)
3. register app (create config)
4. install firebase: nmp install firebase
5. add config file to your project
6. DANGER: do not publish or make firebase config to public by push github

-------integration---------

7. visit: go to docs> Build > Authentication > Web > Get Started
8. export app from the firebase.config.js file:export default app
9. Login.jsx: import getAuth from firebase/auth 

---------provider setup ------------
10. create const auth getAuth(app)
11. import googleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider 
13. activate sign in method (google, facebook, github etc)
14. [vite]: change 127.0.0.1 to localhost
*/