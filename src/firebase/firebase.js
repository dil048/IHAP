import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQnR6ctk1Sh5HZBvx6qXQeSjPp8zNdy5Q",
    authDomain: "ihap-2018.firebaseapp.com",
    databaseURL: "https://ihap-2018.firebaseio.com",
    projectId: "ihap-2018",
    storageBucket: "ihap-2018.appspot.com",
    messagingSenderId: "556680483605"
};
firebase.initializeApp(config);

export let
    auth = firebase.auth(),
    db = firebase.database(),
    storge = firebase.storage();
