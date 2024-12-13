//  Write  a program to check whether a number is plaindrome or not?
let num=121,rev=0,onum=num;
while(num>0){
   let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}

if(onum === rev){
    console.log("Palindrome Number");
}else{
    console.log("Not a Palindrome Number"); 
}


// Write a program to  find numbers which are multiples of  both 5 and 25 between 1000 and 1500

for(i=1000;i<=1500;i++){
    if(i%5==0 && i%25 ==0){
        console.log(i);
    }
}

// Find the sum of even numbers within a range.
let sum=0;
for (i=1;i<=50;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(`Sum of Even Numbers = ${sum}`);


// Find the Factorial of a Number

let n=5,fact=1;
for (i=n;i>0;i--){
    fact=fact*i;
}
console.log(fact);

// Write a program which prints the multiples of 3 in between 0-100
for (i=0;i<=100;i++){
    if(i%3==0){
        console.log(`${i} is multiple of 3`);
    }
}

// Calculate the sum of numbers from 1 to 10 using a loop
let sumof=0;
for(i=1;i<=10;i++){
    sumof=sumof+i;
}
console.log(`Sum of numbers is ${sumof}`);


//Write a program to print first 10 fibnocci numbers

let n1=0,n2=1;
console.log(n1);
console.log(n2);
for(i=3;i<=10;i++){
    let next=n1+n2;
    console.log(next);
    n1=n2;
    n2=next
}


// Display multiplication table of 8 using JS. ( 8*1=8 to 8*10=80)

let table=8;
for(i=1;i<=10;i++){
        console.log(`${i} * ${table} = ${i*table}`);
}

// Find the sum of even numbers from 200 to 500.
let sumofnum=0;
for (i=200;i<=500;i+=2){
        sumofnum=sumofnum+i;
}

console.log(`Sum of even numbers b/w 200 and 500 = ${sumofnum}`);

// Print Odd Numbers between 1 and 50
for (i=1;i<50;i+=2){
    console.log(`Odd numbers is ${i}`);
}

// Write a JavaScript program that prints all the even numbers from 1 to 100 using looping statement
for (i=2;i<=100;i+=2){
    console.log(`Even numbers is ${i}`);
}



// create an object in JavaScript using two arrays, where the first array contains 5 keys (e.g., 'name', 'age', etc.) and the second array contains 5 corresponding values (e.g., 'Sahad', '24', etc.), by iterating through the arrays with a for loop
let keys = ['name', 'age', 'city', 'profession', 'hobby'];
let values = ['Yazar', 26, 'TVM', 'Developer', 'Reading'];
let obj = {}; 
for(i=0;i<keys.length;i++){
    obj[keys[i]]=values[i];
}

console.log(obj);

// Print prime numbers between 1 and 100
for(i=1;i<=100;i++){
    let count=0;
    for(j=1;j<=i;j++){
        if(i%j==0){
            count=count+1;
        }
    }
    if(count==2){
        console.log(`${i} is prime number`);
        
    }
}

