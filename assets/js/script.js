const Modulo = (() => {
    let Fprivada;
    Fprivada = (Mi_url,Mi_id) =>{
        let seccion = document.getElementById(`${Mi_id}`);
        let iframe = document.createElement("iframe");
        iframe.src = Mi_url;
        iframe.width = "100%";
        iframe.height = "550px";
        iframe.title= "YouTube video player";
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen
        seccion.appendChild(iframe)
    };
    return {
        Fpublica: (url, id) => {
            Fprivada(url, id);
            },
        }
    })();

class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }
    getUrl(){
        return this.getUrl();
    }
    setInicio(){
        return'Este  método es para realizar un cambio en la URL del video'
    }
}

class Reproductor extends Multimedia {
    constructor(url,id){
        super(url);
        this._id = id;
    }
    playMultimedia(){
        let url = this.getUrl();
        let id = this._id;
        Modulo.Fpublica(url,id);
    }
    setInicio(tiempo){
        let url = this.getUrl();
        let id = this._id;
        document.getElementById(`${id}`).firstElementChild.setAttribute("src", `${url}?start=${tiempo}`);
    }
}

let musica = new Reproductor("https://www.youtube.com/embed/Nv89TpYri6I", "musica");
musica.playMultimedia();
musica.setInicio(70);

let pelicula = new Reproductor("https://www.youtube.com/embed/oTkl2wz-TnQ", "peliculas");
pelicula.playMultimedia();
pelicula.setInicio(50);

let serie = new Reproductor("https://www.youtube.com/embed/Uq61obO9lww", "series");
serie.playMultimedia();




