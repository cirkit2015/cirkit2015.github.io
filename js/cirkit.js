function allowDrop(event){
  event.preventDefault();
}


function dragPowerSource(event){
  event.dataTransfer.setData("powerSource", event.target.id);
}

function dropPowerSource(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("powerSource");
  event.target.appendChild(document.getElementById(data));
  
}

function dragUSB(event){
  event.dataTransfer.setData("USB", event.target.id);
}

function dropUSB(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("USB");
  event.target.appendChild(document.getElementById(data));
  
}

function dragPhoton(event){
  event.dataTransfer.setData("photon", event.target.id);
}

function dropPhoton(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("photon");
  event.target.appendChild(document.getElementById(data));
  
}

function dragLEDBulb(event){
  event.dataTransfer.setData("LEDBulb", event.target.id);
}

function dropLEDBulb(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("LEDBulb");
  event.target.appendChild(document.getElementById(data));
  
}
