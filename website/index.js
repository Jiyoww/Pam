let passcode = "";

function addNumber(number){
  passcode += number;
  document.getElementById("passcodeDisplay").value = passcode;
  console.log(passcode);
}

function CI( ){
 passcode = "";
 document.getElementById("passcodeDisplay").value = '';
 console.log(passcode);
}

function checkPasscode(){
  if(passcode == 10312004){
    //document.getElementById("passcodeDisplay").value = "HINDI KASAMA YUNG YEAR";
    alert("HINDI KASAMA YUNG YEAR");
    CI();
  }
  else if(passcode == 1031){
    window.location.href = "second.html"
  }
  else{
    document.getElementById("passcodeDisplay").value = "INCORRECT PASSCODE";
    CI();
  }
}