function BMI(){
  var x=document.getElementById('height').value;
  var y=document.getElementById('bodyweight').value;
  var bmi=y/(x*x);
  alert('あなたのBMI値は' + bmi + 'です。');}
