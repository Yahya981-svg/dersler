/*let a = 5;

a= a+2;

console.log(a);
*/
/*let name = prompt("Centre your name :")
console.log(name);

        prompt()

        alert()
        
        prompt("Centre your name:");

*/
/*
!= : isn't equal
< : less than
> : greater than 
>= :greater or equal
<= :less or equal
=== : same as
|| : or
! : not



console.log(5===5);



// Alert
//Prompt
//Confirm
//function
console.log(window)
*/


//alert("How are you?");
//alert("You must save before continuing your work!");

/*
let name = prompt("Centre your name :"+ name);
let age = prompt("Centre your age :"+ age);

console.log("Your name is: "+ name);
console.log("Your age is: "+ age);


let result =confirm("Are you sure you wanna delete?");

console.log(result); 
*/
/*let grade = 70;

if (grade> 50){
        console.log("You passed, your grade :",+ grade );
}else{
        console.log("You failed, your grade :", grade);
}
*/
/*
let age = prompt("Your age :");
console.log(typeof age );
let money = prompt("Your sources:");

if(age>= 18 && money>=5000){
        alert("You can register to ability test");
}else{
        alert("You can't register to ability test")
}
*/
/*
let test1 = Number(prompt("Centre your test 1 grades:"));
let test2 = Number(prompt("Centre your test2 grades :"));

let final = Number(prompt("Centre your final grades :"));

let average = (test1*0.3) +( test2*0.3) + (final*0.4);

if(average>= 60){
        alert("You have passed the test, congratulations!");+
        console.log("You have passed the test, congratulations!");
}else{
        alert("You haven't passed the test");
        console.log("You haven't passed the test");

}
*/
/*
let theChosenWay = prompt("Please choose the way that you wanna go :")

if (theChosenWay ==1){
        alert("The chosen way is "+theChosenWay+"way.");
}
else if (theChosenWay ==2){
        alert("The chosen way is "+theChosenWay+"way.");
}
else if (theChosenWay ==3){
        alert("The chosen way is "+theChosenWay+"way");
}
else{
        alert("Please centre a valid way !!!");
}


let name = prompt("Centre your name : ");
 console.log(name);
*/
/*let name2 = "";
console.log(name2);

function checkUp(name , tckn){
        if(name!=""){
                if(tckn.length ==11){
                console.log("The name and tckn were centered withoud problems ")
                }else{
                        console.log("Please centre your tckn as 11 characters.")
                }
        }else{
                console.log("Please don't leave the name area empty!!")
        }
}

function checkUp(name, tckn){
        if(name==""){
                console.log("Please don't leave the name area empty!")
        return ;
        }
        if(tckn.length!=11)
                console.log("Please centre your tckn as 11 characters");
        return;        
        }

        console.log("The name and the tckn centered correctly.")
}
*/
//let name = prompt("Centre your name :");
//console.log(name);
/* let name2=prompt ("Centre your name")
 let tckn = prompt("Centre your tckn")
 console.log(name2);

checkUp(name,tckn);

function checkUp(name,tckn){

        if(name!=""){
                if(tckn.length == 11)
                console.log("Name and tckn centered correctly");
        }else{
        console.log("Please centre your tckn as 11 characters");
        

        }
        
        
        else{
                console.log("Please don't leave name area empty!")
        }
}

function checkUp2(name,tckn){
        if(name==""){
                console.log("Please don't leave name area empty!")
        }
        if(tckn.length!=11){
                console.log("Please centre your tckn as 11 chars.")
        }

}
*/
/*
let mass = Number(prompt("Center your mass"));

let high = Number(prompt("Center your high as meter"));

if(result<18.5){
        console.log("Less than ideal mass");
}else if (result>= 18.5 && result<=24.9){
        console.log("Less than ideal mass");
}else if(result>=25 && result<= 29.9){
        console.log("On the ideal mass");
}else if(result>=30 && result<=39.9){
        console.log("Much higher than ideal mass(obese)");
}else if(result>=40){
        console.log("Much higher than ideal mass(morbidal obese)");
}
*/

