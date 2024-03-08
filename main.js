// chapter 9-11

// Q1
// var city = prompt('Enter ur country')
// if(city='Karachi'){
//        document.write(
//         '<p>', 'WELCOME TO THE CITY OF LIGHT' , '</p>'
//        )
// }


// Q2
// var gender = prompt('Enter ur gender')
// if(gender == 'male'){
//     document.write( 'Good morning sir' )
// }
// else if(gender=='female'){
//     document.write('<p>', "Good morning ma'am" , '</p>')
// }
// else {
//     document.write('<p>', "you gay?" , '</p>')
// }


// Q3
// var color = prompt('Enter color')
// if(color == 'red'){
//     document.write( 'Must Stop ' )
// }
// else if(color=='green'){
//     document.write('<p>', "Move now " , '</p>')
// }
// else if(color=='yellow'){
//     document.write('<p>', "ready to move" , '</p>')
// }
// else {
//     document.write('<p>', "this color is not in the input" , '</p>')
// }
 


// Q4
// var fuel = prompt('Enter color')
// if(fuel <= '0.25'){
//     document.write( 'Please refill the fuel in your car' )
// }
// else{
//     document.write('<p>', " Your goood to go " , '</p>')
// }

// Q5

// a       true 
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }




// b     false
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); } 




// c     

// false

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 

// true

// if (c === 13){                         
// alert("condition 2 is true"); 
// } 

// false

// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 

// true

// if(c === 14){ 
// alert("condition 4 is true"); 
// } 



// d    true
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); 
// } 



// e   true
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }
    


// f   true
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }




// Q6
// var grade = +prompt("enter ur marks");
// var percentage = ((grade / 300)* 100)+ '%';

// if( 240 <= grade ){
//     document.write('<p>', " Total marks : 300"  , '</p>')
//     document.write('<p>', " Marks obtain :  "  , grade , '</p>')
//     document.write('<p>', " Percentage : " , percentage , '</p>')
//     document.write('<p>', " Grade : A-one"  , '</p>')
//     document.write('<p>', " Remark : Keep it up" , '</p>')
// }
// else if( 210 <= grade ){
//     document.write('<p>', " Total marks : 300"  , '</p>')
//     document.write('<p>', " Marks obtain :  "  , grade , '</p>')
//     document.write('<p>', " Percentage : " , percentage , '</p>')
//     document.write('<p>', " Grade : A"  , '</p>')
//     document.write('<p>', " Remark : good" , '</p>')
// }
// else if( 180 <= grade ){
//     document.write('<p>', " Total marks : 300"  , '</p>')
//     document.write('<p>', " Marks obtain :  "  , grade , '</p>')
//     document.write('<p>', " Percentage : " , percentage , '</p>')
//     document.write('<p>', " Grade : B"  , '</p>')
//     document.write('<p>', " Remark : need impovment" , '</p>')
// }
// else if( 180 > grade ){
//     document.write('<p>', " Total marks : 300"  , '</p>')
//     document.write('<p>', " Marks obtain :  "  , grade , '</p>')
//     document.write('<p>', " Percentage : " , percentage , '</p>')
//     document.write('<p>', " Grade : F "  , '</p>')
//     document.write('<p>', " Remark : Better luck next time" , '</p>')
// }
// else{
//     document.write('<p>', " Enter number pls"  , '</p>')

// }


// Q7
// var userNumber = +prompt('Enter number')
// if( userNumber == 7){
//     document.write( "Bingo! Correct answer" )
// }
// else if(userNumber<7){
//     document.write('<p>', " Maybe its higher number " , '</p>')
// }
// else if(userNumber >7){
//     document.write('<p>', " Maybe its lower number" , '</p>')
// }
// else {
//     document.write('<p>', "bruh what r u even doin" , '</p>')
// }


// Q8
// var userNumber = +prompt('Enter number')
// var numberDivisualBy3 = userNumber % 3
// console.log(numberDivisualBy3)
// if( 0 == numberDivisualBy3){
//     document.write( "your number is divisible by 3" )
// }
// else{
//     document.write( "your number is not divisible by 3" )
// }

