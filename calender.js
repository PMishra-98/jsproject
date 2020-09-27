var dt = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
var month='';
var str ='';
function show(){
 
    
dt.setDate(1);
var day = dt.getDay();

 var endDate = new Date(
     dt.getFullYear(),
     dt.getMonth() + 1,
     0
 ).getDate();
  month=document.getElementById('year').innerHTML =months[dt.getMonth()]+" "+dt.getFullYear();
var k=0;
var cell="";
for(var x=day;x>0;x--){
    cell +="<div>"+' '+"</div>";
  k++;
}

for(var i=1;i<endDate+1;i++){
    cell +="<div class='cell' onclick='findDate("+i+")'>"+i+"</div>";
    k++;
}
for(var l=k;k<=42;k++){
    cell +="<div>"+' '+"</div>"; 
}

document.getElementsByClassName('day')[0].innerHTML = cell;


}
function moveDate(para){
    if(para=='prev'){
        dt.setMonth(dt.getMonth()-1);
        show();
    }
    if(para=='next'){
        dt.setMonth(dt.getMonth()+1);
        show();
    }
}
function findDate(date){
    console.log(date+" "+month);
 }