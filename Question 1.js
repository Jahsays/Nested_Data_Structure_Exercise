1.	Given the following nested object:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
Using a for loop, console.log all of the numbers in the primeNumbers array.
Using a for loop, console.log all of the even Fibonnaci numbers.
Console.log the value "second" inside the order array.
Invoke the addSnack function and add the snack "chocolate".
Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?



var primeNumbersArray = nestedData.innerData.numberData.primeNumbers;
for(var i=0; i<primeNumbersArray.length; i++){
  console.log(primeNumbersArray[i])


var fibonacciArray = nestedData.innerData.numberData.fibonnaci;
for(var i=0; i<fibonacciArray.length;i++){
  if(fibonacciArray[i] % 2===0){
  console.log(fibonacciArray[i])
 }
} 


nestedData.innerData.order[1]

nestedData.innerData.addSnack("chocolate")


"this" refers to the global Object (not like I fully grasp)