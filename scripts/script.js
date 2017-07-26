console.log("script.js has been sourced");

//[ name, favorite animal ]
var people =[
    {
        name : 'Canin',
        favoriteAnimal : 'Uniflitten'
    },
    {
        name :'Charly', 
        favoriteAnimal :'Angler Fish'
    },
    {
        name: 'Bobby', 
        favoriteAnimal: 'Liger'
    },
    {
        name:'Luke', 
        favoriteAnimal: 'Killer Whale'
    },
];
//console.log(people);
//what to console out persons favorite animal
// for (var i = 0; i < people.length; i++) {
//     console.log(people[i][0]+'s favorite animal is '+ people[i][1]);
    
// }
function nameAnimal(arr){
for (var j = 0; j < arr.length; j++) {
    var sentenceBuilder = arr[j];
    console.log(sentenceBuilder.name+'\'s favorite animal is the '+ sentenceBuilder.favoriteAnimal);
}
}
nameAnimal(people);
