var product;

var request = new XMLHttpRequest();

request.open("get", 'puroduct.json');

request.responseType = 'json';

request.onreadystatechange = function () {
    if (request.status == 200) {
        product = request.response;
        console.log(product)

        initialize();
    }
    else {
        console.log('错误' + request.status + ': ' + request.statusText)
    };
}
request.send();
function initialize() {}