/*
1=> Diesel : 45.57
2=> Oil : 43.27
3=> LPG : 23.51

The informations we will get from the costumers;
1=> Type of Fuel
2=> The amount of fuel that will be loaded
*/
/*
let diesel = 45.57 , oil = 43.27, lpg =23.51;
const newLine ="\r\n";

const fuelText = "1- Diesel" +newLine
+"2-Oil"+newLine
+"3-LPG"+newLine
+"Choose your oil type";

let oilType = prompt(oilText);
let oilLiter = Number(prompt("Centre your oil liter"));
let amount = Number(prompt("Centre your balance"))

if(oilType=="1"{
        //DIESEL
        let theAmountWillBePayed = diesel*oilLiter;
        if(theAmountWillBePayed< balance){
        //your balance is enough.        
        alert("Buying oil is successful"+ newLine
        +"The remaining balance : " + (amount-theAmountWillBePayed))
        )


        }else{
        //your balance isn't enough.    
        alert("<Your balance isn't enough"+newLine
        +"The amount will be payed : "+theAmountWillBePayed+newLine
        +"Balance : " + balance+newLine
        +"Missing balance :" (theAmountWillBePayed-balance));

        )
        



}


})else if (oilType=="2"){
        //OIL
}else if (oilType=="3"){
        //LPG
}else{
        alert("Please center a valid oil type!");
}

*/
/*
let number = prompt("Please center a number");

switch(number)
{
        case "1"  :
        // Your codes
        console.log("The centered number is 1.");
        break;
        case "2"  :
        console.log("The centered number is 2.");
        break;
        case "3"  :
        console.log("The centered number is 3.");
        break;
        case "4" :
        console.log("The centered number is 4");
        break;
        case "5" :
        console.log("The centered number is 5.");
        break;
        default:
        console.log("The centered number must be between 1 and 5!!")
        break;
}       
*/
/*let newLine = "\r\n";
let text = "1- Monday"+ newLine
+"2- Tuesday"+newLine
+"3- Wednesday"+newLine
+"4- Thursday"+newLine
+"5- Friday"+newLine
+"6- Saturday"+ newLine
+"7- Sunday"+ newLine
+"Please make a day choice"

let value = prompt(text);
switch(value){
        case "1":
                console.log("Day of Monday");
        break;
        case "2":
                console.log("Day of Tuesday");
        break;
        case "3":
                console.log("Day of Wednesday");
        break;
        case "4":
                console.log("Day of Thursday");
        break;
        case "5":
                console.log("Day of Friday");
        break;
        case "6":
                console.log("Day of Saturday");
        break;
        case "7":
                console.log("Day of Sunday");
        break;
        }
*/
/*
let newLine = "\r\n";
let balance = 1000;

let text = "1-Viewing balance " +newLine
+"2- Taking money" +newLine
+"3- Putting money" +newLine
+"4- Exiting" + newLine
+"Please choose a value.";
*/
//alert(text);
/*
let choice = prompt(text);
switch(choice){
        case "1":
        alert("Your balance is :"+ balance);
        break;

        case "2": 
        let theAmountWillBeTaken = Number(prompt("Centre the amount you wanna take :"));
        if(theAmountWillBeTaken< balance){
        //success!!        
        balance = balance -theAmountWillBeTaken;
                alert("The remaining balance is : "+ balance);
}else{
                alert("You can't take money more than your balance!!"newLine)
                +"Your balance is : "+balance+ " " + "TheAmountWillBeTaken : "+ theAmountWillBeTaken;
        }
}
break;
        case "3":
        let theAmountWillBePayed = Number(prompt("Center the Amount will be payed:"));
        theBalance = balance+ theAmountWillBePayed;
        alert("Your recent ")
break;

default: 
        console.log("Please center a value between 1-4!!");
        break;
*/
/*
? QUESTIONS
1 ->Turkish 40  -4 points...
2 ->Mathematics 40 
3 ->Social Lessons 20
4 ->Science Lessons 20

-----> ÖSYM gives 100 points.
-----> The school gives maximum 60 points.

*/
/*
let TurkishCorrect , TurkishFalse=0;
let MathematicsCorrect , MathematicsFalse=0;
let SocialLessonsCorrect , SocialLessonsFalse=0; 
let ScienceLessonsCorrect , ScienceLessonsFalse=0;

let newLine = "\r\n";
let message = "Welcome to TYT points calculator application!"+ newLine
        +"1-Calculate points"+ newLine
        +"2-Exit";

//alert(message);


let theChoice = prompt(message);

switch(theChoice){
        case "1":
        schoolPoint = Number(prompt("Center your school point"));
        TurkishCorrect = Number(prompt("The amount of correct Turkish answers"));
        TurkishFalse = Number(prompt("The amount of false Turkish answers"));

        MathematicsCorrect = Number(prompt("The amount of correct Mathematics answers"));
        TurkishFalse = Number(prompt("The amount of false Mathematics answers"));

        TurkishCorrect = Number(prompt("The amount of correct SocialLessons answers"));
        TurkishFalse = Number(prompt("The amount of false SocialLessons answers"));

        TurkishCorrect = Number(prompt("The amount of correct ScienceLessons answers"));
        TurkishFalse = Number(prompt("The amount of false ScienceLessons answers"));

        let AmountofCorrectAnswers = TurkishCorrect+MathematicsCorrect+SocialLessonsCorrect+ScienceLessonsCorrect;
        let AmountofWrongAnswers  = TurkishFalse+MathematicsFalse+ScienceLessonsFalse+SocialLessonsFalse;
        let theAmountofRemainingCorrectAnswers = theAmountofCorrectAnswers - (theAmountofFalseAnswers/4)
        point = (theAmountofRemainingCorrectAnswers*4)+ 100 + schoolPoint;
        alert("Your TYT point is : "+ point);
        break;

    case "2" :
        alert("You have exited the application...");
        break;

    default :
    alert("Please center an amount in the valid interval!!");
    break;

}
*/

/*Type Changes 

strings, numbers, booleans, undefined, and null.
    numbers
object , function

*/
/*
let a = 5;
let b = "10";

let c = Number(a);
//console.log(typeof c);
console.log(a+c);
*/

// parseInt()

//console.log(window);
/*
let a =9;
let b =parseFloat("11.7");
console.log(a+b);
console.log(typeof b);
*/

//Changing Number type to String type

/*let x =String(55);
let x = 55;
console.log(typeof x);
console.log(x); */

/*
let result = String(true);
console.log(typeof result);
console.log(result);
*/

//let a = Number("9");
// Not a number 
//console.log(a);


//  let numbers = [1,2,3,4];

//console.log(typeof numbers);
//console.log(numbers);

//let numbers = [1,2,3,4];

//function findAverage(midterm1, midterm2,finalNote){


//}
/*
let a = 10;
debugger;
let b = 15;
let c = a+b;
let d = a+b+c;
let e = a+c+b;

let result = a+b+c+d+e;
console.log("Result", result);
*/

// let's print from 1 to 10

//for(let i =1; i<=10 ; i++){
//      console.log(i);
//}

// Let's print the doubles from 1 to 10
/*
for(let i =0; i <=10 ; i=i+2){
        console.log(i);
}
*/

/*for (let i=1; i<=10; i++){
        if(i%2==1){
                console.log("Yahya")
        }else{
                console.log("What's up");
        }
}
*/

// Let's find the sum of the numbers from 50 to 0.
/*
for(let i = 50; i>=1;i--){
        theSum= theSum+i;
        console.log(i);
}

console.log("TheSum is : ",theSum);
*/
/*
let counter = 1;

while(counter<= 10){

        console.log(counter);

        counter++;
}
*/

