function generator(paswordLenght) {
    let pasword = '';
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    // const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';   //доробити у випадку додаткового символа
    let allChars = numberChars + upperChars + lowerChars;
    for (let i = 0; i < paswordLenght; i++) {
        pasword += allChars.charAt(Math.random()*allChars.length)
    }
    console.log(pasword);
    return pasword
}

generator(10)


////---------------------------------------------------------
// let randoms = Math.random().toString(36).slice(-10);
// console.log(randoms);