window.addEventListener("load",()=>{
    const url=document.querySelector("#url-field");
    const enBtn=document.querySelector("#en-btn");
    const deBtn=document.querySelector("#de-btn");
    const res=document.querySelector("#res-field");


    enBtn.addEventListener("click",()=>{
        res.value=encodeURIComponent(url.value);
    });

    deBtn.addEventListener("click",()=>{
        res.value=decodeURIComponent(url.value);
    });
});

    
    
    