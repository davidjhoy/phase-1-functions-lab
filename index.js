function distanceFromHqInBlocks(someVal){
    return Math.abs(42-someVal);
}

function distanceFromHqInFeet(someVal){
    return distanceFromHqInBlocks(someVal)*264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264;

}

function calculatesFarePrice(start, destination){
    const thing = Math.abs(start-destination)*264;
   
    if (thing <= 400){
        return 0;
    }
    else if (thing > 400 && thing <= 2000){
        return (thing - 400) * 0.02;
    }
    else if (thing > 2000 && thing <=2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}