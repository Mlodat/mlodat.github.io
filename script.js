const request = new XMLHttpRequest();
//const url = 'http://127.0.0.1/test/';
//const url = 'http://192.168.1.11/';
const a = '15';
request.open('GET', url);
request.send();

request.onreadystatechange = (e) => {
	let params = request.responseText.split(',');
	
	//let param1 = params[0];
	let param1 = a;
	//let param2 = params[1];
	//let param3 = params[2];
	let param2 = 17;
	let param3 = 18;
	
	
	elemParam1 = document.getElementById('param1');
	elemParam1.innerHTML = 16;
	elemParam2 = document.getElementById('param2');
	elemParam2.innerHTML = param2;
	elemParam3 = document.getElementById('param3');
	elemParam3.innerHTML = param3;
}

function createRequest() {
	let customParam = document.getElementById('customParam').value;
	//let customUrl = url + 'index.php?somevar=' + customParam;
	let customUrl = url + customParam;
	request.open('GET', customUrl);
	request.send();
}
