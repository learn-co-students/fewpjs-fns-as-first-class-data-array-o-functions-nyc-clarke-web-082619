function wakeDog(dogName, dogBreed){
    var s = `Wake ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function leashDog(dogName, dogBreed){
    var s = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return s;
}

function walkToPark(dogName, dogBreed){
    var s = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return s;
}

function throwFrisbee(dogName, dogBreed){
    var s = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return s;
}

function walkHome(dogName, dogBreed){
    var s = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return s;
}

function unleashDog(dogName, dogBreed){
    var s = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return s;
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    var arr = [];
    routine.forEach(function(entry) {
        arr.push(entry(dogName, dogBreed));
    });
    return arr;
}
