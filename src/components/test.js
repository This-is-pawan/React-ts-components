// let passwordBox = document.getElementById("password");
// const len = 12;
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@#$%^&*()_+~!<>=-{[/|]}";

// const allChars = upperCase + lowerCase + number + symbol;
// // console.log(allChars);

// let password = "";
// function createPassword() {
//   console.log(password);
//   // if you increase the no of the value of password will increase also

//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   // console.log(password);

//   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//   password += number[Math.floor(Math.random() * number.length)];
//   password += symbol[Math.floor(Math.random() * symbol.length)];
//   // console.log(password);

//   // console.log(password.length);
//   // let i=6
//   //  while (password.length < i) {
//   // console.log(password);

//   //      password += allChars[Math.floor(Math.random() * allChars.length)];
//   // console.log(password);
//   //  }

//   // }
//   // console.log(password.length);

//   while (len > password.length) {
//     password += allChars[Math.floor(Math.random() * allChars.length)];
//     // console.log(Math.floor(Math.random() * allChars.length));

//     console.log(password);
//   }
//   // console.log(password);

//   passwordBox.value = password;
// }
// // createPassword();

// let passwords = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "F",
//   "j",
//   "e",
//   "1",
//   "#",
//   "$",
//   "!",
//   "*",
//   "2",
//   "5",
// ];
// // console.log(random);
// // const random= Math.floor(Math.random()*password.length)
// // console.log(random);
// let hex = "";
// let i = 5;


// while (hex.length < i) {
//   const random = Math.floor(Math.random() * passwords.length);
//   // console.log(random);
// =======
// createPassword();

// you should be both of them and use other logic
// let password=["A","B","C","D","F","j","e","1","#","$","!","*","2","5"];
// console.log(random);
// const random= Math.floor(Math.random()*password.length)
// console.log(random);
// let hex=''
// let i =5 ;
// while ( hex.length <= i ) {
//  const random= Math.floor(Math.random()*password.length)
//  console.log(random);
 
//  hex += password[random];

 // console.log(hex);
 
 // }
 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .card {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 10px;
    }
  </style>
  <title>Dynamic Cards</title>
</head>
<body>
  <div id="container"></div>
  <script>
    const Data = [
      { id: 1, text: 'This is a code', bgColor: 'yellow' },
      { id: 2, text: 'That is a code', bgColor: 'red' },
      { id: 3, text: 'That is a code', bgColor: 'pink' },
    ];

    const dataHTML = Data.map((item) => {
     
      return `
        <div class="card" style="background: ${item.bgColor};">
          <h2>${item.id}</h2>
          <p>${item.text}</p>
        </div>
      `;
    }).join('');

    const container = document.querySelector('#container');
    container.innerHTML = dataHTML;
  </script>
</body>
</html>


//   hex += passwords[random];

//   console.log(hex);
// }
