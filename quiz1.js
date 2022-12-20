var pos=0,board,status,qus,choices,A,B,C,cor=0;
var questions =[
    ["4+5 = ?","5","7","9","C"],
    ["8/2 = ?","5","4","8","B"],
    ["10*5 = ?","50","7","8","A"],
    ["2*9 = ?","5","7","18","C"]
   ];
   console.log(questions)
   function DisplayQuestion(){
    board=document.getElementById('board');
    if(pos>=questions.length){
        board.innerHTML="<h2>You got "+cor+" of "+questions.length+"</h2>"
        document.getElementById("status").innerHTML="Quiz Completed"
        pos=0;
        cor=0;
    
        start()
        return 'false';
    }
    document.getElementById("status").innerHTML="Question "+(pos+1)+" of "+questions.length+""
   
qus=questions[pos][0]
A=questions[pos][1]
B=questions[pos][2]
C=questions[pos][3]
board.innerHTML="<h3>"+qus+"</h3>"
board.innerHTML+="<label><input type='radio' name='choices' value= 'A'>"+A+"</label>"
board.innerHTML+="<label><input type='radio' name='choices' value= 'B'>"+B+"</label>"
board.innerHTML+="<label><input type='radio' name='choices' value= 'C'>"+C+"</label>"
board.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>"}


function checkAnswer()
  {
    var choice;
    choices=document.getElementsByName("choices")
    for(var i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice=choices[i].value;
           
        }

    }
    console.log(choice)
    if(choice==questions[pos][4]){
    cor++;
    }
    console.log(choices.length)  
pos++;
DisplayQuestion()

}