/*
 while(counter<=10){
        if(counter<=10){
                console.log(counter);
        }
        counter++;

 }
*/
/*
let counter =1;
while (true){
        console.log(counter);
        if(counter== 7){
                break;
        }
        counter++;
}
*/
/*
let counter = 1;

do{
        console.log(counter);
        counter++;
}while(counter<=10);
*/
/*
let age = 25;

do{
        console.log("You can take permission");

}while(age>=25);
*/
/*
let counter = 1;
let sum = 0;

do{
        if(counter%2==1){
                theSum+=counter;
        }
        counter++;

}while(counter<=20);
console.log("The sum is :", theSum);
*/
/*
let theCounter =1;
while(theCounter<= 10){
        console.log(theCounter);
        if(theCounter=8){
                break;
        }
        theCounter++;
}
*/
 
/*
let theCounter = 0;

while(theCounter<=10){
        theCounter++;
        if(theCounter>10){
        break;
        }
if (theCounter== 8 ){
        continue;
}
console.log(theCounter);

}
*/
/*
// Making multiplication table

/*
1x1 = 1
2x2 = 4
3x3 = 9
.
.
.
*/
/*
for(let i =1; i<10; i++){
        for(let j=1;j <= 10; j++){
                console.log(i+"x"+j+"="+(i*j));
        }
        console.log("...............................");
}
*/
//let a = Math.floor(7.7)
//console.log(a)
/*
let number = Number(prompt("Please centre a number :"));

for (let i=2 ; i<= Math.floor(number/2); i++){
        if(number%i==0){
// Not prime.
        result= false;
        break;
}
}
if(result){
        alert(number +"It's prime.");
}else{
        alert(number +"It's not prime. ")

}
*/
/*let Number = Number(prompt("Center a number"));

for(let i =1 ; i<=Number ; i++){
        Multiply= Multiply*i;
}
alert("The result :",Multiply );
*/

//153-370-407 are Armstrog numbers.

//1*1*1 + 5*5*5 + 3*3*3 = 153
/*
let number = prompt("Centre a number :");

for(let i =0; i<number.length; i++){
   let number = number.charAt(i);
   theSum+= number*number*number;
}

if(Number(number)==theSum){
        alert("It's an Armstrog Number :)");
}else {
        alert("It's not an Armstrog Number ");
}
*/
/*function print(){
        console.log("Yahya");

        

} 
debugger;
print();
print();

function add(){
        console.log(7+9);
}

add();
*/
/*
function print(theName,theSurname){
        debugger;
        console.log(theName + " " + theSurname);
}

   debugger;
  print("Yahya","Şakar");
*/
/*cube(15);
cube(20);

function cube(number){
        console.log(number*number*number);
}
*/
/*
let age = Number(prompt("Center your age :"));

function checkUp(age){
        if(age>18){
            console.log("You can take driving licence");
        }else{
            console.log("You can't take driving licence");
        }
}

parseInt()
*/
/*
let theValue = cube(3);
takeSquere(theValue);
function takeSquere(the Number){
        let result = number*number;
        console.log(theResult);
}
let cube(3);

function cube(Number){
        let result = Number*Number*Number;
        return result;
        console.log("Yahya");
}
*/
/*
Making word counter application


let text = "I am currently studying 'Javascript'";

let character = prompt"Centre the character";
*/
/*
let theReturnedValue = cube(3);
takeSquere(theReturnedValue);

function takeSquere(number){
        let result = number*number;
        console.log(result);
}

function cube(number){
        let result = number*number*number;
        return result;
}
*/

//function print(){       log(...data: any[]): void
//        console.log("Yahya");
//}

//finding word amount application 
/*
let text = "I am currently recording JavaScript in Malatya.";

let theLetter = prompt("Center the letter:");

function find(theLetter){
        let theSum =0;
        for(let i =0; i<textlength ; i++){
                if(text.charAt(i).toLowerCase()===theLetter.toLowerCase()){
                        theSum++;
                }
        }
        return theSum;
}
*/
/*
function isPerfectNumber(number){
        let theSum = 0;
        for(let i=2 ; i<= number/2 ; i++){
            if(number%i==0){
                theSum+=i;
            }    
        }
        theSum+= 1 +number;

        if(theSum==number*2){
                console.log("It's a perfect number...");
        }else{
                console.log("It's not a perfect number...");
        }

}
*/
// Decimal to Binary Conversion
/*
function convertDecimalToBinary(number){
        let binary = "";
        while(true){
              binary+= (number%2).toString();  
              number=Math.floor(number/2);  
        if(number==1){
                //No more dividing,out of the array!!
                binary+=1;
                break;
            }
        }
        let result = reverse(binary);
        console.log("The result is :"+ result);
}

function reverse(binary){
        let reverseBinary = "";
        for(let i = binary.length-1 ; i>0 ; i++){
                reverseBinary+=binary.charSet(i);
}
        return reverseBinary

}
*/
// Decimal to Binary Conversion
/*
let binary = "10011";

function convertBinaryToDecimal(binary){
       let theSum = 0;
       let up = 0;
       for(let i= binary.length-1 ; i>=0 ;i--) {
        theSum +=   Number(binary.charAt(i)) = Math.pow(2, up) ;
        up++;
}

        console.log("The result is : "+ theResult);

}

convertBinaryToDecimal(binary);
*/
/*
let numbers = [0,1,2,["Hey apple"],3,4,5,6,7,["Knife"],8,9];

console.log(numbers[5]);

numbers[6]="Orange";

console.log(numbers[10]);

/*
let names = ["Mustafa","Noah","Ali","Ayşe"];
names[3]= "Rana";
console.log(names[5]);
*/


//let complexArray = [5,"Yahya",7,9,true,null,undefined];
//console.log(complexArray[4]);
/*
let array1= ["Yahya","Mustafa","Ali"]; 
let array2 =new Array["Yahya","Mustafa"];

// number , string ,boolean , undefined null , object(array)

console.log(typeof array2);
*/
/*
let names = ["Kerem","İsmail","Yusuf", "Burak","Furkan","Sefa"];

let counter = 0;
while (counter<names.length){
        console.log(names[counter]);
        counter ++;
}
*/


