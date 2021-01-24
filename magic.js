showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    const a=new Date();
    h=(a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate())
    z=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
    showNotes(h,z);
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18vw ">
                    <div class="card-body" style="border: 3px solid brown">
                        <h5 class="card-title"><span style="color:red">𝐍𝐨𝐭𝐞<i><b> ${index + 1}</b></i></span></h5>
                        <p class="card-text"> <i><b>${element}</b></i></p>
                        <p style="text-align: right"><i><b>h</b></i></p>
                        <p style="text-align: right"><i><b>z</b></i></p>   
                        <button style="background-color:coral;color:black;border: 3px solid brown" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">𝐃𝐞𝐥𝐞𝐭𝐞 𝐧𝐨𝐭𝐞𝐬</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<span style="color:violet"><h5>𝑵𝒐𝒕𝒉𝒊𝒏𝒈 𝒕𝒐 𝒔𝒉𝒐𝒘! 𝑼𝒔𝒆 "𝑨𝒅𝒅 𝒕𝒐 𝑵𝒐𝒕𝒆" 𝒔𝒆𝒄𝒕𝒊𝒐𝒏 𝒂𝒃𝒐𝒗𝒆 𝒕𝒐  𝐲𝐨𝐮𝐫 𝐧𝐨𝐭𝐞.</h5>`;
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
