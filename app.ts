
// ---->List of loop programming exercises

// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop



// var num:number=1
// while (num <=  50) {    
//     console.log(num++);    
// }


// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop




// var n:number = 50;

// while (n > 0 ){
//     console.log("All natrual number are",n--)    

// }


// 3. Write a ts program to print all alphabets from a to z. - using while loop


// var i:number = 65;

// while( i >= 65 && i <= 90){
// console.log(String.fromCharCode(i));
//         i++;

// }


// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop


// var firstNumber:number = 0

// while(firstNumber < 100){

//         console.log(firstNumber = firstNumber + 2);

// }

// 5. Write a ts program to print all odd number between 1 to 100.


// var firstNumber:number = 1

// while(firstNumber < 100){

//         console.log(firstNumber = firstNumber + 2);

// }

// for(var i = 1; i < 10 ; i= i +2){
//     console.log(i);

// }

// 6. Write a ts program to find sum of all natural numbers between 1 to n.

// var num:number = 1

// var sum:number = 0

// while(num <= 20){
//     console.log(num);
//     sum = sum + num;
//     num = num + 1;

// }
// console.log(sum);

// var count:number = 0;
// for(var i =1 ; i <= 20; i++)
// {
//     console.log(i);
//     count += i;

// }
// console.log(count);


// 7. Write a ts program to find sum of all even numbers between 1 to n.



// var count:number = 0;

// for(var i = 0; i < 10 ; i = i +2){
//     console.log(i);

//     count +=i;

// }

// console.log(count);


// 8. Write a ts program to find sum of all odd numbers between 1 to n.



// var count:number = 0;

// for(var i = 1; i < 20 ; i = i +2){
//     console.log(i);

//     count +=i;

// }

// console.log(count);


// 9. Write a ts program to print multiplication table of any number.


// for( var i =1; i <= 10;i++){
//     console.log('2 * ' + i + ' = ' + 2 * i);

//     // console.log('2*${i}=${2*i}');

// }


// 10. Write a ts program to count number of digits in a number.



// function digits_count( n:number, count:number = 0) {
//          if (n >= 1){
//          count++;
// }

//     while (n / 10 >= 1) {
//       n /= 10;
//       count++;
//     }

//     return count++;
//   }

//   console.log(digits_count(1215612));



// var num:number = 5678;

// console.log(num.toString().length);




// 11. Write a ts program to find first and last digit of a number.
// var num:number=92517

// console.log(num%10);

// while( num  > 10){

//       num /= 10;
// }
// console.log(Math.floor(num)); 


// 12. Write a ts program to find sum of first and last digit of a number.

// var num:number=92512

// var last=(num%10);

// while( num  > 10){

//       num /= 10;
// }
// var  first=Math.floor(num)
// var sum=first+last
// console.log(sum);


// 13. Write a ts program to swap first and last digits of a number.


// //===============>> 14. Write a ts program to calculate sum of digits of a number.

// var num:number = 6779;
// var sum:number = 0;

// while(num >= 1){
//       sum = sum +Math.floor(num % 10)
//       num = (num / 10)

// }

// console.log(sum);


////===============>> 15. Write a ts program to calculate product of digits of a number.



// var num:number = parseFloat(prompt("enter"))


// var num:number = 45

// var multiplication:number = 1

// while(num >= 1){
//       multiplication *= Math.floor(num % 10)
//       num /= 10;
// }

// console.log(multiplication);

// //===============>> 16. Write a ts program to enter a number and print its reverse.



// var num:string = "12345";

// var reverse:string = num.split("").reverse().join("");
// console.log(reverse);


// //===============>> 17. Write a ts program to check whether a number is palindrome or not.


// var num:number = 1111;
// var num1:string = num.toString();
// var num2:string = num1.split("").reverse().join("");

// if(num1 == num2){
//       console.log("Number will be Palindrome");

// }else{
//       console.log("Number will Not Be Palindrome");

// }



// //===============>> 18. Write a ts program to find frequency of each digit in a given integer.

// function  printNumber(num:number) {

//     var count = new Uint8Array(10);

//     	// counting frequency of the digits

//     while (num) {
// 	 count	[num % 10]++;
// 		num = Math.floor(num / 10);
// 	}

