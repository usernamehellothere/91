question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = docuemnt.getElementById("input_check_box").value;
    if (get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +5;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else
        {
            player2_socre = player2_score +5;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if(question_turn ==  "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;


    }
    else
    {
        quesiton_turn = "player1"
        document.getElementById("p.ayer_question"),innerHTML = "Question Turn - " + player1_name ; 
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer"),innerHTML = "Answer Turn - " + player2_name ; 
    }
     else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;

    }
    
    document.getElementById("output").innerHTML = "";
}
