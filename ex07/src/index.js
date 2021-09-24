var collection = {
    2548: {
        album: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    2468: {
        album: '1999',
        artist: 'Prince',
        tracks: [
            '1999',
            'Little Red Corvette'
        ]
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        album: 'ABBA Gold'
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value){    

const x = object[id]
switch(prop) {
    case 'artist': if(value.length>0) {
        x[prop] = value;
    } else if(x.hasOwnProperty(prop)&&value.length<1){ delete x[prop] }; break;
    case 'album': if(x.hasOwnProperty(prop) && value.length>0) {
        x = value;
    } else if(x.hasOwnProperty(prop)&&value.length<1){ delete x[prop] }; break;
    case 'tracks': if (x.hasOwnProperty(prop) && value.length>0){
        x[prop].push(value);
    } else if (!x.hasOwnProperty(prop) && value.length>0) {
        x[prop] = [value];
    }
     
}
    return object;
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, 'tracks', "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
module.exports = updateRecords;