window.addEventListener("load",()=>{
    const input=document.querySelector("#input-field");
    const colour=document.querySelector("#resColor");


    input.addEventListener("input",()=>{
        colour.style.backgroundColor= input.value;
    });

});    