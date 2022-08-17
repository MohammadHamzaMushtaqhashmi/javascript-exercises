const repeatString = function(str, num) {
    let newstr = "";
    if(num < 0){
        return "ERROR"
    }
    if(str === "" || num === 0){
        return ""
    }
    for(let i=0; i<num; i++){
        newstr += str;
    }
    return newstr

};

// Do not edit below this line
module.exports = repeatString;
