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
/*=========================================
    FILE UPLOAD
=========================================*/

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

uploadBtn.addEventListener("click", () => {

    fileInput.click();

});

fileInput.addEventListener("change", () => {

    fileList.innerHTML = "";

    const files = fileInput.files;

    if(files.length === 0){

        fileList.innerHTML = "<p>No files uploaded.</p>";

        return;

    }

    Array.from(files).forEach(file => {

        const div = document.createElement("div");

        div.className = "file-item";

        div.innerHTML = `
            📄 ${file.name}<br>
            <small>${(file.size/1024).toFixed(2)} KB</small>
        `;

        fileList.appendChild(div);

    });

});
/*=========================================
    VOICE RECORDER
=========================================*/

let recorder;
let audioChunks = [];

const startBtn = document.getElementById("startRecord");
const stopBtn = document.getElementById("stopRecord");
const player = document.getElementById("audioPlayer");

startBtn.addEventListener("click", async () => {

    const stream = await navigator.mediaDevices.getUserMedia({

        audio:true

    });

    recorder = new MediaRecorder(stream);

    audioChunks = [];

    recorder.ondataavailable = e => {

        audioChunks.push(e.data);

    };

    recorder.onstop = () => {

        const blob = new Blob(audioChunks,{

            type:"audio/webm"

        });

        player.src = URL.createObjectURL(blob);

    };

    recorder.start();

    showToast("Recording Started");

});

stopBtn.addEventListener("click",()=>{

    recorder.stop();

    showToast("Recording Saved");

});
