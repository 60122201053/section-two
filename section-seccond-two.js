let  x = 8;
let y = 8;
let print = '';
for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
        if ((i + j) % 2 == 0) 
        print += '#';
        else 
        print += ' ';
    }
    print += '\n';
}
console.log(print);