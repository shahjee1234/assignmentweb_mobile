//CHAPTER # 01 [ALERTS]

//QUES 1

//alert('Welcome to our website!!!');

//QUES 2

//alert('Error! Please enter a valid password.');

//QUES 3

//alert('Welcome to JS land...\nHappy Coding!')

//QUES 4

//alert('Welcome to JS land...');
//alert('Happy Coding!');


//QUES 5

//alert('Hello...I can run JS through my web browser console');


//CHAPTER # 02  [VARIABLES FOR STRINGS]

//QUES 1


//let username;

//QUES 2

//let myName=prompt("Enter Your Name;");
//alert(myName);
//document.write(myName);

//QUES 3

//let message="Hello World"
//alert(message);

//QUES 4

// let stdName = prompt("Enter your Name:");
// alert(stdName);
// let stdAge = prompt("Enter your age");
// alert(stdAge);
// let stdCourse = prompt("Enter Your Course Name");
// alert(stdCourse);

//QUES 5

//alert("                                                      PIZZA\n                                                      PIZZ\n                                                      PIZ\n                                                      PI\n                                                      P");

//QUES 6

//let email=prompt("Enter your email");
//alert('My Email address is ' + email);

//QUES 7

// let book =  "A smarter way to learn JavaScript."
// alert('I am trying to learn from the Book '+book);

//QUES 8

//document.write("Yah! I can write HTML content through JavaScript");

//QUES 9

// let designPattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designPattern);

//CHAPTER # 03 [VARIABLES FOR NUMBERS ]

//QUES 1

// let age = 20;
// alert('I am '+age+' years old');

//QUES 2

// let visitors = 13;
// alert('You have visited this site '+visitors+' times');

//QUES 3

// let birthYear = "My birth year is 1999";
// document.write(birthYear);
// let doc = 'Data type of my declared variable is number';
// document.write(doc);

//QUES 4


// let visitorName = "John Doe";
// let order = "5 T-Shirt(s)";
// let website = "XYZ Clothing store";
// document.write(visitorName + ' ordered '+order+' on '+website);


//CHAPTER # 04 [VARIABLE NAMES: LEGAL & ILLEGAL ]


//QUES 1

// let variable1 = "Hello World!",
//     variable2 = "Testing...",
//     variable3 = 52;


//QUES 2

// Legal Variable

// let a="abc";
// let b="123";
// let c="_ddd";
// let d="a_s";
// let e="a-s";

// Illegal Variable

// let f="!";
// let g="@";
// let h="123qws";
// let i="^";
// let j="&";

//QUES 4

//document.write(<h1>"Rules for naming JS variables"</h1>);

//CHAPTER # 05 [MATH EXPRESSIONS]

//QUES 1

// let a = 3;
// let b = 5;
// let c = a+b;
// document.write('Sum of 3 and 5 is ' +c);

//QUES 2

// let a = 5;
// let b = 3;
// let c = a - b;
// let d = a * b;
// let e = a % b;
// document.write('Subtraction :'+c);
// document.write('<br>Multiplication :'+d);
// document.write('<br>Modulus :'+e);

//QUES 3

// let a = "Value after variable declaration is undefined";
// let ini = 5;
// let inc =++int;
// let addVar = 7;
// let afterAdd = addVar + inc;
// let decVar = --afterAdd;
// let rem = decVar % 3;

// document.write(a);
// document.write('<br>Initial Value :'+ini);
// document.write('<br>Value after increment is :'+inc);
// document.write('<br>Value after addition is :'+addVar);
// document.write('<br>Value after decrement is :'+decVar);
// document.write('<br>The remainder is :'+rem);


//QUES 4


// let ticket = 600;
// let moreTicket = ticket * 5;
// document.write('Total cost to buy 5 tickets to a movie is '+moreTicket+ 'PKR');


//QUES 5

