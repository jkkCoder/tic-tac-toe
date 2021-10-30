let name1=document.getElementById("player1");
    let name2=document.getElementById("player2");
    let btn = document.getElementById("btn");
    sessionStorage.setItem("score1","0");
    sessionStorage.setItem("score2","0");
    //if name is not stored;
    sessionStorage.setItem("name1","player1");
    sessionStorage.setItem("name2","player2");
    //storing the names in session storage
    name1.addEventListener("blur",()=>{
        sessionStorage.setItem("name1",name1.value);
        //if name field is null;
        if(name1.value=="")
        {
            sessionStorage.setItem("name1","player1");
        }
    })
    name2.addEventListener("blur",()=>{
        sessionStorage.setItem("name2",name2.value);
        //if name field is null;
        if(name2.value=="")
        {
            sessionStorage.setItem("name2","player2");
        }
    })