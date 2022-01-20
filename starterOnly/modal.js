'use strict'
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fermer l'event formulaire
closeModal.forEach((c) => c.addEventListener("click", modalClose));
  // fermer modal form
  function modalClose(){
    modalbg.style.display = "none";
  }
// implementation du formulaire

           //liason des labels avec les ID correspondant en definissant les constantes
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const birth = document.getElementById('birthdate');
const numbTournament = document.getElementById('quantity');
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById('location3');
const loc4 = document.getElementById('location4');
const loc5 = document.getElementById('location5');
const loc6 = document.getElementById('location6');
const form = document.getElementById('frmContact');
// definition du format de la date
const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
// definition format des nombres
const numbers = /^[0-9]+$/;
// definition const validation message error
const termsConditions = document.getElementById('checkbox1');
const errorFirst = document.getElementById('msgErrorFirst');
const errorLast = document.getElementById('msgErrorLast');
const errorMail = document.getElementById('msgErrorMail');
const errorBirthDate = document.getElementById('msgErrorBirthDate');
const errorTournament = document.getElementById('msgErrorTournament');
const errorCity = document.getElementById('msgErrorCity');
const errorValidation = document.getElementById('msgErrorValidation');
// const confirmation
const confirmation = document.getElementById('confirmation');
const confirmationCloseButton = document.getElementsByClassName('btn-close');
//form empecher le comportement basique du formulaire pour eviter l'envoie d'un formulaire vide > preventDefault
form.addEventListener('submit', (e) => {
  e.preventDefault();
})
// function validate modal form
function validate () {
  let firstNameCheck;
  let lastNameCheck;
  let eMailcheck;
  let birthCheck;
  let numbTournamentCheck;
  let radioButtonsCheck;
  let conditionsCheck;

  console.log(validate);

 if (!firstName.value.match(/(.*[a-z]){2}/i) || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2 )
  {
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus dans le champ du prénom';
    firstName.classList.add('errorMsgInvalidBorder');
    errorFirst.classList.add('errorMsgInvalid');
  } else {
    errorFirst.style.display ='none';
    errorFirst.classList.remove('errorMsgInvalid');
    firstName.classList.add('validBorder');
    firstNameCheck = true;
    
  }
if (!lastName.value.match(/(.*[a-z]){2}/i) || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2)
  {
    errorLast.innerText= 'Veuillez entrer 2 caractères ou plus dans le champ du nom '
    lastName.classList.add('errorMsgInvalidBorder');
    errorLast.classList.add('errorMsgInvalid');
  } else {
    errorLast.style.display='none';
    errorLast.classList.remove('errorMsgInvalid');
    lastName.classList.add('validBorder');
    lastNameCheck = true;
  }
// email avec regex 
if (!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(eMail.value)) {
  errorMail.innerText='Veuillez renseigner une adresse e-mail valide';
  errorMail.classList.add('errorMsgInvalid');
  eMail.classList.add('errorMsgInvalidBorder');

} else {
  errorMail.style.display='none';
  errorMail.classList.remove('errorMsgInvalid');
  eMail.classList.add('validBorder');
  eMailcheck = true;
}
if(!birth.value.match(/^\d{4}\-(0?[1-9]|1[012]])\-(0?[1-9]|[12][0-9]|3[01])$/)) // defiinition de la birthdate avec un instruction en regex
  {
    errorBirthDate.innerText='Veuillez devez entrer votre date de naissance';
    errorBirthDate.style.marginBottom='10px';
    errorBirthDate.classList.add('errorMsgInvalid');
    birth.classList.add('errorMsgInvalidBorder');
  }
  else {
    errorBirthDate.style.display='none';
    errorBirthDate.classList.remove('errorMsgInvalid');
    errorBirthDate.classList.add('validBorder');
    birthCheck = true;
  }
if(!numbTournament.value.match(numbers))  // definition conditions tournois avec les nombres et la const définie plus haut avant la fonction validate
  {
    errorTournament.innerText='Vous devez rentrer un nombre';
    errorTournament.classList.add('errorMsgInvalid');
    numbTournament.classList.add('errorMsgInvalidBorder');
  }
else {
  errorTournament.style.display='none';
  numbTournament.classList.remove('errorMsgInvalidBorder');
  numbTournament.classList.add('validBorder');
  numbTournamentCheck = true;
}
 if(!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) // choisir une ville avec radio buttons
{}
else {}
if(!termsConditions.checked) // validation des termes et conditions 
{
  errorValidation.innerText='Vous devez vérifier que vous acceptez les termes et conditions';
  errorValidation.classList.add('errorMsgInvalid');
  errorValidation.style.marginBottom='20px';
}
else {
  errorValidation.style.display='none';
  conditionsCheck = true;
}
// validation si tous les elements check sont valide 
if (firstNameCheck == true && lastNameCheck == true && eMailcheck == true && birthCheck == true && numbTournamentCheck == true && conditionsCheck == true)
  {
    form.style.display='none';
    confirmation.style.display='flex';
  }
}
  // fermer la modal apres avoir envoyé le formulaire valide 
  confirmationCloseButton[0].addEventListener("click", modalClose);
