let anmation = document.querySelectorAll(".skills section.progress div span"),
    body = document.querySelector("body");

window.onscroll = function () {
    if (window.scrollY >= 700) {
        topPage.style.opacity = "1";
        topPage.style.display = "block";
    } else {
        topPage.style.opacity = "0";
        topPage.style.display = "none";
    }

    if (body.scrollWidth > 1200) {
        if (window.scrollY >= 1300) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        } 
    } else if (880 < body.scrollWidth < 1200) {
        if (window.scrollY >= 1500) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        } 
    } else if (767 < body.scrollWidth < 880) {
        if (window.scrollY >= 1800) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        }
    } else {
        anmation[0].style.animation = "progress ease-in-out 1.5s running";
        anmation[1].style.animation = "progress ease-in-out 1.5s running";
        anmation[2].style.animation = "progress ease-in-out 1.5s running";
        anmation[3].style.animation = "progress ease-in-out 1.5s running";
    }
};

let icon = document.getElementById("icon"),
    buttonScills = document.querySelector(".skills .container section.content button "),
    bottonLearnMore = document.querySelector(".landing .text button"),
    bottonDownloadResume = document.querySelector(".resume button");

icon.onclick = function () {
    icon.classList.toggle("click");
};

topPage.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

buttonScills.onclick = function () {
    open("#contact", "_self");
}

bottonLearnMore.onclick = function () {
    open("#about", "_self");
}

bottonDownloadResume.onclick = function () {
    open("https://www.linkedin.com/in/%D8%A3%D8%AD%D9%85%D8%AF-%D9%83%D9%85%D8%A7%D9%84-a458a41a2/");
}



var project_1 = document.querySelector("#project-1"),
    project_2 = document.querySelector("#project-2"),
    project_3 = document.querySelector("#project-3"),
    project_4 = document.querySelector("#project-4"),
    project_5 = document.querySelector("#project-5"),
    project_6 = document.querySelector("#project-6"),
    project_7 = document.querySelector("#project-7"),
    project_8 = document.querySelector("#project-8"),
    project_9 = document.querySelector("#project-9");    

project_1.onclick = function () {
    open("https://elmohtarif2410.github.io/My-portofolio/");
};
project_2.onclick = function () {
    open("https://elmohtarif2410.github.io/Template-One/");
};
project_3.onclick = function () {
    open("https://elmohtarif2410.github.io/templete-tow/");
};
project_4.onclick = function () {
    open("https://elmohtarif2410.github.io/todo-list/");
};
project_5.onclick = function () {
    open("https://elmohtarif2410.github.io/template-version-1/");
};
project_6.onclick = function () {
    open("https://elmohtarif2410.github.io/Slider/");
};
project_7.onclick = function () {
    open("https://elmohtarif2410.github.io/momory-game/");
};
project_8.onclick = function () {
    open("https://elmohtarif2410.github.io/Nft-prview-card/");
};
project_9.onclick = function () {
    open("https://elmohtarif2410.github.io/order-summary-card/");
};