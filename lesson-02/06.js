let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
 let copyPassportWithAddress = {...passportWithAddress};
 copyPassportWithAddress.address.city = "Bobryisk";
 console.log(copyPassportWithAddress.address.city);