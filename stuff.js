function age() {
  let x = document.getElementById("age").value;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  var age = currentYear - x;
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("Tên chưa nhập");
    return false;
  }
  if (isNaN(x) || x == "") {
    alert("Năm sinh ko hợp lệ");
    return false;
  }
  document.getElementById("res").innerHTML = "Chào bạn " + name + "!<br> Tuổi của bạn là: " + age;
}
function calculate() {
  var a = Number(document.getElementById('num1').value);
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
      result = a / b;
      break;

  }
  document.getElementById("result").value = result;
}

function calPhuongTrinhBac2() {
  var a = Number(document.getElementById('varA').value);
  var b = Number(document.getElementById('varB').value);
  var c = Number(document.getElementById('varC').value);
  if (a != 0 || a != "" || b != "" || c != "") {
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
      document.getElementById("res").innerHTML = "Phương trình vô nghiệm!";
    }
    else if (delta == 0) {
      var x1 = -b / (2 * a);
      document.getElementById("res").innerHTML = "Phương trình có nghiệm kép <br> x1 = x2 = " + x1;
    }
    else {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("res").innerHTML = "Phương trình có 2 nghiệm phân biệt:<br> x1 = " + x1.toFixed(2) + "<br> x2 = " + x2.toFixed(2);
    }
  } else {
    alert("Chưa nhập!");
  }
}

function Tinh() {
  var a = Number(document.forms["myForm"]["num1"].value);
  var b = Number(document.forms["myForm"]["num2"].value);
  var op = document.forms["myForm"]["operation"].value;
  var kq;
  switch (op) {
    case "+":
      kq = a + b;
      break;
    case "-":
      kq = a - b;
      break;
    case "*":
      kq = a * b;
      break;
    case "/":
      if (b != 0) {
        kq = a / b;
      }
      else {
        kq = "Không thể chia cho 0";
      }
      break;
  }
  document.forms["myForm"]["kq"].value = kq;
  return false;
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

