

//check the all numbers in binary code
//multiply those numbers by their respective power of 2
//add all the numbers up

function getDecimal(B, powerof2, decimal, addition){
    
    let length = B.length()
    for(let i = 0; i < length; i++){
        
        return i; 
    }

    let powerof2 = Math.pow(2, i)
    let decimal = 0
    
    let addition = length.forEach((position) => powerof2*position)

    console.log(addition +)
}

getDecimal(1011);














/* function findparking(N, today, yesterday){
    let count = 0;
    for(let i = 0; i < N; i++){
        if(yesterday[i] === 'C' && today[i] === 'C'){
            count++;
        }
    }
    return count;
}

console.log(findparking(5, "CC..C", "CCCCC")); */