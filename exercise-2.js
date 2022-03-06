window.addEventListener("load",()=>{
    const decBtn=document.querySelector("#dec-cntr");
    const btn=document.querySelector("#cntr");
    const incBtn=document.querySelector("#inc-cntr");

    decBtn.addEventListener("click",()=>{
        btn.value--;
    });

    incBtn.addEventListener("click",()=>{
        btn.value++;
    });
});

    
    
    