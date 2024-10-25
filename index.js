

//get remainders 

function getBinary(D){
    let binary = 0;
    //keep dividing D by 2. and return the remainder
    while(D/2 !== 0){
        return D%2;
    }

    console.log(remainder)

    
}

console.log(getBinary("2"))









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