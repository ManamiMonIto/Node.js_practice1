const url = require('url');

const myUrl = new URL ('http://mywebsite.com/hello.html?id=100$status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain) 
console.log(myUrl.host);

//Hostname dosent include port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Seriarized query
console.log(myUrl.search);

//Param object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams)

//loop through params
myUrl.searchParams.forEach((val, name) =>console.log(` ${name}:${val} `))