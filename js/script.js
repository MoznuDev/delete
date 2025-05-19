let deleteContant= document.getElementById("deleteContant");
let deleteInput = document.getElementById("deleteInput");
let deleteBtn = document.getElementById("deleteBtn");


deleteInput.addEventListener("keyup", function(){
    // console.log(deleteInput.value);
    let deleteValue =deleteInput.value
    if(deleteValue == "delete"){
       deleteBtn.removeAttribute ("disabled")  
    }
    
   else{
    deleteBtn.setAttribute("disabled", true)
   }
})



deleteBtn.addEventListener ("click", function(){
    deleteContant.style.display = "none"
    deleteInput.value = ""
})