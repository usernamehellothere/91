player1_name = lacalStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

docuemnt.getElementById("player1_score").innerHTML = player1_score ;
docuemnt.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_quesiton").innerHTML = "Quesiton turn - " + player1_name ; 
document.getElementById("player_answer"),innerHTML = "Answer Turn - " + player2_name ;

function send() {
    number1 = document.getElementById("number1").ariaValueMax;
    number2 = document.getElementById("number2").ariaValueMax;
    actual_answer = parselnt(number1) * parselnt(number2);
    console.log(actual_answer);

    question_number = "<h4>" + number1 +" X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input-check-box'>";
    check_button = "<br><br><button class='btn btninfo' onclock='check()'Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    
}