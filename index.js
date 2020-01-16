let eachList = document.getElementsByTagName("li");
let i;
for (i = 0; i < eachList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    eachList[i].appendChild(span);
}

let remove = document.getElementsByClassName("remove");
let j;
for (j = 0; j < remove.length; j++); {
    remove[j].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("newInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('You must add something!'); 
    } else {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("newInput").value = '';
    
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);

    for (k = 0; k < remove.length; k++) {
        remove[k].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
