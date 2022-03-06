window.addEventListener("load",()=>{
    const input=document.querySelector("#input-field");
    const count=document.querySelector("#cntr");


    input.addEventListener("input",(event)=>{
        count.innerText=event.target.value.length;
    });

});

    
    
    