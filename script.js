const semSelect = document.getElementById("sem");
const cycleSelect = document.getElementById("cycle");
const sem1EcycleDiv = document.getElementById("sem1-Ecycle");
const sem1PcycleDiv = document.getElementById("sem1-Pcycle");
const sem2EcycleDiv = document.getElementById("sem2-Ecycle");
const sem2PcycleDiv = document.getElementById("sem2-Pcycle");
const sem3_cyberLawAndEthics = document.getElementById("sem3-cyberLawAndEthics");
const caution_div = document.querySelector(".caution")

        // <!-- 1 st sem E cycle -->

function display_1_sem_Ecycle() {
    const semValue = semSelect.value;
    const cycleValue = cycleSelect.value;
    if (semValue === "1" && cycleValue === "E") {
        sem1EcycleDiv.style.display = "block";
    } else {
        sem1EcycleDiv.style.display = "none";
    }
}
// Attach event listeners to both selects
semSelect.addEventListener("change", display_1_sem_Ecycle);
cycleSelect.addEventListener("change", display_1_sem_Ecycle);


            // <!-- 1 st sem P cycle  -->

function display_1_sem_Pcycle() {
    const semValue = semSelect.value;
    const cycleValue = cycleSelect.value;
    if (semValue === "1" && cycleValue === "P") {
        sem1PcycleDiv.style.display = "block";
    } else {
        sem1PcycleDiv.style.display = "none";
    }
}
// Attach event listeners to both selects
semSelect.addEventListener("change", display_1_sem_Pcycle);
cycleSelect.addEventListener("change", display_1_sem_Pcycle);


        // <!-- 2nd sem E cycle -->
function display_2_sem_Ecycle() {
    const semValue = semSelect.value;
    const cycleValue = cycleSelect.value;
    if (semValue=='2' && cycleValue=='E'){
        sem2EcycleDiv.style.display='block';
    } else {
        sem2EcycleDiv.style.display="none";
    }
}

semSelect.addEventListener("change" , display_2_sem_Ecycle)
cycleSelect.addEventListener("change",display_2_sem_Ecycle)


//   <!-- 2ND SEM Pcycle  -->
function display_2_sem_Pcycle() {
    const semValue = semSelect.value;
    const cycleValue = cycleSelect.value;
    if (semValue === "2" && cycleValue === "P") {
        sem2PcycleDiv.style.display = "block";
    } else {
        sem2PcycleDiv.style.display = "none";
    }
}
// Attach event listeners to both selects
semSelect.addEventListener("change", display_2_sem_Pcycle);
cycleSelect.addEventListener("change", display_2_sem_Pcycle);




// -------3rd sem Cyber law and ethics------------


function display_3_sem_cyberLawEthics() {
    const semValue = semSelect.value;
    const cycleValue = cycleSelect.value;
    if (semValue === "3" && cycleValue === "cyberLawEthics") {
        sem3_cyberLawAndEthics.style.display = "block";
    } else {
        sem3_cyberLawAndEthics.style.display = "none";
    }
}
// Attach event listeners to both selects
semSelect.addEventListener("change", display_3_sem_cyberLawEthics);
cycleSelect.addEventListener("change", display_3_sem_cyberLawEthics);




    // --------Account----------

const close_btn = document.querySelector(".close-btn")
const follow_btn = document.querySelector(".btn-signIn")
const account_section = document.querySelector(".Accounts")
const github_btn = document.querySelector(".github")
const linkedin_btn = document.querySelector(".linkedin")
const youtube_btn = document.querySelector(".youtube")
const instagram_btn = document.querySelector(".instagram")
const Follow_us_btn = document.querySelector(".Follow-us")
const Accounts_hr = document.querySelector(".hr")
const Accounts_hr1 = document.querySelector(".hr1")
const Accounts_hr2 = document.querySelector(".hr2")
const enquiry_pre = document.querySelector(".enquary")


function enable_account_screen(){
    account_section.style.display="block";
    close_btn.style.position="relative"
    close_btn.style.left="87%"
    github_btn.style.position="relative"
    github_btn.style.left="10%"
    linkedin_btn.style.position="relative"
    linkedin_btn.style.left="10%"
    youtube_btn.style.position="relative"
    youtube_btn.style.left="10%"
    instagram_btn.style.position="relative"
    instagram_btn.style.left="10%"
    Follow_us_btn.style.position="relative"
    Follow_us_btn.style.left="30%"
    Accounts_hr.style.position="relative"
    Accounts_hr.style.left="10%"
    Accounts_hr1.style.position="relative"
    Accounts_hr1.style.left="10%"
    Accounts_hr2.style.position="relative"
    Accounts_hr2.style.left="10%"
    enquiry_pre.style.position="relative"
    enquiry_pre.style.left="7%"
}
follow_btn.addEventListener("click",enable_account_screen)

function disable_account_screen(){
        account_section.style.display = "none";
    }
close_btn.addEventListener("click",disable_account_screen)

function display_caution(){
    if(semSelect.value!=null || cycleSelect.value!=null){
        caution_div.style.display="none";
    }
    if(semSelect.value=="Select" || cycleSelect.value=="Select") {
        caution_div.style.display="block";
    }
}
semSelect.addEventListener("change", display_caution);
cycleSelect.addEventListener("change", display_caution);

