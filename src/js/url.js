//-- Url de enlaces y archivos
const Url = function(){
	if(import.meta.env.SITE){
		return import.meta.env.SITE;
	}else{
		return "/";
	}
}
const myUrl = Url();