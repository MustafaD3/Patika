document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.array){
        const array = JSON.parse(localStorage.array)
        for(const [index,value] of array.entries()){
            addElement(value,index)
        }
    }
})
function deleteElement(element){
    const children = [...element.parentElement.parentElement.children]
    const array = JSON.parse(localStorage.array)
    console.log(children.indexOf(element.parentElement),array[children.indexOf(element.parentElement)])
    array.splice(children.indexOf(element.parentElement),1)
    localStorage.array = JSON.stringify(array)
    element.parentElement.remove()
}

function addElement(x,index){
    const span = document.createElement("span");
    const item = document.createElement("li");

    item.textContent = x;
    item.appendChild(span);

    document.getElementById("list").appendChild(item);
    span.addEventListener("click",()=>{
        deleteElement(span)
    })
}
function newElement(){
    const input = document.getElementById("task").value.trim()
    if(input)
    {
        if(localStorage.array){
            const array = JSON.parse(localStorage.array)
            array.push(input)
            localStorage.array = JSON.stringify(array)
            addElement(input,array.length)
        }
        else
            localStorage.array = JSON.stringify([input]);
    }
    
}
