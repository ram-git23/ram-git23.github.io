const st = (ch) => {
    if (ch == 'r' || ch == 1) {
      return 'Rock';
    } else if (ch == 'p' || ch == 2) {
      return 'Paper';
    } else if (ch == 's' || ch == 3) {
      return 'Scissor';
    }
  }
  const prec = (opr) =>{
    if (opr.localeCompare("Rock") == 0) {
      return 1;
    } else if (opr.localeCompare("Paper") == 0) {
      return 2;
    } else {
      return 3;
    }
  }
  const update = (usr, opp) => {
    let result = "";
    u = prec(usr);
    o = prec(opp)
    if (u == o) {
      result = "DRAW";
    } else if (u == 1 && o == 3 || u == 2 && o == 1 || u == 3 && o == 2) {
      result = "YOU WIN";
    } else {
      result = "OPPONENT WINS";
    }
    document.querySelector(".res").innerHTML = result;
  
  }
  document.addEventListener('keydown', (event) => {
    let k = event.key;
    if (k == 'r' || k == 'p' || k == 's') {
      document.getElementById("user").innerHTML = st(k);
      let op = (Math.floor(Math.random() * 3) + 1);
      document.getElementById("opponent").innerHTML = st(op);
      update(st(k), st(op));
    } else {
      document.getElementById("user").innerHTML = 'INVALID';
      document.getElementById("opponent").innerHTML = "";
      document.querySelector(".res").innerHTML = "";
    }
  }, false);
  
  
  
  
  
  
  
  // while(true){
  // addEventListener('keyup',)
  // }
  
  