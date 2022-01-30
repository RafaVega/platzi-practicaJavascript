function videoPlay(id){
    const urlVideo = 'http://unaUrlSecreta.com/'+id;
    console.log('Se esta reproduciendo el video: '+id);
}

function videoStop(id){
    const urlVideo = 'http://unaUrlSecreta.com/'+id;
    console.log('Se pausó el video: '+id);
}

class claseVirtual{
    constructor({
        nombreClase,
        videoId,
    }){
        this.nombreClase = nombreClase;
        this.videoId = videoId;
    }

    reproducir(){
        videoPlay(this.videoId);
    }

    pausar(){
        videoStop(this.videoId);
    }
}

export {claseVirtual};