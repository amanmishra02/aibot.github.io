function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } 
    else if (input =="Need help?") {
        return "Which Kind of help you need?";  
    }
    else if(input == "How are you?") {
            return "Fine";
            }        
    else if(input == "I Love You"){
        return "I love you too";
    }
    
            else {
        return "Try asking something else!";
    }



       
}

