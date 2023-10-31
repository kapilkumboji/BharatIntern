document.querySelector(".btn").addEventListener("click",function(e){
    e.preventDefault();

    console.log(document.querySelector("input").value);
    const temp=parseInt(document.querySelector("input").value);

    const faf=temp*(9/5)+32;
    const k=temp+273.15;
   
    document.querySelector(".faf").innerHTML=faf+" °F";
    document.querySelector(".k").innerHTML=k+" K";
})
