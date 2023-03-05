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
digitalRoot(16)