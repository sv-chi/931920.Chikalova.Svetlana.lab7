outp = document.querySelector("#out");

kvadr =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*120+10;
        kv = document.createElement("div");
        kv.classList.add("kvadr");
        kv.style.width=width + "px";
        kv.style.height=width + "px";
        SetPos(kv);
        kv.addEventListener("dblclick", del);
        kv.addEventListener("click", clik);
        outp.appendChild(kv);
    }
}

Treu =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        tr = document.createElement("div");
        tr.classList.add("treug");
        tr.style.borderLeftWidth=width + "px";
        tr.style.borderRightWidth=width + "px";
        tr.style.borderBottomWidth=width + "px";
        SetPos(tr);
        tr.addEventListener("dblclick", del);
        tr.addEventListener("click", clik);
        outp.appendChild(tr);
    }
}

Krug =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        kr = document.createElement("div");
        kr.classList.add("krug");
        kr.style.width=width + "px";
        kr.style.height=width + "px";
        kr.style.borderRadius=width/2 + "px";
        SetPos(kr);
        kr.addEventListener("dblclick", del);
        kr.addEventListener("click", clik);
        outp.appendChild(kr);
    }
}

SetPos=(fig)=>{
    top1 = Math.random()*500+10;
    left = Math.random()*1200+10;
    fig.style.left=left + "px";
    fig.style.top=top1 + "px";
}

clik=(event)=>{
    if(event.target.className=="kvadr"||event.target.className=="krug")
        event.target.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    else 
        event.target.style.borderBottomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}
del=(event)=>{
    if(event.target.className=="kvadr"||event.target.className=="treug"||event.target.className=="krug")  
        event.target.style.display = "none";
} 