let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

 let deepcopy = JSON.parse(JSON.stringify(passportWithAddress));
 deepcopy.address.city = "Bobryisk";
 console.log(passportWithAddress.address.city);
 console.log(deepcopy.address.city);