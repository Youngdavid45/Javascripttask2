//Creating an array of object named data
data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
];

function interestCalculator(arr) {
    let interestData = [];
    let rate, interest;
    for(let obj of data) {
        if (obj.Principal >= 2500 && obj.time > 1 < 3)
            rate = 3;
        else if (obj.Principal >= 2500 && obj.time >= 3)
            rate = 4;
        else if (obj.Principal < 2500 || obj.time <= 1)
            rate = 2;
        else
            rate = 1;
    interest = (obj.Principal * rate * obj.time)/100;
    interestData.push({Principal: obj.Principal, time: obj.time, rate: rate, interest: interest})
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);