//for (let i=0 ; i<names.length ; i++){
//        console.log(names[i]);
//}



/*
names.forEach(function(name){
        console.log(name);
        ;
})
*/

//let cars = ["BMW","Toyota","Renault","Mercedes","Porsche"];
/*
console.log(cars.length);
cars.push("opel");
console.log(cars);
*/
/*
cars.unshift("hundai");
console.log(cars);

let theDeletedElement = cars.pop();
console.log(cars);
console.log(theDeletedElement);
*/
/*
let theDeletedElement = cars.shift();
console.log(cars);
console.log(theDeletedElement);
*/

//console.log(cars);
//cars.splice(0,0,"hundai");
//console.log(cars);

//cars.splice(1,2);
//console.log(cars)

//cars.splice(2,2,"hundai");
//console.log(cars);

//TOSTRING METHOD
/*console.log(typeof cars);
let stringCars = cars.toString();
console.log(typeof cars );
console.log(stringCars);
*/
/*
let stringCars = cars.join("?");
console.log(stringCars);
*/
/*
console.log(cars);
let theIndependedArray = cars.slice(2);
console.log(theIndependedArray);
*/

//let names = "Ali,Fatih,Ahmet";

//let namesArray = names.split(",");
//console.log(namesArray);


/*
let index = cars.indexOf("hundai");
if(index==0){
        console.log("The stated element exists.");
}else{
        console.log("The element doesn't exist.")
}
*/
/*
let result = cars.includes("Renault");
if(result){
console.log("The element exists.");
}else{
        console.log("The element doesn't exist.");
}
*/
/*
let product1 = {
        name : "ACER Swift ",
        category : "Technology",
        cost : 6.545
}
let product2 = {
        name : "ACER Nitro 5",
        category : "Technology",
        cost :16500
}
let product3 = {
        name : "Lenovo V15",
        category : "Technology",
        cost : 11300
}
let product4 = {
        name : "Lenovo V14",
        category : "Technology",
        cost : 4700
}
let product5 = {
        name : "Lenovo Ideapad",
        category : "Technology",
        cost : 4900
}

let products = [product1,product2,product3,product4,product5];

let userProductName = prompt("Center a product name :");

function getFiltredProducts(products){ 
products.forEach(function(product){
        if(product.name.toUpperCase().includes(userProductName.toUpperCase(),0))
                theFiltredProducts.push(theProduct);
        });

}

function printtheFiltredProducts(products){
        products.forEach(function(theProduct){
           console.log("-----------------------------");
        console.log("|" + product.name + "|" + product.price+"|"+ product.category);

         )
        })

}
*/
/*
let book1={name : "Don't think everything",writer : "Anne Bogel", price :25}
let book2={name : "Any crosses are random",writer : "Hakan Mengüç", price :56}
let book3={name : "What does human live with",writer : " Tolstoy", price :34}
let book4={name : "The victory isn't gained with whimpers",writer : " Haluk Tatar", price :45}
let book5={name : "The Sugar Orange",writer : "José Mauro de Vasconselos", price :22} 

let books = [book1,book2,book3,book4,book5];

let shelf11= {code :"1.1.SHELF", show:false}
let shelf12= {code :"1.2.SHELF", show:false}
let shelf13= {code :"1.3.SHELF", show:false}
let shelf14= {code :"1.4.SHELF", show:false}
let shelf15= {code :"1.5.SHELF", show:false}

let shelf21= {code :"3.1.SHELF", show:false}
let shelf22= {code :"3.2.SHELF", show:false}
let shelf23= {code :"3.3.SHELF", show:false}
let shelf24= {code :"3.4.SHELF", show:false}
let shelf25= {code :"3.5.SHELF", show:false}

let shelf31= {code :"2.1.SHELF", show:false}
let shelf32= {code :"2.2.SHELF", show:false}
let shelf33= {code :"2.3.SHELF", show:false}
let shelf34= {code :"2.4.SHELF", show:false}
let shelf35= {code :"2.5.SHELF", show:false}

let shelf41= {code :"2.1.SHELF", show:false}
let shelf42= {code :"2.2.SHELF", show:false}
let shelf43= {code :"2.3.SHELF", show:false}
let shelf44= {code :"2.4.SHELF", show:false}
let shelf45= {code :"2.5.SHELF", show:false}

let shelfs = [
        [shelf51,shelf52,shelf53,shelf54,shelf55],
        [shelf41,shelf42,shelf43,shelf44,shelf45],
        [shelf31,shelf32,shelf33,shelf34,shelf35],
        [shelf21,shelf22,shelf23,shelf24,shelf25],
        [shelf11,shelf12,shelf13,shelf14,shelf15]];


        function createShelf(){
                console.clear();
                let theRow="";
                for(let i =0 ; i<shelfs.length ; i++){
                        for(let j=0 ; j<5 ; j++){
                               theRow+= "|" + (shelfs[i][j].show ? shelfs[i][j].theCode :"---") +"|";
                        }
                        console.log(theRow);
                        console.log("----------------------");
                        theRow="";

                }

        }
        function findCode(bookName){
         books.forEach (function(theBook)
                if(book.name.toUpperCase().includes(bookName.toUpperCase(),0)){
                         console.log(bookName)
                        return book.shelf;
                        }                 
                });                 return null;
        }                
        function showInTheShelf(theShelfCode){
                for(let i = 0 ;i<shelfs.length; i++){
                        for(let j=0 ; j<5 ; j++){
                                if(theShelfs[i][j].theCode==theShelfCode){
                                        theShelfs[i][j]= true;
                                        break;
                                }
                        }
                }
       
                }
                             
        createShelf();

let bookName = prompt("Please centre a book name :");
let shlelfCode = findCode(bookName);

showInTheShelf(theShelfCode)


if(shlelfCode!= null){
showInTheShelf(theShelfCode);
createShelf();
}else{
        alert ("The book you centered isn't in our library.")
}
*/
// String Class Methods
//let course = "A modern web developing course.";
//let date = "2024";
/*
charAt()
concat()
indexof()
lastindexof()
toUpperCase()
toLowerCase()
trim()
slice()
substring()
replace()
split()
valueOf()
startsWith()
endsWith();
*/
/*CHARAT =>
let character = course.charAt(1);
console.log(character);
*/

