// console.log('testing')

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_string_two = dog_string.toLowerCase();
let dog_names = ["Max","HAS","PuRple","dog"];
const dog_names_two = dog_names.map(dog_names => dog_names.toLowerCase());

const findWords = (dog_string_two, dog_names_two) => {
    for (let i of dog_names_two){
        if (dog_string_two.includes(i)){
            console.log(`Matched ${i}`)
        } else {
            console.log('No Match')
        }
    }
}

findWords(dog_string_two, dog_names_two)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
`        `
function replaceEvens(arr){
    for (i in arr){
        if (i % 2 == 0){
            arr.splice(i, 1,'even_index')
        }
     } return arr
}


console.log(replaceEvens(arr))



//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Code Wars Problems
// 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function is_number(n){
    if (n % 2 ==0){
        return "Even"
    } else{
        return "Odd"
    }
};

console.log(is_number(9))


//2. Very simple, given an integer or a floating-point number, find its opposite.

function opposite(n){
    return (n * -1)
}

console.log(opposite(-10))