// var rows = prompt("How many rows for your multiplication table?");
//     var cols = prompt("How many columns for your multiplication table?");
//     if(rows == "" || rows == null)
//    		 rows = 10;
//     if(cols== "" || cols== null)
//    		 cols = 10;
//     createTable(rows, cols);
//     function createTable(rows, cols)
//     {
//       var j=1;
//       var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
//       for(i=1;i<=rows;i++)
//       {
//     	output = output + "<tr>";
//         while(j<=cols)
//         {
//   		  output = output + "<td>" + i*j + "</td>";
//    		  j = j+1;
//    		}
//    		 output = output + "</tr>";
//    		 j = 1;
//     }
//     output = output + "</table>";
//     document.write(output);
//     }





//QUES 6

// let C = 25;
// let out  =  (F-32) * 5 / 9;
// let F = 70;
// let out1 =  (C * 9/5)+ 32;
// document.write('25 degree C is '+out1);
//document.write('<br> 70 degree F is '+out);


//QUES 7

// document.write("<h1>Shopping Cart </h1>");
// let a = 650;
// let b = 3;
// let c = 100;
// let d = 7;
// let e = 100;
// let f = a * b;
// let g = c * d;
// let h = f + g + e;
// document.write('Price of item 1 is '+a);
// document.write('<br>Quantity of item 1 is '+b);
// document.write('<br>Price of item 2 is '+c);
// document.write('<br> Quantity of item 2 is '+d);
// document.write('<br> Shipping charges '+e);
// document.write('<br><br>Total cost of your order is '+h);

//QUES 8

// document.write("<h1> Mark Sheet </h1>");
// let totalMarks = 980;
// let marksObt = 804;
// let percent = (marksObt/totalMarks) * 100;
// document.write('Total Marks : '+totalMarks);
// document.write('<br>Marks Obtained : '+marksObt);
// document.write('<br>Percentage : '+percent);


//QUES 9

// document.write("<h1> Currency in PKR </h1>");
// let US = 10 * 104.80;
// let S = 25 * 28;
// let sum = US + S;
// document.write('Total Currency in PKR : '+sum);


//QUES 10

// let a = 5;
// let b = a * 10;
// let c = b / 2;
// document.write('Add : '+a+'<br>Multiply : '+b+'<br>Divide : '+c);


//QUES 11



// document.write("<h1>Age Calculator</h1>");
// let current = 2017;
// let birth  = 1993;
// let age = current - birth;
// document.write('Current Year : '+current);
// document.write('<br>Birth Year : '+birth);
// document.write('<br>Your Age : '+age);

// QUES 12

// document.write("<h1>The Geometrizer</h1>");
// let r = 20;
// let circum = 2 * 3.142 * r;
// let area = 3.142 * (r*r);
// document.write('Radius of a circle : '+r);
// document.write('<br>The circumference is : '+circum);
// document.write('<br>The area is : '+area);



// QUES 13

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// let  f = "chocolate chip";
// let  a = 15;
// let  m = 100;
// let  s =  5;
// let mi = m - a;
// let fi = mi * s;
// document.write('Favourite Snack : '+f);
// document.write('<br>Current Age : '+a);
// document.write('<br>Estimated Maximum Age : '+m);
// document.write('<br>Amount of Snacks perday : '+s);
// document.write('<br>You will need '+fi+' chocolate chip to last you until the ripe old age of 100');  



//CHAPTER # 06 to 09 [MATH EXPRESSIONS ]


//QUES 1

// document.write('Result:')
// let a = 10;
// document.write('<br> The value of a is : '+a);
// document.write('<br>------------------------------');
// let b = ++a;
// let c = b;
// document.write('<br>The value of ++a is : '+b);
// document.write('<br>Now the value of a is : '+c);


// let d = a++;
// document.write('<br><br>The value of a++ is :'+d);

// let e = ++d;
// document.write('<br>Now the value of a is :'+e);

// let f = --e;

// document.write('<br><br>The value of --a is :'+f);

// document.write('<br>Now the value of a is :'+e);

// document.write('<br><br>Now the value of a-- is :'+e);

// let g = --e;
// document.write('<br>Now the value of a is :'+g);


//QUES 3

let name = prompt("Enter your Name:");
document.write(name+' Welcome to our website!!!!');









