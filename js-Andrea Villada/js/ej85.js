let n= 30;
let a= 0;
let b= -1;
let sum= 1;

do{
     a= b + sum;
     b= sum;
     sum=a;
     console.log(a);
}
while(a < n);