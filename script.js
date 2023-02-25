var statusTv =  true;
var statusMutar = false;

function off(){

    if (statusTv == true){
        document.getElementById("tv").style.setProperty('background-image', 'none');
        document.getElementById("tv").style.setProperty('box-shadow', 'none');
        document.getElementById("audio").pause();
        statusTv = false;
        statusMutar = true;
    }
    else{
        document.getElementById("tv").style.setProperty('background-image', 'url("noSignal.jpg")');
        document.getElementById("tv").style.setProperty('box-shadow', '-2px 0px 41px -3px rgba(255, 255, 255, 0.29)');
        document.getElementById("audio").loop = true;
        document.getElementById("audio").play();
        statusTv = true;
        statusMutar = false;
    }
}

function mutar(){

    if (statusMutar == true && statusTv == true){
        document.getElementById("audio").play();
        statusMutar = false;
    }
    else{
        document.getElementById("audio").pause();
        statusMutar = true;
    }
}