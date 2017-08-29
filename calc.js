
let num, result=0,current_Num ="",check =false;
flagFirst= true, firstLetter = true, dotBefore = false, before="", oneDotOneNumber=0,memAfterEqual=0,length=0,last=0,IndexOf=0,firstZero=false;

//a kijelzőn mi történik
function cursorClear ()  {
	$("#cursor").text("");
}
//a kijelezőn megjelnik a lenti érték
function cursUpWithCurrNum (){
	$("#cursor").text(current_Num);
}
//a kijelzőn megjelnik az eredmény
function cursUpWithRes(){
	$("#cursor").text(result);
}


//változó defaultra állítás
//dinamikusan változó string
function currNumEmpty(){
	current_Num = "";
}
//result változó nullázása
function resultZero(){
	result = 0;
}
//visszaállítjuk igaz értékre az első szám az adott számban flaget
function firstLetterT(){
	firstLetter=true;
}
//visszállítjuk a volt e az adott számban decimális flaget falsera
function dotBeforeF(){
	dotBefore = false;
}

//műveletek
//a current num stringhez hozzáfűzzükaz adott értéket
function concatCurrNum(data){
	current_Num += data;
}
//ha egyenlőségjelet klikkeltek, akkor utána miután lenulláztuk a current_Num ot 
//elmentjük bele az előzőeredményt, hogy az egyenlőség jel után ha operátort 
//klikkelnek, akkor az előző eredmény legyen az alap 
function memAftEqual(){
	current_Num += memAfterEqual;
}
//van e a számban decimális érték
function hasBeenMadeFloat(){
	let findDot = /\./;
	check= findDot.test(current_Num);
  
	
}

function resultResult(){
	hasBeenMadeFloat();
	result = eval(current_Num);
	if(check){
    
		result = parseFloat(result).toFixed(2);
	}
	else{
		result = parseFloat(result);
	}
	/*result = parseFloat(result);*/
}
function takeAwayOne(){
	current_Num= current_Num.substring(0,current_Num.length-1);
}


//flagek
//a legelső szám e az adott számban
function firstLetterF(){
	firstLetter = false;
}
//volt e már decimális érték megadva az adott számban
function dotBeforeF(){
	dotBefore = false;
}

//before functionek (ezekkel átállítjuk a beforet az aktuális
//változó példányára, így le tudjuk később ellenőrizni, hogy az előző
// történés az mi volt, így nem lehet kétszer beírni pontot, illetve //műveleti jelet sem
//sehol nem írunk ki errort, egyszerűen azok a műveletek, amik errort okoznának azok nem lehetésgesek
function beforeNum(){
	before = "num";
}
function beforeCe(){
	before="ce";
}
function beforeOp(){
	before="op";
}
function beforeEq(){
	before="equal";
}
function beforeZero(){
	before="zero";
}
function beforeC(){
	before="c";
}
//az egész string utolsó elemét fogjuk nézni, hogy műveleti jel vagy pont volt e
function lastSubStr(){
	length = current_Num.length-1;
	last = current_Num[length];
}

//egyetlen decimal point ehet egy stringben, le kell nullázni, mert vége egy szám stringnek, tudjuk, mert operátor volt a klikk
function maxOneDot(){
	oneDotOneNumber =0;
}

$('button').click(buttonPressed); 

function buttonPressed(event){
	let e = event.target.value;
	let isNumber = /[0-9]/;
	let isOp = /\*|\+|\-|\//
	
	let isCe= /ce/;
	console.log(e);
	

	if(isNumber.test(e)){
		numPressed(e);
	}
	if(e==='ce'){
		clearAll(e);
	}
	if(isOp.test(e)){
		opPressed(e);
	}
	if(e==='='){
		equalPressed(e);
	}
	if(e==='.'){
		dotPressed(e);
	}
	if(e==='c'){
		clear(e);
	}
	if(e==='-'){
		negative(e);
	}

function numPressed(e){
	if(before==="equal"){
		cursorClear();
		currNumEmpty();	 
		resultZero();
		firstLetterT();
		dotBeforeF();
		beforeCe();
	}
	
	concatCurrNum(e);
	console.log(current_Num);
	cursUpWithCurrNum();
	//console.log(current_Num);
	firstLetterF();
	beforeNum();
}

function clearAll(e){			
	cursorClear();
	currNumEmpty();	 
	resultZero();
	firstLetterT();
	dotBeforeF();
	beforeCe();
}
function clear(e){
	takeAwayOne();
	console.log(current_Num);
	cursUpWithCurrNum();
	beforeC();
}

function opPressed(e){
	console.log("operator");
	console.log("before_"+before);
	maxOneDot();
	lastSubStr();
	if(firstLetter){
	}
	else if(last==="+" || last==="-" || last==="*" || last==="/"|| last==="."){
				} 
	else if(before==="equal" ){
    console.log("mem after equal"+memAfterEqual);
    currNumEmpty();
    memAftEqual();
    concatCurrNum(e);
    console.log("curr num equal utan"+ current_Num);
    cursUpWithCurrNum();
    console.log(current_Num);
    beforeOp();
}
	else{
		concatCurrNum(e);
		cursUpWithCurrNum();
		console.log(current_Num);
		beforeOp();
	}
}
function equalPressed(e){
	if(firstLetter){	}
	else{
		resultResult()
		cursUpWithRes();
		console.log("egyenlo");
		memAfterEqual = result;
		before = "equal";
		console.log("equal: "+before);
		firstLetterF();
		maxOneDot();
	}
}

function dotPressed(e){
	oneDotOneNumber++;
	lastSubStr();
					
	if(before==="." || before==="equal"){
	}
	else if(oneDotOneNumber>1){						
	}
	else {
		concatCurrNum(e);
		cursUpWithCurrNum();
		console.log(current_Num);
	}
	before =".";
}

}





