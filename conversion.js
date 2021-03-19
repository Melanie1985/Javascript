//Program to convert fahrenheit into celsius
function fToC(F) 
{
  var F = fahrenheit;
//   conversion to convert F to C
  var fToCel = (F - 32) * 5 / 9;
  var output = F+ 'F is equal to ' +  fToCel + 'C.';
    console.log(output);
} 
// Calling my functions
cToF(150);
fToC(75);