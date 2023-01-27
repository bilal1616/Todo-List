
function getNote (note){
    var note = document.querySelector("#" + note).value;
    return note
}


const getComponent = (data) => {
    var componentTitle = "<h4>"+ data.titleNote +"</h4>"
    var componentDate = "<p>" + data.dateNote + "</p>"
    var componentTime = "<p>" + data.timeNote + "</p>"
    var componentNote = "<p>" + data.wrotenNote + "</p>"

    return componentTitle + componentDate + componentTime + componentNote
}


async function saveNote (noteView, popUp) {
    var noteData = clickSave()
    var listView = document.querySelector("#" + noteView);
    var listItem = `<li style="background-color:${noteData.bgColor}">` +getComponent(noteData)+ "</li>"
    var popUpComponent = document.querySelector("#" + popUp)
    listView.innerHTML += listItem  
    var eachLine = document.getElementsByTagName("li");
    for (var i = 0; i < eachLine.length; i++) {
         eachLine[i].classList.add("note-line")
    }
    $(".note-line").click(function() {
        $(this).css("background-color","red")
    })
    popUpComponent.style.display = "none"
    
}


const openNote = (className) => {
    var keepClassDOM = document.querySelectorAll("." + className);
    return keepClassDOM
}



const clickSave = () => {
    var noteDate = document.querySelector("#noteDay-input").value;
    var noteTime = document.querySelector("#noteTime-input").value;
    var noteTitle = document.querySelector("#slefNoteTitle").value;
    var selfNote = document.querySelector("#selfNoteArea").value;
    var noteBg = document.querySelector("#noteBgColor").value;
    const dataSet = {
        dateNote : noteDate,
        timeNote : noteTime,
        titleNote : noteTitle,
        wrotenNote : selfNote,
        bgColor : noteBg
    }
    return dataSet
}

const createNote = (id) => {
    var noteWindow = document.querySelector("#" + id);
    noteWindow.style.display = "block"
}




// function openNoteWindow(){
//     const noteLine = document.getElementsByClassName("note-line");
//     for (let item of noteLine){
//         console.log(item.innerHTML)
//     }
// }

// var takeDOM = document.getElementById("list-field");
// takeDOM.addEventListener("click",openNoteWindow)


