const a = document.getElementById('mc');
let turn = 0;

mc.addEventListener('click', e => {
  if (e.target.className = 'cells'){
   if (turn % 2 === 0){
    e.target.innerHTML = '❤';
   } else {
    e.target.innerHTML = '♡';
   }
   turn++;
   winner();
}
})
function winner(){
 const cells = document.getElementsByClassName('cells');
 const arr = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
 ];
 for (i = 0; i < arr.length; i++ ){
    if(cells[arr[i][0]].innerHTML == '❤' && cells[arr[i][1]].innerHTML == '❤' && cells[arr[i][2]].innerHTML == '❤'){
        alert(JSON.stringify('プレイヤー1が勝った'));
        
    } 
    else if(cells[arr[i][0]].innerHTML == '♡' && cells[arr[i][1]].innerHTML == '♡' && cells[arr[i][2]].innerHTML == '♡'){
        alert(JSON.stringify('プレイヤー2が勝った'));
    }
 
    }
    var container = document.getElementsByClassName('cells');
    function clickDiss() {
        cells.style.pointerEvents = 'none';
    }
    
 } 