//     // printing the new number
// 	for (var i = 1; i < 10; i++) {
// 		for (var j = 0; j < count[i] * i; j++)

//         console.log(i);
//     }

// }

// printNumber(45)






// //===============>> 20. Write a ts program to print all ASCII character with their values.


// var i:number = 1;

// while(i >= 1 && i <= 128){

//     var character:String = (String.fromCharCode(i));
//     console.log(i++,character);


// }



// //===============>> 21. Write a ts program to find power of a number using for loop.


// var num: number = 3;
// var expent:number = 5;

// for(var i = 0; i <= num; i++){
//     var numq = (num ** expent);


// }
// console.log(`${num}  ^  ${expent}` ," = ",`${numq}`);




// //===============>> 22. Write a ts program to find all factors of a number.


// var inputNum:number = 24;

// for( var i = 1; i <= inputNum; i++){
//     if(inputNum % i == 0)
//     console.log(i); 
// }


// //===============>> 23. Write a ts program to calculate factorial of a number.



// var f:number = 1;
// var num:number = 7;
// for( var c = 1; c <= num ; c++)
// {

//     f = f * c;


// }
// console.log("Factorial of " ,num, " is " , f);


// //===============>> 24. Write a ts program to find HCF (GCD) of two numbers.


// var num1:number = 18;
// var num2:number = 16;

// var count:number = 1;

// var gcd:number=0;

// while(count <= num1 && count <= num2 ){
//     if(num1 % count == 0 && num2 % count == 0){
//         gcd = count;
//     }
//     count++;
// }
// console.log(` GCD or HCF of ${num1} and  ${num2}  is `,gcd);



////===============>> 25. Write a ts program to find LCM of two numbers.



// var num1:number = 18;
// var num2:number = 16;

// var fact:number = 1;

// var lcm:number = 0;

// lcm = (num1 > num2 ) ? num1 : num2;

// while(fact ){
//     if(lcm % num1 == 0 && lcm % num2 == 0){
//         console.log(` LCM of ${num1} and  ${num2}  is `,lcm);
//         fact= 0;

//     }
//     lcm++;
// }





////===============>> 26. Write a ts program to check whether a number is Prime number or not.




// //===============>>27. Write a ts program to print all Prime numbers between 1 to n.




// for (let j = 1; j < 20; j++) {



//     let isPrime = 1

//     // let num = prompt("Enter number")
//     let num = j;

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = 0
//         }

//     }
//     if (isPrime) {
//         console.log(j);

//     }

// }


////===============>> 28. Write a ts program to find sum of all prime numbers between 1 to n.

// var sum = 0;
// for (let j = 1; j <=10; j++) {

//     let isPrime = true
//     let num = j;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = false

//         }

//     }
//     if(isPrime){
//         // console.log(j);
//         sum = sum +j;

//     }

// }

// console.log(sum);



////===============>> 29. Write a ts program to find all prime factors of a number.

// var inputNum: number = 20;
// for (let i = 2; i < inputNum; i++) {
//     if (inputNum % i == 0) {

//         var prime = true
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 prime = false
//             }

//         }

//         if (prime) {
//             console.log(i);
//         }

//     }
// }

//===============>>30. Write a ts program to check whether a number is Armstrong number or not.


// var num:number = 371;
// var n:number = num;
// var sum:number = 0;
// var r:number;
// while(n != 0){
//     r = n % 10;
//     sum = sum + (r * r * r);
//     n = Math.floor(n / 10);
    
// }
// console.log(sum);
// if(sum == num){
//     console.log(num, "is an ArmStrong ");
    
// }else{
//     console.log(num, "NOT an ArmStrong ");

// }


//===============>>31. Write a ts program to print all Armstrong numbers between 1 to n.



// var numInput:number = 500;
// for( let i =1 ; i <= numInput; i++){
//    var  n = i;

    
//     var num:number = n;
//     var sum:number = 0;
//     var r:number;
//     while(n != 0){
//         r = num % 10;
//         sum = sum + (r * r * r);
//         num = Math.floor(num / 10);
//         var result = sum;
//     }
//     if(n==sum){

//         console.log(sum);
//     }
    
// }