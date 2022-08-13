/****************************************************************************
********************* Functionalty of slide to landaing *********************
****************************************************************************/
let landing = document.querySelector(".landing"),
    landingButton = document.querySelectorAll(".landing ul li");

landingButton[0].onclick = function () {
    //add and remove classes for buttons
    landingButton[0].classList.add("active");
    landingButton[1].classList.remove("active");
    landingButton[2].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-1.jpg)";
}

landingButton[1].onclick = function () {
    //add and remove classes for buttons
    landingButton[1].classList.add("active");
    landingButton[0].classList.remove("active");
    landingButton[2].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-2.png)";
}

landingButton[2].onclick = function () {
    //add and remove classes for buttons
    landingButton[2].classList.add("active");
    landingButton[0].classList.remove("active");
    landingButton[1].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-3.jpg)";
}

/************* looping clicked to buttons => 5 secound ************/
// action funcution after window on load becouse image loaded in page
window.onload = function () {

    setTimeout(function () {
        // click to button two after window on load in 5 secound
        landingButton[1].click();
        setInterval(function () {
            // click to button two every 15 seconds
            landingButton[1].click()
        }, 15000)
    }, 5000);
    
    setTimeout(function () {
        // click to button three after window on load in 10 secound
        landingButton[2].click();
        setInterval(function () {
            // click to button three every 15 seconds
            landingButton[2].click()
        }, 15000)
    }, 10000);
    
    setTimeout(function () {
        // click to button three after window on load in 15 secound
        landingButton[0].click();
        setInterval(function () {
            // click to button one every 15 seconds
            landingButton[0].click()
        }, 15000)
    }, 15000);
}


/****************************************************************************
********************* Functionalty of slide to Testmonials ******************
****************************************************************************/
let quote = document.querySelector(".testmonials blockquote"),
    nameQuote = document.querySelector(".testmonials h3"),
    testmonialsButton = document.querySelectorAll(".testmonials ul li");

testmonialsButton[0].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[0].classList.add("active");
    testmonialsButton[1].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    // change to image
    quote.textContent = "During the period that I worked with Ahmed Kamal, he was a professional and insulting person, and he had many ingredients that made him enjoy the approval and love of everyone who worked with him.";
    nameQuote.textContent = "ahmed gamal";
}

testmonialsButton[1].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[1].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    // change to image
    quote.textContent = "A person with a lot of potentials, capabilities and high capabilities, I was pleased to work with him and I hope that we will work together in many periods to come.";
    nameQuote.textContent = "mouhammad";
}

testmonialsButton[2].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[2].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[1].classList.remove("active");
    // change to image
    quote.textContent = "Professional work and excellent service. I have never in my life dealt with a person more skilled or qualified than him. I was very happy to work with him and I will not deal with anyone else but him in the upcoming projects.";
    nameQuote.textContent = "osama mouhammad"
}


/****************************************************************************
************************** functionalty of Anmition *************************
****************************************************************************/
let anmation = document.querySelectorAll(".skills section.progress div span"),
    body = document.querySelector("body");

window.onscroll = function () {
    // when scroll to window page => remove class click in icon
    icon.classList.remove("click");

    // function button scroll top page
    if (window.scrollY >= 700) {
        topPage.style.opacity = "1";
        topPage.style.display = "block";
    } else {
        topPage.style.opacity = "0";
        topPage.style.display = "none";
    }

    // Anmiation to Skills section
    let skills = document.querySelector(".skills");
        skillsHeightPage = skills.offsetTop,
        skillsHeight = skills.offsetHeight,
        windowHeight = window.innerHeight,
        windowScroll = window.scrollY;

    // if window scroll become where end section skills 
    if (windowScroll > (skillsHeightPage + skillsHeight - windowHeight)) {
        // looping to progresses anmation
        anmation.forEach(function (el) {
            // code css animation
            el.style.animation = "progress ease-in-out 1.5s running";
        })
    }
};




/****************************************************************************
********************* Functionalty for onclick buttons **********************
****************************************************************************/
let icon = document.getElementById("icon"),
    links = document.querySelectorAll("header nav ul li a"),
    logo = document.querySelector("header .logo"),
    buttonScills = document.querySelector(".skills .container section.content button "),
    bottonLearnMore = document.querySelector(".landing .text button"),
    bottonDownloadResume = document.querySelector(".resume button"),
    portfolioButtonMore = document.querySelector(".portfolio button");

