var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elButton = document.querySelector(".form__button");
var elOl =document.querySelector(".ol")
var elList = []

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var elInputval = elInput.value.trim();
  
    
      elInput.value = "";

      

      


     var obect = {
         nomer: elList.length+1,
         qiymat: ". " + elInputval, 
     }

      

     elList.push(obect)

      elOl.innerHTML=""

     for(var item of elList   ) {
         
       

        var newli = document.createElement("li")
        newli.textContent= item.nomer +item.qiymat
        elOl.appendChild(newli);
        elInputval=""

     }

});


