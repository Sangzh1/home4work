let ism = prompt('ismingzni krting');
let yosh = prompt('yoshngzni krtng');
let email = prompt('elektron poctangzni kiriting');
let password = prompt('pinkodni kirting');

 function validate() {
     if (!ism.value) {
let name = prompt('ismingzni krting');
alert('');  
       ism.focus();
       return false;
     }
     if (!yosh.value) {
let yosha = prompt('yoshingizni krting');
alert('');
         yosh.focus();
         return false;
     }  
 
     if (!yosh.value) {
let name = prompt('pochtangzni kiriting krting');
alert('');
         yosh.focus();
         return false;
     }  

     if (yosh.value <= 7 || yosh.value > 200 ) {
         alert('Age very small or big ');
         yosh.focus();
         return false;
     } 
     if (!email.value) {
         alert('Please enter a email');
         email.focus();  
         return false;
     }
     if (!password.value) {
         alert('Please enter a password');
         password.focus();  
         return false;
     }
     return true };