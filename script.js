function addToDo(){
    var toDoInput=document.getElementById("ToDo-input");
    var toDoText=toDoInput.value.trim();

    if (toDoText !==""){
        var li=document.createElement("li");
    li.textContent=toDoText;
    var deletebutton=document.createElement("button");
    deletebutton.textContent="Delete";
    deletebutton.classList.add("delete-btn");
    deletebutton.onclick=function(){
        li.remove();
    }
    li.appendChild(deletebutton);
    
    document.getElementById("ToDo_list").appendChild(li);
    toDoInput.value="";
    }
}