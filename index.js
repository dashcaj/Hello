/* //get remainders 

function getBinary(D){
    let binary = 0;
    //keep dividing D by 2. and return the remainder
    while(D/2 !== 0){
        return D%2;
    }

    console.log(remainder)

    
}

console.log(getBinary("2"))
 */
/* function btd(binary){
    let decimal = 0;
    for(let i = 0; i<binary.length; i++){
        if(binary[binary.length - i - 1] === "1"){
            decimal = decimal + Math.pow(2, i);
        }
        
    }
    return decimal;
}

console.log(btd("101011")); */



function fizzbuzz(n){
    let array = []
    for(let i = 0; i <= n; i++){
        if(i%3 === 0){
            array.push("fizz")
        } 
        else if(i%5 === 0){
            array.push("buzz")
        }
        else{
            array.push(i)
        }
    };
    return array;
};

console.log(fizzbuzz(10));