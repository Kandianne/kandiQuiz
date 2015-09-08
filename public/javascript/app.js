$("p").hide();
$("#submitBut").hide();
$("#getGrade").hide();
$("#nextBut").hide();
$("#testScore").hide();

var progress =-1;
var grade = 0;

var questions = [
{ 
	question: "(1) What is my full name?",
	answers: ["Candyann Pierre", "Kandi Pear",	"Kandianne Margaret Pierre", "Candy Pair"],
	correctAnswer: "Kandianne Margaret  Pierre"
},
{ 
	question: "(2) Where was I born?",
	answers: ["Los Angeles, CA", "Dominican Republic",	"Canada", "Trinidad"],
	correctAnswer: "Trinidad"
},
{ 
	question: "(3) What kind of phone do I have?",
	answers: ["iPhone 4", "Samsung Galaxy S6",	"iPhone 6", "LG G2"],
	correctAnswer: "iPhone 4"
},
{ 
	question: "(4) What is the brand of my dream car?",
	answers: ["Tesla", "Ford",	"Audi", "Mercedes"],
	correctAnswer: "Tesla"
},
{ 
	question: "(5) What type of movies do I like?",
	answers: ["Thriller", "Sci-fi",	"Scary", "All of the above"],
	correctAnswer: "All of the above"
}
];

var startQuiz = function(){
	nextQuestion();
	$("p").show();
	$("#quiz").show();
	$("#beginQuiz").hide();
	$("#submitBut").show();
};

var nextQuestion = function(){
	if(progress<questions.length-1){
		progress++;
	}else{$("#submitBut").hide(); $("p").hide(); $("h3").hide(); $("#getGrade").show();}
	$("input:radio").removeAttr("checked");
	$("#question").text(questions[progress].question);
	for(var i=0; i<=questions[progress].answers.length; i++){
		//This specifies answer in the questions array and loops through each
		$(".q"+i).val(questions[progress].answers[i]);
		//This displays the answers
		$(".label"+i).html(questions[progress].answers[i]);
	}
}




var userAnswer = [];
var submitAnswer = function(){
	var correctAnswer = $("input[name=correctAnswer]:checked").val();
	userAnswer[progress]=correctAnswer;
	$("#nextBut").show();
	nextQuestion();
}

var getGrade = function(){
	$("#getGrade").hide();
	for(var i = 0; i <questions.length; i++){
		if(questions[i].correctAnswer === userAnswer[i]){
			//This loops through the answers submitted to see if they are the correct answer
			//If they are correct, grade will be increase by 1
			grade++;

		}
	}
	$("#testScore").show();
	$("#testScore").html((grade/4) *100 + "%"
		+ "<h5>ANSWERS</h5>"
		+ "<p>1: Kandianne Margaret  Pierre</p>"
		+ "<p>2: Trinidad</p>"
		+ "<p>3: iPhone 4</p>"
		+ "<p>4: Tesla</p>"
		+ "<p>5: All of the above</p>"
		);
}


