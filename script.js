// get element into varible

let myImge = document.getElementById("slidshow");
let image = ["image/1.jpg" , "image/2.png" , "image/3.jpg" ,"image/4.jpg"];
let i = 0;

// function

function slidshow (){

        myImge.setAttribute ("src",image[i]);
        
        
        if( i == image.length -1){
            i = 0
        }else{
            i++
        }

    setTimeout(function(){
        slidshow()
    } , 2000)


}

slidshow();