
    let text = "1:36";
    const myArray = text.split(":");

    // 1 
    var result1 = myArray[0]
    // 36
    var result2 = myArray[1]
    //passar 36 a número
    var result4 = parseInt(result2)
    //60
    var result5 = result1*60
    //96
    var result6 = result4 + result5
    //passar 96 a string
    let text1 = result6.toString();
    let text2 = "segundos"
    //juntar "segundos" a "96"
    let result7 = text1.concat(" ", text2);
                    
    document.getElementById('demo').innerHTML = result7
                    
                    