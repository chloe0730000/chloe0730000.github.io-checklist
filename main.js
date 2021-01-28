// Paste the code from Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCV3WTDojrGQk5mTMxbxF-_HSaGlM-I_fE",
    authDomain: "checklist-db.firebaseapp.com",
    databaseURL: "https://checklist-db-default-rtdb.firebaseio.com",
    projectId: "checklist-db",
    storageBucket: "checklist-db.appspot.com",
    messagingSenderId: "481301777332",
    appId: "1:481301777332:web:e433f68bd2c3b72d63c0e1",
    measurementId: "G-YWE54FTC8V"
  };
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('contactformmessages');
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        timestamp: $('.timestamp').val(),
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});