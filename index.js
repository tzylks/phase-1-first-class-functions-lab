// Code your solution in this file!
const returnFirstTwoDrivers = arrayOfDrivers => {
    const firstTwo = [arrayOfDrivers[0], arrayOfDrivers[1]];
    return firstTwo;
}

const returnLastTwoDrivers = arrayOfDrivers => {
    const lastTwo = arrayOfDrivers.slice(-2);
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return (input) => input * fare;
    }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, functionOne) {
    return functionOne(arrayOfDrivers);
}