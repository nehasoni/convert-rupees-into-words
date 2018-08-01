var helperHash = {};
helperHash["1"] = "One";
helperHash["2"] = "Two";
helperHash["3"] = "Three";
helperHash["4"] = "Four";
helperHash["5"] = "Five";
helperHash["6"] = "Six";
helperHash["7"] = "Seven";
helperHash["8"] = "Eight";
helperHash["9"] = "Nine";
helperHash["10"] = "Ten";
helperHash["11"] = "Eleven";
helperHash["12"] = "Twelve";
helperHash["13"] = "Thirteen";
helperHash["14"] = "Fourteen";
helperHash["15"] = "Fifteen";
helperHash["16"] = "Sixteen";
helperHash["17"] = "Seventeen";
helperHash["18"] = "Eighteen";
helperHash["19"] = "Nineteen";
helperHash["20"] = "Twenty";
helperHash["30"] = "Thirty";
helperHash["40"] = "Forty";
helperHash["50"] = "Fifty";
helperHash["60"] = "Sixty";
helperHash["70"] = "Seventy";
helperHash["80"] = "Eighty";
helperHash["90"] = "Ninety";
helperHash["100"] = "Hundered";
helperHash["1000"] = "Thousand";
helperHash["100000"] = "Lakh";
helperHash["10000000"] = "Crore";

var convertIntoWords = function(amount) {
    // Removing leading zeros
    amount = Number(amount).toString();
    var amountLength = amount.toString().length;

    if(amountLength <= 3) {
        console.log(amount, getHunderedthPlace(amount));
    }
    else if(amountLength > 3 && amountLength <=5){
        console.log(amount, getThousandthPlace(amount));
    }
    else if(amountLength > 5 && amountLength <=7){
        console.log(amount, getLakhsPlace(amount));
    }
    else if(amountLength > 7 && amountLength <=9){
        console.log(amount, getCrorePlace(amount));
    }
}

var getHunderedthPlace = function(lastThreeDigits){
    var result = "";
    if(lastThreeDigits == "000"){
        result = "";
    }
    else if(!!helperHash[lastThreeDigits]){
        result = helperHash[lastThreeDigits];
    }
    else {
        var finalArray = [];
        var firstDigit = Math.floor((lastThreeDigits % 1000)/100);
        if(firstDigit != 0){
            finalArray.push(helperHash[firstDigit]);
            finalArray.push(helperHash[100]);
        }
        var lastTwoDigits = (lastThreeDigits % 100).toString();
        if(!!helperHash[lastTwoDigits]){
            finalArray.push(helperHash[lastTwoDigits]);
        }
        else {
            var secondLastDigit = lastTwoDigits.split('')[0];
            finalArray.push(helperHash[secondLastDigit * 10]);
            finalArray.push(helperHash[lastTwoDigits.split('')[1]]);
        }
        result = finalArray.join(' ');
    }
    return result;
}

var getThousandthPlace = function(amount){
    var firstTwoDigits = Math.floor((amount % 100000)/1000).toString();
    var lastThreeDigits = (amount % 1000).toString();
    var finalArray = [];
    if(!!helperHash[firstTwoDigits]){
        finalArray.push(helperHash[firstTwoDigits]);
    }
    else {
        var secondDigit = firstTwoDigits.split('')[0];
        finalArray.push(helperHash[secondDigit * 10]);
        finalArray.push(helperHash[firstTwoDigits.split('')[1]]);
    }
    finalArray.push(helperHash[1000]);
    finalArray.push(getHunderedthPlace(lastThreeDigits));
    return finalArray.join(' ');
}

var getLakhsPlace = function(amount){
    var firstTwoDigits = Math.floor((amount % 10000000)/100000).toString();
    var thousandthPlaceDigits = (amount % 100000).toString();
    var finalArray = [];
    if(!!helperHash[firstTwoDigits]){
        finalArray.push(helperHash[firstTwoDigits]);
    }
    else {
        var secondDigit = firstTwoDigits.split('')[0];
        finalArray.push(helperHash[secondDigit * 10]);
        finalArray.push(helperHash[firstTwoDigits.split('')[1]]);
    }
    finalArray.push(helperHash[100000]);
    finalArray.push(getThousandthPlace(thousandthPlaceDigits));
    return finalArray.join(' ');
}

var getCrorePlace = function(amount){
    var firstTwoDigits = Math.floor((amount % 1000000000)/10000000).toString();
    var lakhPlaceDigits = (amount % 10000000).toString();
    var finalArray = [];
    if(!!helperHash[firstTwoDigits]){
        finalArray.push(helperHash[firstTwoDigits]);
    }
    else {
        var secondDigit = firstTwoDigits.split('')[0];
        finalArray.push(helperHash[secondDigit * 10]);
        finalArray.push(helperHash[firstTwoDigits.split('')[1]]);
    }
    finalArray.push(helperHash[10000000]);
    finalArray.push(getLakhsPlace(lakhPlaceDigits));
    return finalArray.join(' ');
}

exports.convertIntoWords = convertIntoWords;