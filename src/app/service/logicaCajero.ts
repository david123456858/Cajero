const vectorBilletes: number[] = [10000, 20000, 50000, 100000];

export const sacarVectorBillete = (valor:number)=>{
    let sumaBilletes:number[] = [0,0,0,0]

    let suma = 0
    for (let i = 0; i < vectorBilletes.length; i++) {
        
        if(i === 3 && suma < valor){
            i = 0
        }
        for (let j = i; j < vectorBilletes.length; j++) {
            if (suma + vectorBilletes[j] > valor) {
               continue
            }  
            console.log(suma,sumaBilletes[j])
            sumaBilletes[j] = sumaBilletes[j] + 1
            suma = suma + vectorBilletes[j]

            if(suma === valor) {break}
        }
    }
    
    return sumaBilletes
}

