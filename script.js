
// window.onload = function(){
//     document.getElementById("btn").onclick = function(){
//         alert("hello world");
//     }
// }
// function changefont(){
//     document.getElementById("textarea").style.fontSize = "24pt";
// }

window.onload = function(){
//    document.getElementById("btn").onclick = changefont; 
    document.getElementById("bling").onchange = changecolor;
  //  document.getElementById("btn").onclick = changefontsize;
    document.getElementById("btn").onclick = changewithInterval;
    document.getElementById("btn2").onclick = changeword;
    

}
function changeword(){
    var words = document.getElementById("textarea").value;
    var w = words.split(" ");
    for(var i=0;i<w.length;i++){
        if(w[i].length >=5){
            w[i] = "Malkovitch";
         
     }
     
     document.getElementById("textarea").value =w;
    }

  //  console.log(words);

       // document.getElementById("textarea").innerText.replace = "malkovich";
    
}

function changecolor(){
    if(document.getElementById("bling").checked)
        document.getElementById("textarea").style.color = "green";
}
function changefontsize(){
   var h = parseInt(document.getElementById("textarea").style.fontSize);
   console.log(h);

   if(h){ 
    console.log(h);
      document.getElementById("textarea").style.fontSize = 2+h+"pt";
   }
    else{
        document.getElementById("textarea").style.fontSize ="14pt"; 

    }  
}
   
function changewithInterval(){
  
     setInterval(changefontsize,500);
       
   
}
  
    