//let result = course.concat("",date,"Yahya");
//console.log(result);

//let index = course.indexOf("o");
//console.log(index);

/*let index = course.lastIndexOf("Course");
console.log(index); */

/*let result = course.toUpperCase();
console.log(theCourse);
console.log(theResult);
*/
/*
TOLOWERCASE METHOD
let result = course.toLowerCase();
console.log(theResult);
*/
/*TRIM METHOD 
console.log(course.trim());
 */
/*SLICE METHOD
console.log(course);
console.log(course.slice(7,10)); */
/*
SUBSTRING METHOD
console.log(theCourse);
console.log(theCourse.substring(0,6)); */
/*
REPLACE METHOD
console.log(theCourse);
console.log(theCourse.replace("Modern","Recent"));*/
/*
SPLIT METHOD
console.log(theCourse);
let array = course.split(" ");
console.log(array);
*/

//VALUEOF METHOD
//console.log(theCourse.valueOf());

// STARTSWITH METHOD
//console.log(course);
//console.log(course.startsWith("M"));
//if(theCourse.startsWith("M")){
//        console.log("It's starting with the letter M.");
//}

//ENDSWITH METHOD
//console.log(theCourse);
//console.log(theCourse.endsWith("The Developing Course"));
/*
Math Class Methods
1=>Fliper
2=>Cell
3=>Round

4=>Max
5=>Min

6=>Random
7=>Abs
8=>Sqrt
9=>Pow
*/


//console.log(window);

let a = 3.15;
let b = 12;
//console.log(Math.floor(a));
//console.log(Math.ceil(a));
//console.log(Math.round(a));

//console.log(Math.max(23,13,44,56,37));
//console.log(Math.min(18,46,-34));
//console.log(Math.abs(b));

//console.log(Math.sqrt(196));
//console.log(Math.pow(2,4));

//console.log(Math.floor(Math.random))

/*
let ramdomValue = Math.random();
let Result = ramdomValue*100;
let sqrtResult = Math.floor(Result);

console.log(randomValue);
console.log(result)

console.log(ramdomValue);
console.log(result);
*/
//console.log(Math.floor(Math.random()*100));
//let Date = new Date(1998,27,12,15,25,35);

//console.log(date);
/*
let Date = new Date();
console.log(date.toString());
console.log(typeof date.toString());
*/
//console.log(date);


/*console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes)
console.log(date.getMonth()+1);
console.log(date.getSeconds());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
*/

//Set Methods

//console.log(Date);
//date.setHours(15);
//date.setDate(24);
//console.log(Date);
//date.setMonth(11);
//console.log(date);

//date.setHours(date.getHours()+5);
//console.log(date);
/*
let t  = 7;
let k = t;

console.log("a : "+ a);
console.log("b : "+b);

console.log("--------------------");

b=10;

console.log("a : "+ a);
console.log("b : "+ b);
*/
/*
let array1 = [1,2,3,4];
let array2 = [1,2,3,4];        
let array1 = array2;
if(array1==array2){
        console.log("It's equal");
}else{
        console.log("Not equal");
}
*/



//console.log(array1);
//console.log(array2);
/*
let array1 = [1,2,3];
let array2 = array1;
let array3 = array2;


array3.push(12);

console.log(array1);
console.log(array2);
console.log(array3);
*/

//let value ;

//console.log(document.location);

// value = document.location.href;
//value = document.location.hostname;
//value = document.location.port;
//value = document.location.pathname;


/*value = document.title;
value = document.links.item(4);
value = document.links.item(4).id;
value = document.links.item(4).getAttribute("id");
value = document.links.item(4).getAttribute("class");
value = document.links.item(4).classList[4];
*/
/*
value = document.forms.item(1).children;

value.document.domain;
value.document.contentType;

console.log(value);

Selectors - Style Properties

 classname , id , tag name

 getElementById : Catches the element by Id
getElementByClassName : Catches by the Class Name

let value; 

value = document.getElementById("todoAddButton");
*/
/*
const button = document.getElementById("todoAddButton");
console.log(button);
console.log(button),id;
console.log(button.getAttibute("id"));
console.log(button.className);
console.log(button.getAttribute("class"));

const classList = button.classList[4];
const classList = bottom.classList;

const classList.forEach(function(className){
        console.log(className);
})

console.log(classList);
*/

/*let buttonText = button.textContent;
let buttonText2 = button.innerHTML;

console.log(buttonText);
console.log(buttonText2); */


//button.textContent = "<b>Add a ToDo</b>"
/*
const todoList =Array.from( document.getElementsByClassName("list-group-item"));
todoList.forEach(function(todo){
        console.log(todo);
})

console.log(todolist);*/
/*
const todo = document.querySelectorAll(".list-group-item");
const todoList = document.querySelector("#list-group");


console.log(todoList);

todo.style.color= "#fff";
todo.style.backgroundColor= "white";
todo.style.fontWeight= "bold";
todo.style.paddingTop= "20px";
todo.style.paddingLeft= "70px";

todoList.style.marginTop="60px";
// todoList.style.marginLeft = "100px" ;

clearButton.style.backgroundColor="red";
clearButton.style.fontWeight="bold";
clearButton.style.padding= "10px";
clearButton.style.marginTop= "100px";
clearButton.style.borderRadius= "50px"; */
/*
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
console.log(todo);
// const card = document getElementByClassName("card")[10];
const card = document.querySelector(".card");
console.log(card);

let value;

value = todo;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "It changed";*/

