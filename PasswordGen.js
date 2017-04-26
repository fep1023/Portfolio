function RandomNumber(seed,type) {
    var new_seed = Math.floor(3*Math.sin(2-6*seed)-4*Math.cos(1+2*seed));
    var output = "";
    
    if (type==1) {
        return GetUC(12*Math.abs(new_seed));
    } else if (type==2) {
        return GetLC(43*Math.abs(new_seed));
    } else {
        return GetNum(35*Math.abs(new_seed));
    }
}

// Use String.fromCharCode() to get characters from integers.
// 97+ for lower case, 65+ for upper case, 48+ for numerals.

function GetUC(seedUC) {
    // 65 to 90
    var output = 65;
    seedUC = seedUC%26;
    output += seedUC;
    return String.fromCharCode(output).toString();
}

function GetLC(seedLC) {
    // 97 to 122
    var output = 97;
    seedLC = seedLC%26;
    output += seedLC;
    return String.fromCharCode(output).toString();
}

function GetNum(seedNum) {
    // 0 to 9
    var output = 48;
    seedNum = seedNum%9;
    output += seedNum;
    return String.fromCharCode(output).toString();
}

function GeneratePassword() {
    var input = document.getElementById("seed");
    var seed = Math.abs(input.value)+50;
    
    if (isNaN(seed)) {
        setTimeout(alert("Error, invalid input."),5000);
        return;
    }
    
    var password = "";
    var new_seed = 0;
    var type = 0;
    
    for (i=0;i<25;i++) {
        // Password created here
        new_seed = seed%(i+5);
        type = (type+new_seed)%3+1;
        password = password+RandomNumber(new_seed,type);
    }
    try {
    var node = password;
    document.getElementById("p").textContent = node;
    }
    catch (err) {
        alert("Error: " + err);
    }
}

document.getElementById("function").onclick = GeneratePassword;