// icon button menue => on click toggle class click 
icon.onclick = function () {
    icon.classList.toggle("click");
};

// when clicked to linkes menue => remove class click in icon
links.forEach(function(el) {
    el.onclick = function () {
        icon.classList.remove("click");
    }
})

// logo item to on click => #home
logo.onclick = function () {
    open("#home", "_self");
};

// top page bottun on click action
topPage.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

// send to Arbic page
languge.onclick = function () {
    open("/arabic", "_self")
}

//  bottun learn more with landing section on click action
bottonLearnMore.onclick = function () {
    open("#about", "_self");
}

//  bottun contact me with scils section on click action
buttonScills.onclick = function () {
    open("#contact", "_self");
}

//  bottun Download Resume with resume section on click action
bottonDownloadResume.onclick = function () {
    open("");
}

// bottun portfolio  more or less => action
portfolioButtonMore.onclick = function () {
    if (this.textContent === "more") {
        document.querySelector(".portfolio .projects").style.maxHeight = "unset";
        this.textContent = "less";
    } else {
        document.querySelector(".portfolio .projects").style.maxHeight = "750px";
        this.textContent = "more";
    }
}

/****************************************************************************
********************* functionalty Buttons Action Page **********************
*(************************* functionalty portflio ***************************
****************************************************************************/
// functionalty portflio category
let category = document.querySelectorAll(".portfolio ul li"),
    projectCategory = document.querySelectorAll(".portfolio .projects section .text span");

for (c = 1; c < category.length; c++) {
    category[c].onclick = function () {
        //remove class active of category
        for (i = 0; i < category.length; i++) {
            category[i].classList.remove("active");
        }
        // add class active for this category
        this.classList.add("active");

        // restet section projets
        for (p = 0; p < projectCategory.length; p++) {
            projectCategory[p].parentElement.parentElement.style.display = "block";
        }
    
        // shfile projects
        categoryName = this.textContent; // varible to content this category
        // loop delete section projects when click this category
        for (i = 0; i < projectCategory.length; i++) {
            projectCategoryName = projectCategory[i].textContent;
            if (!projectCategoryName.includes(categoryName)) {
                projectCategory[i].parentElement.parentElement.style.display = "none";
            }
        }
    }
}    
// function to click All projects
category[0].onclick = function () {
    // restet section projets
    for (p = 0; p < projectCategory.length; p++) {
        projectCategory[p].parentElement.parentElement.style.display = "block";
    }
    // remove class active of category
    for (i = 0; i < category.length; i++) {
        category[i].classList.remove("active");
    }
    // add class active for this category
    this.classList.add("active");
}

/****************************************************************************
*********************** Functionalty of contact form ************************
****************************************************************************/

// creat alert to form not work with javascript
let alert = document.createElement("span");
let alertText = document.createTextNode("sorry! The form is not work");

// add text on alert
alert.appendChild(alertText);

// style alert => css style
alert.style.cssText = `
    display: block;
    background: #cfe2ff;
    color: #084298;
    padding: 20px;
    margin-top: 25px;
    text-align: center;
    border-radius: 7px;
    font-size: 18px;
`;


// function to submit form 
document.forms[0].onsubmit = function (e) {
    // not submit form becouse not work
    e.preventDefault();
    // when on click to contact buttom => add alert in last form
    this.appendChild(alert);
    // aftrer 4 secound => delet alert 
    setTimeout(function () {
        // deler alert
        alert.remove();
    }, 6000)
}

/****************************************************************************
****************** Functionalty of open method to projects ******************
****************************************************************************/
project_1.onclick = function () {
    open("https://muhtarif.me");
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
project_10.onclick = function () {
    open("https://elmohtarif2410.github.io/potfolio_one/");
};
project_11.onclick = function () {
    open("https://elmohtarif2410.github.io/age-calculator/");
};
project_12.onclick = function () {
    open("https://elmohtarif2410.github.io/calculator-app/");
};
project_13.onclick = function () {
    open("https://elmohtarif2410.github.io/template-three/");
};
project_14.onclick = function () {
    open("https://elmohtarif2410.github.io/bondi/");
};
project_15.onclick = function () {
    open("https://aragontechno.com/");
};