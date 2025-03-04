

// for box-1
document.getElementById("complete-btn").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title1");
    }

)

document.getElementById("complete-btn").addEventListener("click",
    function(){
        alert("Board updated Successfully.");

        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }
        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)

// for box-2
document.getElementById("complete-btn2").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title2");
    }

)

document.getElementById("complete-btn2").addEventListener("click",
    function(){
        alert("Board updated Successfully.");
        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn2");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }
        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)

// for box-3
document.getElementById("complete-btn3").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title3");
    }

)

document.getElementById("complete-btn3").addEventListener("click",
    function(){
        alert("Board updated Successfully.");
        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn3");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }


        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)

// for box-4
document.getElementById("complete-btn4").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title4");
    }

)

document.getElementById("complete-btn4").addEventListener("click",
    function(){
        alert("Board updated Successfully.");
        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn4");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }


        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)

// for box-5
document.getElementById("complete-btn5").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title5");
    }

)

document.getElementById("complete-btn5").addEventListener("click",
    function(){
        alert("Board updated Successfully.");
        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn5");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }


        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)

// for box-6
document.getElementById("complete-btn6").addEventListener("click",
    function(){
        const navBarTask = countAllTask ("task-count");
        document.getElementById("task-count").innerText = navBarTask;

        const addMassage = massageAdd("box1-title6");
    }

)

document.getElementById("complete-btn6").addEventListener("click",
    function(){
        alert("Board updated Successfully.");
        // counting task assign 
        const completeTask = getcompleteId("task-assigne");
        document.getElementById("task-assigne").innerText = completeTask;
        let button = document.getElementById("complete-btn6");
        button.disabled = true;

        // FOR disabled button 
        if(button.disabled === true){
            button.style.backgroundColor = "gray";
            button.style.color = "white";
        }


        if(completeTask < 1){
            alert("Congrates!!! You have completed all the current task.")
        }
        
    }
)



// Clear history 
document.getElementById("clear-history").addEventListener("click",
    function(){
        document.getElementById("show-massage").innerText = '';
    }
)

let today = new Date();
let currentDate = today.toDateString();

document.getElementById("current-time").innerText = currentDate;


document.getElementById("discover").addEventListener("click", function(){
    window.location.href = "blogs.html";
});


document.getElementById("bg-theme").addEventListener("click", 
    function(){
        const colors = ["#35477D", "#6C5B7B", "#C06C84", "#F67280", "#56021F", "#7D1C4A", "#D17D98", "#D91656", "#640D5F" ,
            "#27445D", "#497D74", "#578FCA", "#B2A5FF", "#497D74"];
        const randomColor = colors[Math.floor(Math.random()*colors.length)];

        document.body.style.backgroundColor = randomColor;
    }
)

3