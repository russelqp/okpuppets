let stat = document.querySelector('.status-recaptcha')

let captcha = document.querySelector('.g-recaptcha');
  
// captcha.addEventListener('click', () => {
// 	//
// });
function myRecaptch(){
  //e.preventDefault();
  let validado = grecaptcha.getResponse();
  if (validado.length != 0){
    console.log("Validado");
    document.querySelector('.contact-form').action = "/";
    document.querySelector('.contact-form').submit();
  }else{
      stat.style.color  = "red"
      stat.innerHTML = "Debes validar el captcha";
      stat.style.display = "block";
  }
  
}