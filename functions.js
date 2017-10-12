function multiply(a, b) {
    if (typeof a !== 'number') {
        return false;
    }
    return a * b;
}

function returnChar (obj) {
    if (typeof obj !== 'object' || obj.content.indexOf(obj.char) === -1) {
        return false;
    } else {
        return obj.content.indexOf(obj.char)
    }
}


function makeOlder(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    for (person in obj) {
        age = parseInt(obj[person].Age);
        age += 5;
        obj[person].Age = age.toString();
    }
    return obj;
}


module.exports = {
    makeOlder, 
    returnChar, 
    multiply
}