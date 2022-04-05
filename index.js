// Code your solution in this file!


function distanceTravelledInFeet(begBlock, endBlock) {
    return begBlock >= endBlock ? (begBlock - endBlock) * 264 : (endBlock - begBlock) * 264

}

function distanceFromHqInBlocks(destBlock){
    return distanceTravelledInFeet(42, destBlock) / 264
}

function distanceFromHqInFeet(destBlock) {
    return distanceFromHqInBlocks(destBlock) * 264
}


function calculatesFarePrice(start, destination) { 

    const distance = distanceTravelledInFeet(start, destination)

    switch(true){
        case distance <= 400: return 0;
        case distance > 400 && distance <= 2000: return (distance - 400) * 0.02;
        case distance > 2000 && distance <=2500: return 25;
        case distance > 2500: return 'cannot travel that far'
    }
    
}
