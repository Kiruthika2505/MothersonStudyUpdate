const nesttype=[{
    "firstname":"Priya",
    "lastname":"Dharshini",
    "emailid":"abc@gmail.com",
    "phoneno":"9876543210",
    "password":"priya25",
    "Address":[{
        "AddressLine1":"Goldwins",
        "AddressLine2":"Hopes",
        "city":"Coimbatore",
        "state":"Tamilnadu",
        "country":"India",
        "pincode":"641001"
    }]
}]
nesttype.forEach(function(value,index){
    console.log(value.firstname);
    console.log(value.lastname);
    console.log(value.emailid);
    console.log(value.phoneno);
    console.log(value.password);
    value.Address.forEach(function(value1,index1)
    {
        console.log(value1.AddressLine1);
        console.log(value1.AddressLine2);
        console.log(value1.city);
        console.log(value1.state);
        console.log(value1.country);
        console.log(value1.pincode);
        
    })
})