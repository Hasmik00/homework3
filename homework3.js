/*function '1*/
console.log("function 1");
function func1(a, b, c){ 	
	return a + b - c ;
}
console.log(func1(2, 2, 3));


/*function 2*/
console.log("function 2");
function func2(){
	console.log("something");
	return "something";
}


/*function 3*/
console.log("function 3");
function func3(q, w, e){
	console.log(q*e+w);
}
func3(5, 7, 4);

/*function 4*/
console.log("function 4");
function func4(s1, s2, s3 ){

	let term = "";
	if(s1.length > s2.length){
		term = s1;
	} else {
		term = s2;
	}

	if(term.length > s3.length){
		console.log(trem);
		return (term);
	} else {
		console.log(s3);
		return (s3);
	}
}

func4("solemn", "skemata", "neighbourhood");

/*Fuction 5*/
console.log("function 5");
function twoNumbers(a, b){
	if(a===b){
		console.log("0");
		return 0;
	} else if(a>b){
		console.log("1");
		return 1;
	} else {
		console.log("-1");
		return -1;
	}
}
twoNumbers(5, 10);

/*Fucntion 6*/
console.log("function 6");
const mult = function multiply(x, y){
	return(x*y);
}                                                                                                                  
console.log(mult(5,12));

/*Function 7*/
console.log("fucniton 7");
const divi = function divide(m, n){
	return(m/n);
}
console.log(divi(12, 6));

/*Function 8*/
console.log("function 8");
function triangleArea(base, height){
	const area = divi(mult(base, height), 2);
	console.log("area of triangle is " + area);
	return (area);
}
triangleArea(12, 9);

/*Funciton 9*/
console.log("function 9");
function numLength(inputValue){
	console.log(inputValue + " has " + inputValue.toString().length + "characters");
	return inputValue.toString().length;
}
numLength(765432);

/*function 10*/
console.log("function 10");
function functon10(st1, st2, num){
	const lengthOfTwoStrings = st1.length + st2.length;
	if(lengthOfTwoStrings > num){
		console.log("1");
		return(1);
	} else {
		console.log("-1");
		return(-1);
	}
}
functon10("asdf", "asdfg", 1234);

/*function 11*/
function runStuff(st1, num, num1){
	if (st1==="rectangle") {
		const area = num*num1;
		console.log("Area of rectangle is "+area);
		return area;
	} else if (st1 === "triangle"){
		triangleArea(num, num1);
	} else {
		consle.log(-1);
		return(-1);
	}
}

runStuff("rectangle", 4, 4);















