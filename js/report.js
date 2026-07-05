/*=========================================
    FLAMES REPORT AI
    REPORT STUDIO
=========================================*/

const titleInput = document.querySelector(".title");
const blocks = document.querySelectorAll(".block");
const preview = document.querySelector(".paper");

const aiInput = document.getElementById("aiPrompt");
const aiButton = document.getElementById("sendPrompt");

const generateButton =
document.querySelector(".generate-btn");

/*=========================================
    TOAST
=========================================*/

const toast = document.getElementById("toast");

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

/*=========================================
    UPDATE LIVE PREVIEW
=========================================*/

function updatePreview(){

    let html = "";

    html += `<h2>${titleInput.value || "Untitled Report"}</h2>`;

    blocks.forEach(block=>{

        html += block.innerHTML;

    });

    preview.innerHTML = html;

}

/*=========================================
    TITLE
=========================================*/

titleInput.addEventListener("input",updatePreview);

/*=========================================
    BLOCKS
=========================================*/

blocks.forEach(block=>{

    block.addEventListener("input",updatePreview);

});

/*=========================================
    GENERATE BUTTON
=========================================*/

generateButton.addEventListener("click",()=>{

    showToast("AI generation will be connected soon.");

});

/*=========================================
    AI COMMAND
=========================================*/

aiButton.addEventListener("click",()=>{

    const prompt = aiInput.value.trim();

    if(prompt===""){

        showToast("Please enter an AI instruction.");
        return;

    }

    showToast("Prompt received.");

    aiInput.value="";

});

/*=========================================
    AUTO SAVE
=========================================*/

function autoSave(){

    const report={

        title:titleInput.value,

        content:document.querySelector(".document").innerHTML

    };

    localStorage.setItem(

        "flames-report",

        JSON.stringify(report)

    );

}

/*=========================================
    LOAD REPORT
=========================================*/

function loadReport(){

    const saved=

    localStorage.getItem("flames-report");

    if(!saved) return;

    const report=

    JSON.parse(saved);

    titleInput.value=report.title;

    document.querySelector(".document").innerHTML=

    report.content;

    updatePreview();

}

setInterval(autoSave,3000);

loadReport();

updatePreview();
const saveStatus =
document.querySelector(".save-status");

function autoSave(){

    const report={

        title:titleInput.value,

        content:document.querySelector(".document").innerHTML

    };

    localStorage.setItem(

        "flames-report",

        JSON.stringify(report)

    );

    saveStatus.textContent="Saved";

      }
