

// 33832 Parkview Ave, Los Angeles, CA 90028
// 483 Riverside Blvd, Los Angeles, CA 90028
// 99392 Main Street, Boulder, CO 60064
//

// Write a function that takes in a full string address
// Return an object with the following object schema:
//
// {
//     house_number: Number,
//     street_name: String,
//     city: String,
//     state: String (XX) 2 capital letters
//     zip: Number
// }



function getHouseNumber(address) {
    let splitAddress = address.split(',');
    return Number(splitAddress[0].split(' ')[0]);
}


function getStreetName(address) {
    let splitAddress = address.split(',');
    let houseNumber = String(getHouseNumber(address));

    return splitAddress[0]
            .split(houseNumber)[0]
            .trim();
}

function parseAddress(address) {

    let splitAddress = address.split(',');

    return {
        house_number: getHouseNumber(address),
        street_name: getStreetName(address),
        city: splitAddress[1].trim(),
        state: splitAddress[2].trim().split(' ')[0],
        zip: Number(splitAddress[2].trim().split(' ')[1])
    };

}
// 33832 Parkview Ave, Los Angeles, CA 90028
// 483 Riverside Blvd, Los Angeles, CA 90028
// 99392 Main Street, Boulder, CO 60064

// You get a large number of addresses in an array of strings.
// return only the addresses in California and have a house number
// larger than 1000

function getFilteredAddresses(array) {
    return array.filter( (item, idx) => {
        let parsed = parseAddress(item);
        return parsed.state === 'CA' && parsed.house_number > 1000;
    });
}

let myThing = false && 99;
console.log(myThing) // ''
