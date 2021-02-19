
  
             

//creating a list of stock
let stockList = ["bread", "eggs", "flour", "bacon"];

//ask user what are they looking for prompt()

let user = prompt("What are you looking for? ");

// create a function and name it
 function stock(){
    
  // create a for loop (declare variable (i for index) use length to go through the list using the increment)
    for(var i=0; i<stockList.length; i++){
      
        if(user === stockList[i]){ //if instock - then in stock - user === stocklist[i] - will print out the actual list of names in my stock list
            console.log("We have " + stockList[i] + " in stock"); 
            break;
        }
    };

    // if user is not equal to the stocklist items then print out message
    if(user != stockList[i]){
        var answer = prompt("Item not in stock. Would you like to order the item?")    
    }; //out of stock - do they want to order

    if(answer === "yes"){
        stockList.push(user) //if yes == add to list - use stockList (push) user has stored variable for name of added item
        console.log(stockList)
    }else{
        console.log("Have a good day!") //if no == terminate program
    }
  
  }

 stock();



