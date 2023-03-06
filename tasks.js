//  Descending Order
const descendingOrder = (n) => (
    Number(String(n).split('').sort((a, b) => b - a).join(''))
)

console.log(descendingOrder(Math.floor(Math.random() * 999999)))

// Digital Root
const digitalRoot = (n) => {
    while(String(n).length != 1) {
        let newArray = String(n).split('').map(Number)
        n = 0
        newArray.forEach(element => {
            n += element
        });
    }
    return n
}

console.log(digitalRoot(16))