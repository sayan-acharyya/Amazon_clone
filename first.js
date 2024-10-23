 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let newGameBtn=document.querySelector("#new-btn");
 let msgContainer=document.querySelector(".wsg-container");
 let msg=document.querySelector("#msg");

 let turn_O = true;
 const winPattern=[
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
          [3,4,5],
          [6,7,8],
 ];

 const resetGame = () => {
   let turn_O = true;
   enabledboxs();
   msgContainer.classList.add("hide");
 }

  boxes.forEach((box) => {
   box.addEventListener("click",() => {
           console.log("box was clicked");
            if(turn_O){//player o turn
               box.innerText="O";
               turn_O=false;
            }else{//player x turn
               box.innerText="X";
               turn_O=true;
            }
            box.disabled=true;

              checkWinner();
            });
  });
  const disabledboxs= () =>{
   for(let box of boxes){
      box.disabled=true;
   }
  };
  const enabledboxs= () =>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
  };
 const showWinner= (wineer) =>{
     msg.innerText=  `Congratulation ,winner is ${wineer}`;
     msgContainer.classList.remove("hide");
     disabledboxs();
   };


  const checkWinner = () => {
     for( let pattern of winPattern){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val= boxes[pattern[2]].innerText;
       
      if(pos1val != "" && pos2val !="" && pos3val!=""){
         if(pos1val===pos2val && pos2val===pos3val){
            // console.log("winner",pos1val);
            showWinner(pos1val);
         }
      }
     }
  }; 

  newGameBtn.addEventListener("click",resetGame);
  resetBtn.addEventListener("click",resetGame);


   