// Q9
// var userNumber = +prompt('Enter number')
// var numberDivisualBy3 = userNumber % 2
// console.log(numberDivisualBy3)
// if( 0 == numberDivisualBy3){
//     document.write( "your number is even" )
// }
// else{
//     document.write( "your number is odd" )
// }


// Q10
// var userNumber = +prompt('Enter number')
// if( userNumber >= 40){
//     document.write( "You live on sun" )
// }
// else if( userNumber >= 30){
//     document.write('<p>',  "It is too hot outside", '</p>' )
// }
// else if(userNumber>=20){
//     document.write('<p>', " The Weather today is Normal " , '</p>')
// }
// else if(userNumber >=10){
//     document.write('<p>', " Today’s Weather is cool" , '</p>')
// }
// else if (userNumber>=0 ){
//     document.write('<p>', "OMG! Today’s weather is so Cool" , '</p>')
// }
// else{
//     document.write('<p>', "You dont live on earth" , '</p>')
// }

// Q11
// var firstNumber = +prompt('Enter first number')
// var secondNumber = +prompt('Enter second number')
// var sign = prompt('Enter + , - , / , %')
// if(sign == "+" ){
//     document.write('<p>',  firstNumber + secondNumber ,  '</p>' )
// }
// else if(sign == "-" ){
//     document.write('<p>',  firstNumber - secondNumber ,  '</p>' )
// }
// else if(sign == "/" ){
//     document.write('<p>',  firstNumber / secondNumber ,  '</p>' )
// }
// else if(sign == "%" ){
//     document.write('<p>',  firstNumber % secondNumber ,  '</p>' )
// }
// else{
//     document.write('<p>',  "not a number" ,  '</p>' )
// }




// chapter 12-13



//  Q2
//  var integer1 = +prompt(' Enter integer one')
//  var integer2 = +prompt(' Enter integer two')
//  if(integer1 == integer2){
//     document.write('<p>',  'The integers are equal' ,  '</p>' )

//  }
// else{
//     if(integer1>integer2){
//         document.write('<p>',  'The integers one is larger' ,  '</p>' )

//     }
//     else{
//         document.write('<p>',  'The integers two is larger' ,  '</p>' )

//     }
// }


// Q3
// var userNumber = +prompt('Enter number')
// if(userNumber == 0 ){
//     document.write('<p>', " Number is zero " , '</p>')
// }
// else if( userNumber > 0){
//     document.write('<p>', "Number is positive" , '</p>' )
// }
// else if( userNumber < 0){
//     document.write('<p>',  "Number is negetive", '</p>' )
// }
// else if(userNumber= 0 ){
//     document.write('<p>', " Number is zero " , '</p>')
// }

// else{
//     document.write('<p>', "enter number only" , '</p>')
// }


// Q4
// var userLetter = prompt('Enter letter')
// if(userLetter === "a"){
//     document.write('<p>', " true " , '</p>')
// }
// else if(userLetter === "e"){
//     document.write('<p>', " true " , '</p>')
// }
// else if(userLetter === "i"){
//     document.write('<p>', " true " , '</p>')
// }
// else if(userLetter === "o"){
//     document.write('<p>', " true " , '</p>')
// }
// else if(userLetter === "u"){
//     document.write('<p>', " true " , '</p>')
// }
// else{
//     document.write('<p>', "false" , '</p>')
// }

// Q5
// var creatPassword = prompt("Create a password")
// var passsword = prompt('Enter Your password')

// if(creatPassword===passsword){
//     document.write('<p>', 'Correct! The password you entered matches the original password', '</p>')

// }
// else if(creatPassword!=passsword){
//     document.write('<p>', 'Incorroct Password', '</p>')

// }
// else{
//     document.write('<p>', "Enter passwoed", '</p>')

// }

// Q6
// var hour = 13;
// if (hour < 18) {
// document.write('<p>',  "Good day", '</p>')
// }
// else{
// document.write('<p>',  "Good evening", '</p>')
// }

// Q7
// var time = +prompt('enter time')
// if(time > 1200){
//     document.write('<p>', (time - 1200)/100 , "pm", '</p>')

// }

// else if(time <= 1200){
//     document.write('<p>', time / 100, "am", '</p>')

// }
// else{
//     document.write('<p>',  "Please emter eath's time only", '</p>')

// }

