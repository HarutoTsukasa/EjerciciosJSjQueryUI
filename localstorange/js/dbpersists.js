function cargarLocalStorange (item){
	var ArrayTemp = new Array();
	if(localStorage.getItem(item)) {
		var strJsonUsers = localStorage.getItem(item);
		var GetElementsUsers = JSON.parse(strJsonUsers);
        for (object of GetElementsUsers) {
        	ArrayTemp.push(object);
        }
	}
	return ArrayTemp;
}

function guardarLocalStorange (item, ArrayTmp){
    strJsonUsers = JSON.stringify(ArrayTmp);
    localStorage.setItem(item, strJsonUsers);
}

function limpiarStorange (item){
    localStorage.removeItem(item);
}