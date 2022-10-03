// time
// choose future or past
// future -- met someone or try something
// past -- see a dino or caveman

let userAnswer = prompt("Which superpower would you choose time manipulation or teleportation. Type time or teleport");

if(userAnswer.toLowerCase() === "time")
{
    alert("You choose time manipulation.");
    alert("what a cool choice.");

    let userAnswer2 = prompt("Do you want to go the past or future? Type past or future.");

    if(userAnswer2.toLowerCase() === "past")
    {
        alert("You going to " + userAnswer2.toLowerCase() + " wondering how things look before... interesting.");

        let userAnswer3 = prompt("Do you want to see Roman Empire or a historical event? Type empire or event.");
         
        if(userAnswer3.toLowerCase() === "empire")
        {
            alert("Have fun exploring the Roman Empire and see some coliseum events. Goodbye.");
        }

        else if(userAnswer3.toLowerCase() === "event")
        {
            alert("I hope that event is better than depicted in the history books and it's quite insightful. Goodbye.");
        }   
    }

    else if(userAnswer2.toLowerCase() === "future")
    {
        alert("You going to " + userAnswer2.toLowerCase() + " lets see what you will find.");
        
        let userAnswer4 = prompt("Do you want to meet a person of history or save someone? Type person or save");

        if(userAnswer4.toLowerCase() === "person")
        {
            alert("Prepare your questions please you may learn something from this person. Goodbye.");
        }

        else if(userAnswer4.toLowerCase() === "save")
        {
            alert("How will you save them and what will you be saving them from?");
        }
    }
}

else if(userAnswer.toLowerCase() === "teleport") 
{
    alert("You choose teleportation");
    alert("what an awesome choice");

    let userAnswer5 = prompt("Do want to teleportation to a vacation spot or what any stranger is doing now? Type vacation or stranger.");

    if(userAnswer5.toLowerCase() === "vacation")
    {
        alert("You going on " + userAnswer5.toLowerCase() + " so pack your luggage.");

        let userAnswer6 = prompt("Do you want a tour of the vacation spot or do activities? Type tour or activities.");

        if(userAnswer6.toLowerCase() === "tour")
        {
            alert("Pack binoculars, camcorder, and a brochure. Enjoy your vacation.");
        }

        else if(userAnswer6.toLowerCase() === "activities")
        {
            alert("Oh what activities will you do I hope there cool. Enjoy your vacation.");
        }
    }

    else if(userAnswer5.toLowerCase() === "stranger")
    {
        alert("You going to have an eye opening event.");

        let userAnswer7 = prompt("Do you want talk to them or spy? Type talk or spy.");

        if(userAnswer7.toLowerCase() === "talk")
        {
            alert("Was the conversation interesting or not. Could you relate to them or learn from them. I hope you gain something from this.");
        }
        
        else if(userAnswer7.toLowerCase() === "spy")
        {
            alert("Do you think your life is different from other people or more or less the same. Eye opening right?");
        }
    }
}
