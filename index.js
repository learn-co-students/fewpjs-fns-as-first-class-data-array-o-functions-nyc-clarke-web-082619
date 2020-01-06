function wakeDog(dogName, dogBreed){
let str = `Wake ${dogName} the ${dogBreed}`;
console.log(str);
return str;
}

function leashDog(dogName, dogBreed){
    let str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function walkToPark(dogName, dogBreed){
    let str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function throwFrisbee(dogName, dogBreed){
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function walkHome(dogName, dogBreed){
    let str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function unleashDog(dogName, dogBreed){
    let str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dogName, dogBreed){
   return routine.map(method => method(dogName, dogBreed));
}