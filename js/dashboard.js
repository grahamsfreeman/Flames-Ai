/*=========================================
    DASHBOARD
=========================================*/

const newReportBtn = document.querySelector(".new-report");
const createFirstReportBtn = document.querySelector(".empty button");

/*=========================================
    OPEN REPORT WORKSPACE
=========================================*/

function openWorkspace(){

    window.location.href = "report.html";

}

if(newReportBtn){

    newReportBtn.addEventListener("click",openWorkspace);

}

if(createFirstReportBtn){

    createFirstReportBtn.addEventListener("click",openWorkspace);

}

/*=========================================
    SIDEBAR ACTIVE STATE
=========================================*/

const sidebarItems=document.querySelectorAll(".sidebar li");

sidebarItems.forEach(item=>{

    item.addEventListener("click",()=>{

        sidebarItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});

/*=========================================
    LOGOUT
=========================================*/

const logoutBtn=[...sidebarItems].find(item=>item.textContent.includes("Logout"));

if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{

        const confirmLogout=confirm("Are you sure you want to logout?");

        if(confirmLogout){

            window.location.href="../index.html";

        }

    });

}