/*value = Array.from(todoList.children);

value.forEach(function(todo){
        console.log(todo.textContent);
})

*/
/*
console.log(value);

value = todo;
value = todo.parentElement;
let cardBody = toDo.parentElement;
let cardElement = cardBody.parentElement;
let theRow = cardElement.parentElement;
let container = row.parentElement;

console.log(u1); 

const todo = document.querySelector(".list-grooup-item");
const todoList =document.querySelector(".list-group");
//const card = document.getElementByClassName(".card")[0];
const card = document.querySelector(".card");

let value;

//Accessing mother from children 

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Changed";

/*value = Array.from(todoList.children);

value.forEach(function(todo){
        console.log(todo.textContent);
})
*//*
value = todo; 
let u1 = todo.parentElement;
let cardBody = todo.parentElement;
let cardElement = cardBody.parentElement;
let container = row.parentElement;
//value = value.parentElement;

console.log(container);

value = todo; 
let u1 = todo.parentElement;
let cardBody = u1.parentElement;
let cardElement = cardBody.parentElement;
let row = cardElement.parentElement;
let container = row.parentElement;

// Traveling between siblings 


value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling.
nextElementSibling;


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;

value = row.children[0].children;


console.log(value);
*/
// Creating elements as dinamic
/*
const cardBody = document.querySelector("card-body")[1];
const todoList = document.querySelector(".list-group");


console.log(cardBody)

const link = document.createElement("a");
link.id= "goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://yahyaşakar.net";
link.target="_blank";
link.innerHTML = "Go to my personal Website";

//<li class="list-group-item d-flex justify-content-between">Todo

cardBody.appendChild(link);

const todo = document.createElement("li");
const toDoLink = document.createElement("a");
const i = document.createElement("i");

toDo.className="list-group-item d-flex justify-content-between";
toDo.innerHTML = "toDo 5";

toDoLink.href="#";
toDoLink.className="delete-item";

i.className="fa fa-remove";

toDoLink.appendChild(i);
toDo.appendChild(toDoLink);

todoList.appendChild(todo);


console.log(link);


const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");*/
//const todo1 = document.querySelector(".list-group-item");

//console.log(todos);

/*
todos[0].remove();
todos[1].remove();
console.log(todos);
*/
//todos[todos.length-1].remove()

//todo1.remove();


/*let todo1 = todos[0];
todoList.removeChild();

todoList.removeChild(todo[0]);*/
/*
const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContentv = "todoList - New";

console.log(cardBody.childNodes);

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);
*/

/*
clearButton.addEventListener("click",function(){
       
});
        function changeTitle(){
document.querySelectorAll('.card-title')[1].textContent='Change the Todo Header';
console.log("The title changed");
}
*/
/*
const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle);        

function changeTitle(e){
        console.log(e.type);
        console.log(e.target);
        console.log(e.target.textContent);
        console.log(e.target.className);
}
*/
// Mouse Events
/* DOMContentLoaded
load 
click
dblclick
mouseover
mouseout
mouseenter
mousedown   */

/*window.addEventListener("load",run);

function run(){
        alert("The page loaded!!");
}*/
/*
const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body") [1];

//cardBody.addEventListener("mouseover",run);
//cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);
//cardBody.addEventListener("mouseout",run);

function run(e){
        console.log(e.type);
}
*/
// Keyboard Events 
// keypress , keydown , keyup

//document.addEventListener("keypress",run);


//function.run(e){
//        console.log(e.key);
//console.log(e.keyCode);
//console.log(e.which);
//}
/*document.addEventListener("keyup",run);

function run(e){
console.log(e.keyCode);
if(e.keyCode ==115){
        alert("Refreshing page prevented");
}


e.preventDefault();
}*/
/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoAddButton")

console.log(input);
input.addEventListener("keypress",run);


function run (e){
        console.log(e.target.value);
}*/

//INPUT EVENTS

/* focus
blur
copy
paste
cut
select */

/*const  todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy,run");
todo.addEventListener("paste,run");
todo.addEventListener("cut,run");
todo.addEventListener("select,run");
function run(e){
        console.log(e.type);
}*/
// Using Session Storage
// Adding Values
/*
sessionStorage.setItem("250","Yahya");
sessionStorage.setItem("320","Murat");
sessionStorage.setItem("440","Yasin");
sessionStorage.setItem("540","Ayşe");
sessionStorage.setItem(320,114);
*/
//Deleting Values
/*sessionStorage.removeItem("440","Yasin");

let value = sessionStorage.getItem("700")
if (value=== null){

console.log("Couldn't find the value");
console.log(value);

}else{
        console.log("The value found : ",value);
}
*/
//Deleting All
//sessionStorage.clear();
/*
let names = ["Ali","Osman","Murat","Mehmet"];

sessionStorage.setItem ("names",JSON.stringify(names));

let value = JSON.parse (sessionStorage.getItem("names"));
console.log(typeof value); */

