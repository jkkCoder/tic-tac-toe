    let p1 = document.getElementById("p1");
    let s1 = document.getElementById("s1");
    let p2 = document.getElementById("p2");
    let s2 = document.getElementById("s2");

    p1.innerText = sessionStorage.getItem("name1");
    p2.innerText = sessionStorage.getItem("name2");
    s1.innerText = sessionStorage.getItem("score1");
    s2.innerText = sessionStorage.getItem("score2");

    //audios
    let audio1=document.getElementById("kick");
    let audio2=document.getElementById("openhat");
    let audio3=document.getElementById("snare");

    let arr = [];         //to store the clicked buttons in array
    let turn = 1;        // first turn will be of player 1 always
    let turns = document.getElementById("turns");       //turns is the name of the player at their turn;
    let win = document.getElementById("win");
    let p = document.getElementById("won");
    let ok = document.getElementById("ok");
    turns.innerText = `${sessionStorage.getItem("name1")}'s turn :x`;
    let btn = document.querySelectorAll("table button");

    function clicked(num) {
        // console.log(num);
        let flag = 0;

        //if button is already clicked then don't add it again to an array.
        arr.forEach(element => {
            if (element == num) {
                flag = 1;
            }
        })
        if (flag == 1)         //button is already clicked so do nothing
        {
            flag = 0;
        }
        else {               //button freshly clicked .
            if(win.style.display!="block"){      //someone has won that's why the display is block.. so no use clicking on buttons
            // console.log(win.style.display);
            arr.push(parseInt(num));        //storing the number as int and not as string
            let buttonClicked = document.getElementById(`${num}`);
            // console.log(buttonClicked);
            if (turn == 1) {
                buttonClicked.innerText = "x";
                turn = 2;
                turns.innerText = `${sessionStorage.getItem("name2")}'s turn :o`;
                //playing the music
                audio1.play();
                //change color of button
                btn.forEach(element => {
                    element.style.backgroundColor = "lightpink";
                })
            }
            else if (turn == 2) {
                buttonClicked.innerText = "o";
                turn = 1;
                turns.innerText = `${sessionStorage.getItem("name1")}'s turn :x`;
                //playing the music
                audio3.play();
                //change color button
                btn.forEach(element => {
                    element.style.backgroundColor = "lightblue";
                })
            }

            //check if any of them have won 
            check();
        }
        }
        // console.log(arr);
    }
    function check() {
        let winningPlayer = "";
        let score1 = sessionStorage.getItem("score1");
        let score2 = sessionStorage.getItem("score2");
        let name1=sessionStorage.getItem("name1");
        let name2=sessionStorage.getItem("name2");
        score1=parseInt(score1);
        score2=parseInt(score2);
        // console.log(score1,score2);
        // if x has won 
        if (btn[0].innerText == 'x' && btn[1].innerText == 'x' && btn[2].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[3].innerText == 'x' && btn[4].innerText == 'x' && btn[5].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[6].innerText == 'x' && btn[7].innerText == 'x' && btn[8].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[0].innerText == 'x' && btn[3].innerText == 'x' && btn[6].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[1].innerText == 'x' && btn[4].innerText == 'x' && btn[7].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[2].innerText == 'x' && btn[5].innerText == 'x' && btn[8].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[0].innerText == 'x' && btn[4].innerText == 'x' && btn[8].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");
        else if (btn[6].innerText == 'x' && btn[4].innerText == 'x' && btn[2].innerText == 'x')
            winningPlayer = sessionStorage.getItem("name1");

        // if y has won 
        if (btn[0].innerText == 'o' && btn[1].innerText == 'o' && btn[2].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[3].innerText == 'o' && btn[4].innerText == 'o' && btn[5].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[6].innerText == 'o' && btn[7].innerText == 'o' && btn[8].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[0].innerText == 'o' && btn[3].innerText == 'o' && btn[6].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[1].innerText == 'o' && btn[4].innerText == 'o' && btn[7].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[2].innerText == 'o' && btn[5].innerText == 'o' && btn[8].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[0].innerText == 'o' && btn[4].innerText == 'o' && btn[8].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");
        else if (btn[6].innerText == 'o' && btn[4].innerText == 'o' && btn[2].innerText == 'o')
            winningPlayer = sessionStorage.getItem("name2");

        if (arr.length == 9) {
            p.innerText = "DRAW MATCH, Click OK to continue";
            win.style.display = "block";
            audio2.play();
            ok.addEventListener("click", () => {
                win.style.display = "none";
                reset();
            })
        }

        if (winningPlayer != "")      //that means someone has won
        {
            //increase the score
            if(winningPlayer == name1)
            {
                score1++;
                sessionStorage.setItem("score1",`${score1}`);
                s1.innerText = sessionStorage.getItem("score1");
            }
            else{
                score2++;
                sessionStorage.setItem("score2",`${score2}`);
                s2.innerText = sessionStorage.getItem("score2");
            }
            //play the music
            audio2.play();
            p.innerText = `${winningPlayer} has won this match, Click OK to continue`;
            win.style.display = "block";
            winningPlayer = "";
            ok.addEventListener("click", () => {
                win.style.display = "none";
                reset();
            })
        }

    }

    let res = document.getElementById("res");
    res.addEventListener("click", reset);


    function reset() {
        if(win.style.display=="block")      //if user clicks on reset while win display is on .. then turn it off
        {
            win.style.display="none";
        }
        btn.forEach(element => {
            element.innerText = "";
        })
        arr = [];     //make array of clicked button as null;
        turn = 1;     //make turn to player 1;
        turns.innerText = `${sessionStorage.getItem("name1")}'s turn :x`;

        //change color button
        btn.forEach(element => {
            element.style.backgroundColor = "lightblue";
        })
    }
