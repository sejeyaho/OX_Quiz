let number_id, problem_id, answer_id;
var problem_arr = ['c1.png', 'c2.png', 'c3.png',
               'c4.png', 'c5.png', 'c6.png', 'c7.png', 'c8.png', 'c9.png', 'c10.png', 'qres.png'];
var answer_arr = ['O', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'];
    
let selectAnswer, score;
let imgNum, startNum, endNum;
    
function init(){
  number_id = document.getElementById("number_id");
  problem_id = document.getElementById("problem_id");
  answer_id = document.getElementById("answer_id");
      
  startNum = 0;
  endNum = 10;
  score = 0;
      
  setProblem();
}
    
init();
    
function setProblem(){
  problem_id.innerHTML = "<img src='./img/" + problem_arr[startNum] + "' class='problem_img'>";
      
  if(startNum == endNum){
    number_id.innerHTML = "<span class='label'>결과보기</span>";
    answer_id.innerHTML = "<button type='button' class='button res' onclick='btnResFunc();'>결과보기</button><button type='button' class='button restart' onclick='history.go(0);'>다시하기</button>";
  } else {
    number_id.innerHTML = "<span class='label'> " + parseInt(startNum + 1) + " </span>";
    answer_id.innerHTML = "<button type='button' class='button o' onclick='btnOFunc();'>O</button><button type='button' class='button x' onclick='btnXFunc();'>X</button>";
  }
}
    
function btnOFunc(){
  selectAnswer = "O";
  if(answer_arr[startNum] == selectAnswer){
    score++;
  }
  startNum++;
  setProblem();
}
    
function btnXFunc(){
  selectAnswer = "X";
  if(answer_arr[startNum] == selectAnswer){
    score++;
  }
  startNum++;
  setProblem();
}
    
function btnResFunc(){
  Swal.fire({
    title: '',
    text: '',
    html: "<b>당신의 점수는 " + score + "점입니다.</b>",
    icon: 'success',
    confirmButtonColor: '#b8d7e9',
    confirmButtonText: '닫기',
    allowOutsideClick: false
  })
}