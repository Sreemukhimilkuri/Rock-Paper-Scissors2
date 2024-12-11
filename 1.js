let yourscore=0;
let compscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#your-score');
const compScorePara=document.querySelector('#comp-score');
const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomval=Math.floor(Math.random()*3);
    return options[randomval];
}
const drawGame=()=>{
    msg.innerText='Game is Draw. Play again.'
    msg.style.backgroundColor='#081b31';
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        yourscore++;
        userScorePara.innerText=yourscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor='green';
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor='red';
    }
}
const playGame=(userchoice)=>{
    const compchoice  = genCompChoice();
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==='rock'){
            compchoice==='paper' ? false:true;
        }else if(userchoice==='paper'){
            userWin=compchoice==='scissors' ? false:true;
        }else{
            userWin=compchoice==='rock'? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id');
        playGame(userchoice);
    })
})