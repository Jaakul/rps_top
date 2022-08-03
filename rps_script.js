function buttonPromptFunc(){
    
    if (confirm("are you ready to play rock paper scissors?")){
        alert('get ready to have a good time');
    }
    else {
        alert('awww, maybe next time');
    }
    }


const buttonClick = document.querySelector(".buttonPromptClass");

buttonClick.addEventListener('click',buttonPromptFunc);