import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyANA3J1L-IuzP3oiBbS0g9Fyv-SMmwlt3w",
    authDomain: "isa-sandbox-4ffbe.firebaseapp.com",
    databaseURL: "https://isa-sandbox-4ffbe.firebaseio.com",
    projectId: "isa-sandbox-4ffbe",
    storageBucket: "isa-sandbox-4ffbe.appspot.com",
    messagingSenderId: "1078330621527"
};
firebase.initializeApp(config);

export const database = firebase.database()