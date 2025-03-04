
function countAllTask (id2){
    const navTask = document.getElementById(id2).innerText;
    const convertNavTask = parseInt(navTask);

    let sum = convertNavTask + 1;

    return sum;
}

function getcompleteId(id){
    const innertext = document.getElementById(id).innerText;
    const convertInnerText = parseInt(innertext);
    let sub = convertInnerText - 1;

    return sub;
}



// for massage 
function massageAdd(id3){
    // massage section 
    const completeMssg = document.getElementById("show-massage");
    const pTag = document.createElement("p");
    pTag.classList.add("bg-blue-400","mx-3", "p-2", "border-none","rounded-lg","my-2")

    const boxTitle = document.getElementById(id3).innerText;

    // current Time set 
    let currentTime = new Date();
    let time = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    pTag.innerText = `
        You have completed ${boxTitle} at ${time}
    `;
    completeMssg.appendChild(pTag);

    
}

function dateTime(){
    let currentTime = new Date();
    let time = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    // document.getElementById("current-time").innerText = time;
    return time;

}

