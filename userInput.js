let text="";
document.getElementById("yesButton").onclick =function(){
   text= document.getElementById("myTxt").value;
document.getElementById("text").innerHTML="You are almost there to purchase";

}

document.getElementById("noButton").onclick =function(){
   text= document.getElementById("myTxt").value;
document.getElementById("text").innerHTML="You are taking Bad decision";

}

document.getElementById("priceBtn").onclick =function(){
   text= document.getElementById("myTxt1").value;
document.getElementById("text1").innerHTML="This is the best price for evergreen to purchase";

}
document.getElementById("priceBtn1").onclick =function(){
   text= document.getElementById("myTxt1").value;
document.getElementById("text1").innerHTML="You will never seen this price in the world!";

}

document.getElementById("hiteshBtn").onclick =function(){
   text= document.getElementById("myTxt2").value;
document.getElementById("text2").innerHTML="Why not I always love 'Hitesh Choudary' content";

}
document.getElementById("hiteshBtn1").onclick =function(){
   text= document.getElementById("myTxt2").value;
document.getElementById("text2").innerHTML="You have no option to like his content";

}

document.getElementById("myBtn").onclick =function(){
   if(yesButton &&  priceBtn && hiteshBtn.checked){
      text= document.getElementById("myTxt3").value;
      document.getElementById("text3").innerHTML="Congratulations You are purchased Full stack Java Script course...";
   }


}
