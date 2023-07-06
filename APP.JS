    var questions = [
{        
    numb: 1,
            question: 'What does HTML stand for __________________',
            answer: "Hyper Text Markup Language",
            options: [
                "Hyper Text Preprocessor",
                "Hyper Text Markup Language",
                "Hyper Text Multiple Language",
                "Hyper Tool Multi Language",
            ],
        },
        {
            numb: 2,
            question: 'What does CSS stand for?',
            answer: "Cascading Style Sheet",
            options: [
                "Common Style Sheet",
                "Colorful Style Sheet",
                "Computer Style Sheet",
                "Cascading Style Sheet",
            ],
        },
        {
            numb: 3,
            question: 'What does PHP stand for?',
            answer: "Hypertext Preprocessor",
            options: [
                "Hypertext Preprocessor",
                "Hypertext Programming",
                "Hypertext Preprogramming",
                "Hometext Preprocessor",
            ],
        },
        {
            numb: 4,
            question: 'What does SQL stand for?',
            answer: "Structured Query Language",
            options: [
                "Stylish Question Language",
                "Stylesheet Query Language",
                "Statement Question Language",
                "Structured Query Language",
            ],
        },
        {
            numb: 5,
            question: 'What does XML stand for?',
            answer: "eXtensible Markup Language",
            options: [
                "eXtensible Markup Language",
                "eXecutable Multiple Language",
                "eXTra Multi-Program Language",
                "eXamine Multiple Language",
            ],
        },
    ];    

    var displayQues= document.getElementById("displayQues");
    var currentQuesNum=document.getElementById("currentQuesNum");
    var optionsParent=document.getElementById("optionsParent");

    var indexVal=0;
    var marks=0;

    function renderQues(){
        var que = questions[indexVal];
        displayQues.innerHTML=que.question;
        totalQuesNum.innerHTML=questions.length;
        currentQuesNum.innerHTML=indexVal + 1;
optionsParent.innerHTML="";
for(var i = 0; i<que.options.length; i++) {
    optionsParent.innerHTML += `<div class ="col-md-6 my-2">
    <button onclick = checAns('${que.correctAnswer}','${que.options[i]}'
     "class= btn bg-info-subtle w-100 py-2">
    ${que.options[i]} </button>
    </div>`;

}
}

function nextQue(){
    indexVal++;
    renderQues();
}

function checAns(a, b){
    console.log(a, b);
}
