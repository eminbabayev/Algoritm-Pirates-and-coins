
var m=Number(prompt("reqemi daxil edin"));
var number=0;//reqem
var k1=0;//say
while(m>0){var S=0;
    var n=m;

while(n>0) {
    number=n%10;
    S=S+number;
    n=parseInt( n/10);
    
}
m=m-S;
k1++;
console.log( m,S,k1);

}
console.log("Nece defe ="+k1);

