let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //math.floor-random()*3; gives random values in console by calling this function between 0 and 3
};

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "grey";
};

const showwinner =(userwin, userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you won!!");
        msg.innerText = `You Won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you  lost!!");
        msg.innerText = `You Lost! computers ${compchoice} beats yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    // generate computer choice
    const compchoice = gencompchoice ();
    console.log("comp choice = ", compchoice);

    if(userchoice===compchoice){
        //Draw Game
        drawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            // scissors, paper
            userwin = compchoice === "paper" ? false: true;
        } else if(userchoice === "paper"){
            // scissors, rock
            userwin = compchoice === "scissor" ? false: true;
        } else {
             // paper, rock
             userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin, userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked!",userchoice);
        playGame (userchoice);
    });
});