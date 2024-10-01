let a = 2;
let b = 4;
let c = 6;

if (a > b){
    b = a;
}else{
    a = b;
}
if (b > c) {
    c = b;
}else{
    b = c;
}
confirm(b);