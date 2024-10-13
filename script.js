const arr = [
    {
        q: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        r: "c"
    },
    {
        q: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        r: "b"
    },
    {
        q: "What is the chemical symbol for water?",
        a: "O2",
        b: "H2O",
        c: "CO2",
        d: "NaCl",
        r: "b"
    },
    {
        q: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        r: "c"
    }
];


    var i=0;
    var score=0;
    function loadQuestion()
    {
    document.getElementById("question").innerHTML=arr[i].q;
    document.getElementById("aAns").innerHTML=arr[i].a;
    document.getElementById("bAns").innerHTML=arr[i].b;
    document.getElementById("cAns").innerHTML=arr[i].c;
    document.getElementById("dAns").innerHTML=arr[i].d;
    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    }
    function submit()
    {
    var isSelected=false;
    if(document.getElementById("a").checked) isSelected=true;
    if(document.getElementById("b").checked) isSelected=true;
    if(document.getElementById("c").checked) isSelected=true;
    if(document.getElementById("d").checked) isSelected=true;
    
    if(!isSelected)
    {
    alert("please select");
    return;
    }
    if(document.getElementById(arr[i].r).checked)
    {
    score++;
    }
    i++;
    if(i<arr.length)
    {
    loadQuestion();
    }
    else
    {
    alert("QUIZZ COMPLETED");
    }
    }
    function showScore()
    {
    var msg="YOU'RE SCORE IS:  "+score;
    alert(msg);
    }
    function reset()
    {
        let ask=confirm("DO YOU WANT TO RESET THE PAGE?")
        if (ask)
        {
            location.reload()
            alert("QUIZZ HAS BEEN SUCCESSFULLY RESET")
        }
        

    }
    loadQuestion();