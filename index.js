let form=document.querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let h=parseInt(document.querySelector("#height").value)
    let w=parseInt(document.querySelector("#weight").value)
    let result=document.querySelector("#result");
    if(h<=0 || isNaN(h) ||h===''){
        result.innerHTML=`Invalid Height`
    }
    else if(w<=0 || isNaN(w) ||w===''){
        result.innerHTML=`Invalid Weight`
    }
    else{
        result.innerHTML=`Your BMI Is ${(w/(h*h/10000)).toFixed(2)}`
    }
})
