 //Program to convert celsius into fahrenheit
//Create a function and assign parameters - different temp readings
function cToF(C) 
// any code inside the {} will be executed
{
  
//   conversion to convert C to F
   var cToFahr = C * 9 / 5 + 32;
//   console log will output the following message which will be whatever celsius value is inputted below, it will then use the conversion to print out the fahrenheit value
   var output = C+ 'C is equal to '  + cToFahr  + 'F.';
     console.log(output);
 }

 //Program to convert fahrenheit into celsius
 function fToC(F) 
 {
//   conversion to convert F to C
   var fToCel = (F - 32) * 5 / 9;
   var output = F+ 'F is equal to ' +  fToCel + 'C.';
     console.log(output);
 } 
// Calling my functions
 cToF(150);
 fToC(75);
