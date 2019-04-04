//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var objects = [];
    for (var key in object) {
        objects.push(object[key]);
    }
    return objects;
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    /*
    input: [object] data - any object]
    output: [String] - keys seperated with a space
    constructs: (methods, funcions, iteration, conditionals)
    - Object.keys(data);
    - arr.join(" ");
    
    */
    var keysArr = Object.keys(data);
    return keysArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    /*
    input: [object] data - any object]
    output: [String] - keys seperated with a space
    constructs: (methods, funcions, iteration, conditionals)
    - if ()
    - Object.keys(data);
    - arr.join(" ");
    edge case:
    - only String values should be included
    
    */
    var arr = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }
    return arr.join(" ");
   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection === "object") {
        if (Array.isArray(collection)) {
            return "array";
        } 
        return "object";
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstLetter = string.charAt(0).toUpperCase();
    for (var i =1; i < string.length; i++) {
        firstLetter += string[i];
    }
    return firstLetter;
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i]=capitalizeWord(arr[i]);
    }
    return arr.join(" ");
    
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var string = "";
    for (var key in object) {
        string += capitalizeWord(object[key]);
    }
    return "Welcome " + string + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    name = object.name;
    species = object.species;
    return capitalizeWord(name) + " is a " + capitalizeWord(species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (noises) {
        let sounds = noises.join(" ");
        return sounds;
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
IOCE = input, outputs, constructs, edge-cases
@param string [String] - a string of words
@ parem word [String] - a word

@return [Boolean] - true if word is in string
    false otherwise

*/

function hasWord(string, word) {
    const words = string.split(" ");
    for (var i =0; i < words.length; i++) {
        if (words[i]==word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty("friends")) {
        var friends = object.friends;
        for (var i =0; i < friends.length; i++) {
            if (friends[i]===name) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonfriends = [];
    for (var i =0; i < array.length; i++) {
        for (var j =0; j < array; )
        if (array[i].friends!==name) {
            nonfriends.push(array[i]);
        }
    }
    return nonfriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i =0; i< array.length; i++) {
        for (var property in object) {
            if (property===array[i]) {
                delete object[property];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var arr = [];
    for (var i =0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
    
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}