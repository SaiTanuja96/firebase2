var mainText = document.getElementById('mainText');
var subbtn = document.getElementById('subbtn');


function submitClick() {
   var firebaseRef = firebase.database().ref();
    
    var messagetext = mainText.value;
    
     firebaseRef.child("text").set(messagetext);
}
