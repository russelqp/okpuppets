function la_url(){
    let protocolo = window.location.protocol;
    let barras = "//";
    let mi_host = window.location.host;
    let mi_path = window.location.pathname;
    let laraiz = "/okpuppets";
    let mi_url_local = protocolo+barras+mi_host+laraiz;
    let mi_url_online = protocolo+barras+mi_host;
    //let mi_url = mi_url_local;
    let imgs = document.querySelectorAll('img');
    let as = document.querySelectorAll('a');

 
    if(mi_path.includes("okpuppets")){
        mi_url = mi_url_local;
    }else{
        mi_url = mi_url_online;
    }

    for(i=0; i<imgs.length;i++){
        var src_viejo = imgs[i].getAttribute("src");
        if(!src_viejo.includes("http://") || !src_viejo.includes("https://")){
            imgs[i].setAttribute('src', mi_url+'/'+src_viejo)
        }
    }

    for(e=0; e<as.length;e++){
        var a_viejo = as[e].getAttribute("href");
        if(a_viejo.includes("http://") || a_viejo.includes("https://")){
            as[e].setAttribute('href', a_viejo+'/')
        }else{
            as[e].setAttribute('href', mi_url+'/'+a_viejo)
            //console.log(a_viejo)
        }
    }

}
la_url();

//Global site tag (gtag.js) - Google Analytics -->


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-174994582-1');

