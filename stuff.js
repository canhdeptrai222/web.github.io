function age(){
    let x = document.getElementById("age").value;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    var age = currentYear - x;
    var name = document.getElementById("name");
    document.getElementById("ten").innerHTML = "Chào bạn " + name.value + '!';
    document.getElementById("tuoi").innerHTML = "Tuổi của bạn là: " + age;
}
function calculate(){
    var a = Number(document.getElementById('num1').value) ;
    var b = Number(document.getElementById('num2').value);
    var operation = document.querySelector('input[name="operation"]:checked').value;
    //var operation = document.getElementById('input[name="operation"]:checked').value;
    let result;
    switch (operation) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result   = a / b;
        break; 
  
    }
   document.getElementById("result").value = result;
}

function calPhuongTrinhBac2(){
   var a = Number(document.getElementById('varA').value);
   var b = Number(document.getElementById('varB').value);
   var c = Number(document.getElementById('varC').value);
   if(a != 0){
       var delta = b*b - 4*a*c;
       if(delta < 0){
        
       }
       else if(delta == 0){
        var x1 = -b/(2*a);
        console.log(x1);
       }
       else{
        var x1 = (-b / Math.sqrt(delta)) / (2* a);
        var x2 = (b / Math.sqrt(delta)) / (2* a);
       console.log(x1);
       console.log(x2);
       }
   }
}

// function writeLog(){
//     var mystring = '';
//     for(var i of arguments){
//         mystring += i + ' - ';
//     }
//     console.log(mystring);
// }
// writeLog('log 1', 'log 2', 'log 3');

// var name2 = 'sername';
// var inFor = {
//     name: 'canh',
//     age: 19,
//     address: 'tphcm',
//     [name2]: 'huynh',
//     getName: function(){
//         return this.name;
//     }
// };

// inFor.email = 'huynhthecanhpvh@gmail.com'
// inFor['mat khau'] = 'canhdepchai2'
// var myName = 'name'
// delete inFor.age
// console.log(inFor.getName());

