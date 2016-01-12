function objectValues(obj) {
    var values = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
    }
    return values;
}
function keysToString(obj) {
    var keys = Object.keys(obj);
    return keys.join(' ');
}

function valuesToString(obj) {
    var values = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
    }
    return values.join(' ');
}

function arrayOrObject(data) {
    if (Array.isArray(data)) {
        return 'array';
    } else if (typeof data === 'object' && data !== null) {
        return 'object'
    }
}

function capitalizeWord(str) {
    var string = str.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
}

function capitalizeAllWords(str) {
    var toCap = str.split(' ');
    for (var i = 0; i < toCap.length; i++) {
        toCap[i] = toCap[i].charAt(0).toUpperCase() + toCap[i].slice(1);
    }
    return toCap.join(' ');
}

function welcomeMessage(obj) {
    return "Welcome " + obj.name[0].toUpperCase() + obj.name.slice(1) + '!'; 
} 

function profileInfo(obj) {
    return obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + ' is a ' + obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
}

function maybeNoises(obj) {
    if (Array.isArray(obj.noises) && obj.noises.length < 1) {
        return 'there are no noises';
    } else if (Array.isArray(obj.noises) && obj.noises.length > 0) {
        return obj.noises.join(' ');
    } else {
        return 'there are no noises';
    }
} 

function hasWord(str, target) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i] === target) {
            return true;
        }
    }
    return false;
} 

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    var friends = obj.friends;
    if (Array.isArray(friends)) {
        for (var i = 0; i < friends.length; i++) {
            if (name === friends[i]) {
                return true;
            }
        }
    }
    return false;
}

function nonFriends2(name, people) {
    var notFriends = [];
    var names = [];
  //console.log(names);
    for (var i = 0; i < people.length; i++) {
      console.log(people[i].name);
      names.push(people[i].name);
    }
  //console.log(names);
    for (var j = 0; j < people.length; j++) {
      if (name === people[j].name) {
        var friends = people[j].friends;
        if (friends.length < 1) {
          names.splice(names.indexOf(name),1);
          return names;
        } else {
          for (var k = 0; k < names.length; k++) {
            //console.log(names);
            for (var l = 0; l < friends.length; l++) {
              //console.log(friends);
              if (friends.indexOf(names[k]) === -1 && notFriends.indexOf(names[k]) === -1) {
                notFriends.push(names[k]);
              }
            }
          }
        }
      }
    }
  notFriends.splice(notFriends.indexOf(name),1);
  return notFriends;    
} 

function nonFriends(name, data){
    var names = [];
    var notFriends = [];
    for(var i=0; i < data.length; i ++){ 
        names.push(data[i].name)
    } 
    
    for(var i=0; i < data.length; i ++){ 
        if(data[i].name === name){
            var friends = data[i].friends
            for(var j =0; j < names.length; j++){
                if(friends.indexOf(names[j]) === -1 && names[j] !== name){
                    notFriends.push(names[j]);
                }
            }
        }
    } 
    return notFriends;
}

function updateObject(obj, key, val) {
    for (var prop in obj) {
        if (prop !== key) {
            obj[key] = val;
        }
    }
    return obj;
} 


function removeProperties(obj, arr) {
  for (var key in obj) {
    for (var i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        delete obj[key];
      }
    }
   }
   return obj;
} 

function dedup(arr) {
    var uniques = [];
      for (var i = 0; i < arr.length; i++) {
         if (uniques.indexOf(arr[i]) === -1) {
            uniques.push(arr[i]); 
         } else {
           if (uniques.length < 1) {
             uniques.push(arr[i]);
           }
         }
      }
  return uniques;
}