//Adding Values
/*localStorage.setItem("motion1","PushUp" );
localStorage.setItem("motion2","Barfix" );
localStorage.setItem("motion3","Barpee" );
localStorage.setItem("motion4","Squat" );

//Taking Values

let value = localStorage.getItem("motion1");
console.log(value);

//Deleting Values
let value = localStorage.removeItem("motion4");

//Clear All
//localStorage.clear();
*/
// Choosing all the elements
/*
const form = document.querySelector("#todoAddForm");
const addInput =document.querySelector("#todoName");
const todoList =document.querySelector(".list-group");
const firstCardBody =document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton =document.querySelector("#clearButton");

let todos = [];

runEvents();

function runEvents(){
        form.addEventListener("submit",addTodo);
        document.addEventListener("DOMContentLoaded".pageLoaded);
        secondCardBody.addEventListener("click",removeTodoToUI);
}

function pageLoaded(){
        checkTodosFromStorage();
        todos.forEach(function(todo){
        console.log(todo);
        });
}
function filter (e){
        const filterValue   =  e.target.value.toLowerCase().trim();     
        const todolist  = document.querySelectorAll(".list-group-item");

        if (todoList.length> 0){
                todoList.forEach(function(todo){
                        if(todo.toLowerCase().trim().includes(filterValue)){
                                todo.setAttribute("style","display : block");
                        }else{
                                todo.setAttribute("style","display : none | important");
                        }
                });
                }else{
                showAlert("Warning","")
        }

}


function allTodosEverywhere(){
      const todoList  = document.querySelectorAll(".list-group-item");
      if (todoList.length>0){
        //Deleting from screen
        todoList.forEach(function (todo){
        todo.remove();        
        });
      




}










//Deleting from screen
function allTodosEverywhere(){
        const todoList = document.querySelectorAll(".list-group-item");
        if (todoList.length>0){
                todoList.forEach(function(todo){
                        todo.remove();
                ;
                });
        //Deleting from storage
todos= [];
localStorage.setItem("todos",JSON.stringify(todos));
showAlert("Success")        

        else{
                showAlert("Warning","There must be at least one toDo for deleting");
        }
        console.log(Todolist);
}





function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){    
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        showAlert("success","Todo deleted successfully!");
        //Deleting from Screen
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        showAlert("success","Todo deleted successfully!");
       //Deleting from Storage
        removeTodoToStorage(todo.textContent);
        showAlert("success","Todo deleted successfully.");
        //Adding Interface
        addTodoToUI(inputText);
        addTodoToStorage(inputText);

}

function removeTodoToStorage(removeTodo){
        checkTodosFromStorage();
        todos.forEach(function(todo,index){
                if(removeTodo===todo){
                        todos.splice(index)
                }
        })

}
function removeTodoToStorage(removeTodo){
checkTodosFromStorage();
todos.forEach(function(todo,index){
        if (removeTodo=== todo){
                todos.splice(index,1);
        }
});
localStorage.setItem("todos",JSON stringify(todos));
}




function addTodo(e){
        const inputText = addInput.ariaValueMax.trim();
        if(inputText==null || inputText==""){
                showAlert("Please center a value!");
        }else{
                //Adding interface
                addTodoToUI(inputText);
                addTodoToStorage(inputText);
                <div class="alert alert-warning" role="alert">
                        This is a warning alert-check it out!!
                </div>
                        showAlert()
        } 
                        constructor(parameters) {
                                
                        }
                }></div>
                
                showAlert()
        }
        //Adding interface
        //Adding storage
        e.preventDefault();


}

function addTodoToUI(newTodo){
/*<li class="list-group-item d-flex justify-content-between">Todo 1

                             <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                             </a>
                             </li>
        */
/*        const li = document.createElement("li");  
        li.className="list-group-item d-flex justify-content-between";
        li.textContent = newTodo;
        
        const a = document.createElement("a");
        a.href="#";
        a.className="delete-item";
        
        const i = document.createElement("i");
        i.className="fa fa-remove";

        a.appendChild(i);
        li.appendChild(a);
        todoList.appendChild(li);

        addInput.value = "";
}

   function addTodoToStorage(newTodo){
        checkTodosFromStorage();
        todos.push(newTodo);
        localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage(){
        if(localStorage.getItem("todos")===null){
                todos = [];
        }else{
                todos = JSON.parse(localStorage.getItem("todos"));
        }
}
*/

/*function showAlert(type,message){
        /*
        <div class= "alert alert-waning"role="alert">
        This is a warning alert-check it out!
        </div>*/
/*        const div = document.createElement("div");    
        //div.className= "alert alert-"+type;
        div.className='alert alert-${type}' ; //literal template
        div.textContent = message;

        firstCardBody.appendChild(div);

        setTimeout(function(){
                div.remove();
        },2500);

}
*/
/*
const print = ()=>{
       console.log("Hello"); 
}

()=>{
        console.log("Yahya");
}

print();
*/
/*
const print  =(firstName,lastName)=>{
        console.log("Hello",firstName,lastName)
        let a = 5;
        console.log(a)
        console.log("Yahya")
}


print("Yahya","Şakar")
*/

//const takeCube = (x)=>  x*x*x

//document.addEventListener("click"function(){

//})

//console.log("The returning value is",takeCube(3))

// Using Destructions

//let langs = ["C#","C++","Javascript","Java","Python"]
//let lang1,lang2,lang3,lang4,lang5

/*lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];
lang4 = langs[3];
lang5 = langs[4];
*/
//[lang1,lang2,lang3,lang4,lang5] = langs

//console.log(lang1,lang2,lang3,lang4,lang5);




/*const calculate = (a,b) => {
        const sum = a+b;
        const minus = a-b;
        const times = a*b;
        const divide = a/b;

        const Array =[sum,minus,times,divide]
        return Array
}
let [a,b,c,d] = calculate(10,2)

console.log(a,b,c,d)
*/

/*const person = {
        FirstName : "Yahya",

        LastName : "Şakar"

        salary : 7500,

        age : 24
}
*/
//let FirstName,LastName,salary,age
/*
FirstName = person.FirstName
LastName = person.LastName
salary = person.salary
age = person.age
*/

//let {FirstName,LastName,salary,age} = person;

//console.log(FirstName,LastName,salary,age)
/*
let numbers = [10,20,30,40]
function add(a,b,c,d){
        console.log(a+b+c+d)
}

function add(10,20,30,40)
*/

//const Languages1 = ["Java","C++","Pyton"]
//const Languages2 = ["Php","Redux","Kotlin",Languages1[0],Languages1[1]]
//const Languages2 = ["Php","Phyton",...Languages1]
//console.log(Languages2)


/*const Numbers = [1,2,3,4,5,6,7,8,9]

let[a,b,...remainingNumbers]= Numbers

console.log(a,b,remainingNumbers);*/


