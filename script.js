let btn = document.querySelector(".btn")
let a=0;
btn.addEventListener("click",function(){
    if(a==0){

        let newDiv=document.createElement("div")
        newDiv.className="new-div"
        btn.after(newDiv)
    
        let para=document.createElement("p")
        para.textContent=`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
    
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
    
    
        newDiv.appendChild(para)
        a=1
    }
   
})