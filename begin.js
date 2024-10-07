//DSA - Array
//Create own custom array
class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    shift(){
        //Brute force
        // delete this.data[0];
        // this.length--;
        // const updatedIndexObj={};
        // let counter = 0;
        // for(let item in this.data){
        //     updatedIndexObj[counter] = this.data[item];
        //     counter++;
        // }
        // this.data = updatedIndexObj;

        //Elegant
        for(let i = 0 ; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    deleteByIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[index] = this.data[i + 1];
        }
        console.log("Array two  index point to same reference"+ this.data[this.length - 1] + this.data[this.length - 2]);
        delete this.data[this.length - 1];
        this.length--;
    }
}

const MyNewArray = new MyArray();

MyNewArray.push(34);
MyNewArray.push(98);
MyNewArray.push(48);
//MyNewArray.pop();
//MyNewArray.shift();
MyNewArray.deleteByIndex(1);
//console.log(MyNewArray)

//Q.1
//Reverse the String
function reverseString(str){
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    console.log(result);

    console.log(Array.from(str).reverse().join('|'));
    
}

reverseString("Laxmikanr berde");

//Q.2
//Reverse given number 
function reverseGivenNumber(num){
   const result = num.toString(10).split('').reverse().join('');
   console.log(result);
   return result;
}

reverseGivenNumber(123);
/*NOTE
let x = new Number(500);
let y = new Number(500);
x === y // false
**************/

//Q.3
//write a function that takes and array and chunk size as input.
//the function should return a new array where original array is split into chunks of specified size

// function breakIntoChunks(arr, size){
//     const result = [];
//     let chunk = [];
//     arr.forEach(ele => {
//         if(chunk.length === size){
//             result.push(chunk);
//             chunk = [];
//         }
//         chunk.push(ele);
//     }) 
//     if(chunk.length > 0){
//         result.push(chunk);
//     }
//     console.log(result);
// }

// breakIntoChunks([11,22,33,44,55],6);

//Elegant

//splice method
//splice(fromIndex, deleteHowManyElement, insertWhichElement)

//slice
//slice(fromIndex, toIndex(Non-inclusive))

//special case
//slice() -> assume (0 , array.length)

//let names = ["Ganesh","Ravi","srikant", "teja"];
//slice(-2) -> ["srikant", "teja"]
//slice(-2, 2) -> []
//slice(-2 , 3)-> ["srikant"]

function sliceArrayInChunks(arr, chunkSize){
    let index = 0;
    let result = [];
    while(index < arr.length){
        result.push(arr.slice(index, index+ chunkSize));
        index += chunkSize;
    }
    console.log(result);
}

sliceArrayInChunks([1,2,3,4,5,6,7],2);


//Q.4
//Find index of element in array whose sum is equal to target 
function giveIndexesWhoseSumIsTargetNumber(arr, target){
    let indexArray = [];    
    arr.forEach((element, index) => {
        if(element < target){
            arr.forEach((innerElement, innerIndex)=>{
                if(innerElement <= target){
                    if(target === element + innerElement){
                       return indexArray.push([index, innerIndex]);
                    }
                }
            })
        }
    });
    
    console.log("Indexed Array ------------ ",indexArray);
}
giveIndexesWhoseSumIsTargetNumber([22,11,44,66,77], 55);