//const array1 = ["Mustafa","Ayşe","Ali","Sultan"]
//const array2 = []

/*array2[0]= array1[0]
array2[1]= array1[1]
array2[2]= array1[2]
array2[3]= array1[3]

const array2=[... array1]

console.log(array2)
*/

//let names = ["Ali","Mehmet","Mustafa","Burak"];

//names.forEach(function(name){
//        console.log(name)
//})

//names.forEach ((name)=>{console.log(name)})
        
//for(let name in names){
//       console.log(name, names[name]) 
//}

//for(let name of names){
//        console.log(name,names.indexOf(name))
//}

//let array = [1,2,3]

//const map1 = new Map();

//Set
/*map1.set(1,"Yahya")
map1.set(true,7)
map1.set([1,2,3,4],{FirstName : "Yahya", LastName : "Şakar"})
map1.set(true,"5")
*/

/*map1.set(34,"İstanbul")
map1.set(35,"İzmir")
map1.set(6,"Ankara")
map1.set(1,"Adana")
*/
//Set
//console.log(map1get(6))
//console.log(map1get(34))
//console.log(map1get(35))

//Size

//value = map1.size;

//Delete

/*value = map1.delete(34)
console.log(map1.size)
console.log(value);*/

//has
//console.log(map1.has(55))

/*const keys = Array.from(map1.keys())
console.log(keys)


        keys.forEach ((key ) =>{
            console.log(key)    
        })*/


/*for (let key of map1.keys()){
        console.log(key)
}*/

//for(let value of map1.values()){
//       console.log(value); 
//}


//let array =[1,2,3,4,5,6];


/*const array2 = 
[34,"İstanbul"],
[35,"İzmir"],
[06,"Ankara"],
[01,"Adana"],

const array = Array.from(map1);

array.forEach((value)=>{
       console.log(value[0],value[1]) 
})*/



/*map1.set(34,"İstanbul")
map1.set(35,"İzmir")
map1.set(6,"Ankara")
map1.set(1,"Adana")
map1.set([1,2,3],"Array")



console.log(map1.get({username: "Yahya"})
*/

//Set

//const set = new Set();

//Add method
/*
set.add(true)
set.add(3.14)
set.add("Yahya")
set.add(10)
set.add(10)
set.add(10)
set.add(10)
set.add(10)
set.add({username:"Yahya", password : "1393"});
set.add([1,2,3,4])

for (let value of set ){
        console.log(value)
}
*/

/*const values = Array.from(set);
values.forEach((value)=>{
        console.log(value)
})*/

//Creating Array from set

//const values = Array.from(set)

//Creating set from array

/*let Array = [5,"Mustafa", "Murat", 17,96,[14,25,78]]

const newSet = new Set(array);
console.log(newSet);*/
// Template Literals
/*
function write(firstName,lastName){
        //console.log("Name :"+ firstName + " "+ "LastName : "+ LastName)
        // Using with template litarals
        console.log(`Thename : $(firstName) Thelastname : $(lastName)`)
}

console.log(
`
        Name :${firstName}
        LastName :${lastName}

`
write("Yahya", "Şakar")
)
*/

//function getUserById(UserId){
//        console.log('http://localhost:8080/user/')
//}
//                getUserById(UserId: any): void

//getUserById(10)

/*const set = new Set()

set.add(true)
set.add(3.14)
set.add("Yahya")
set.add(7)
set.add({username : "Yahya"}{password : "Etwas"})
set.add([2,3,4,5,6,7])*/


/*console.log(setsize)

set.delete("Yahya")
set.delete([2,3,4,5,6])
console.log(set.size)*/

//has
//console.log(set.has("Wer"))

//for loop
/*for( let value of set){
        console.log(value)
}*/

/*const values = Array.from(set);
console.log(values)
values.forEach((value)=>{
        console.log(value)
})*/

//making array from set

//const values = Array.from(set);

//making set from arrays

/*let Array = [12,"345","Noah", "Rana",1234,[6,7,7]]

const newSet = newSet (Array);
console.log(newSet) */

//Template Literals

/*function write(firstName,lastName){
        console.log(
                `Name : ${firstName}+
                Surname : ${lastName}`
        )
}

write("Yahya","Şakar");*/

//function getUserById(UserId){
//        fetch()
//}

//getUserById(8)
/*
class Human{
         constructor(){
                conosole.log("The builder method worked")

                consstructor(name,surname,age,salary)
                this.name= name;
                this.surname= surname;
                this.age= age;
                this.salary= salary;
        }

        showImformations(){
                console.log(`Name :${this.name}, 
                        Surname :${this.surname},
                        Age :${this.age},
                        Salary :${this.salary}`)
        }



}
const human1 = new Human("Yahya","Şakar",24,7500);
human1.showImformations()
const human2 = new Human("Ubeydullah","Şakar",31,20000);

//human1.showImformations();
//human2.showImformations();
console.log(human1.Name)
*/

/*class Mathematics{

Add(a,b){
        console.log(a+b)
}


Minus(a,b){
        console.log(a-b)
}

Times(a,b){
        console.log(a*b)
}

Divide(a,b){
        console.log(a/b)
}

}

const mathematics = new Mathematics();
mathematics.Add(10,5);*/

//Taking Inheritance


class Person{
        
constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

}
    
        writeinfo(){
                console.log(this.firstName,this.lastName,this.salary)
        }


}



class student extends person{

        constructor(firstName,lastName,salary){
                super(firstName,lastName,salary);
        }


        writeinfo(){
                super.writeInfo()
        }

}

class engineer extends Person{
        constructor(firstName,lastName,salary){
                super(firstName,lastName,salary);
        }

        writeInfo(){
                super.writeInfo();
        }

}





const student1 = new Student("Yahya","Şakar",10000);
const engineer = new Engineer("U'beydullah","Şakar",35000);
student.writeInfo()
engineer.writeInfo()
















