 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDPMF3w8vLBD-0YtknVfboDaUNZuCW7ar0",
  authDomain: "digitalpuppets.firebaseapp.com",
  databaseURL: "digitalpuppets-default-rtdb.firebaseio.com",
  projectId: "digitalpuppets",
  storageBucket: "digitalpuppets.appspot.com",
  messagingSenderId: "350735448588",
  appId: "1:350735448588:web:aef5371d9c7c2ab8494c29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfoDb = firebase.database().ref("infos")

//Listen for a submit

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  
  //get input Values
  let name = document.querySelector('.username').value;
  let phone = document.querySelector('.usertel').value;
  let email = document.querySelector('.useremail').value;
  let message = document.querySelector('.mensaje').value;

  saveContactInfo(name, phone, email, message);
  alert("¡Gracias por escribirnos, tu mensaje será revisado y te responderemos a la brevedad!")
  document.querySelector(".contact-form").reset();
}

// Save infos to firebase
function saveContactInfo(name, phone, email, message){
  let newContactInfo = contactInfoDb.push()
  newContactInfo.set({
    name: name,
    phone: phone,
    email: email,
    message: message,
  });
  retrieveInfos();
}

// Reetrieve Infos

function retrieveInfos(){
  let ref = firebase.database().ref("infos")
  ref.on("value", gotData);
}


function gotData(data){
  let info = data.val();
  let keys = Object.keys(info);
  
  for (let i = 0; i < keys.length; i++){
    let d = keys[i];
    let name = info[d].name;
    let phone = info[d].phone;
    let email = info[d].email;
    let message = info[d].message;
    
    console.log(name, phone, email, message)
    let info_results = document.querySelector(".infos-results");
    info_results.innerHTML += `<div>
    <p class=""><strong>Name: </strong> ${name} </br>
    <strong>Phone: </strong> ${phone} </br>
    <a class=""><strong>Email: </strong> ${email} </a> </br>
    <a class=""><strong>Message: </strong> ${message} </a>
    </p>
    </div>`;
    
  }
}