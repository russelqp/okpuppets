function validar(){
    let form = document.form; 
    let alerta = document.querySelector('.alerta');

    
    

    
    

    if(form.username.value == 0){
        let mensaje_alert = "Debes escribir tu nombre";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        form.username.value="";
        form.username.focus();
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        
        return false;
    }
    if(form.useremail.value == 0){
        let mensaje_alert = "Ingresa tu email";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        form.useremail.value="";
        form.useremail.focus();
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        return false;
    }
    if(!form.useremail.value.includes("@") || !form.useremail.value.includes(".") || !form.useremail.value.includes(".com")){
        
        let mensaje_alert = "Ingresa un email válido";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        form.useremail.value= "";
        form.useremail.focus();
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        return false;
    }
    if(form.usertel.value == 0){
        let mensaje_alert = "Ingresa tu número telefónico";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        form.usertel.value="";
        form.usertel.focus();
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        return false;
    }
    if(form.mensaje.value == 0){
        let mensaje_alert = "Redacta tu mensaje";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        form.mensaje.value="";
        form.mensaje.focus();
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        return false;
    }

        let mensaje_alert = "Datos enviados correctamente";
        alerta.innerHTML = '<div class="alert alert-danger"> <span class="close" data-dismiss="alert"> &times; </span><span>'+mensaje_alert+'</span></div>';
        let btn_close_alert = document.querySelector('.close');
        btn_close_alert.addEventListener('click', function(){
            alerta.innerHTML = "";
        });
        
        form.submit();
    
    
}

let btn_envio = document.querySelector('.btn_enviar');

btn_envio.addEventListener('click', validar);


