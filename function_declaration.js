function sayHello() {
    console.log('.............');
    console.log('hello');
    console.log('.............');

}
sayHello();
let a = sayHello;
a();
a();
a();




function sayHello(name) {
    console.log('.............');
    console.log('hello ' + name  + '!');
    console.log('.............');

}

sayHello('phynia');
sayHello('chi');
sayHello('nwa');

function calculateTax(amount){
    let result = amount * 0.0825;
     return result;
}

 let tax = calculateTax(100);
console.log(tax);

function calculateAreaTria(height, width){
    let output = 0.5 * height * width;
    return output
}
let area = calculateAreaTria(3, 8);
console.log(area);




