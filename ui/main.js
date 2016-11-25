var vid = document.getElementById("myVideo");

function enableControls() { 
    vid.controls = true;
    vid.load();
} 

function disableControls() { 
    vid.controls = false;
    vid.load();
} 

function checkControls() { 
    alert(vid.controls);
} 