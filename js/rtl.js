/******************************************************************
******** overlay to main.js becoase this is arbic template ******** 
*******************************************************************/

// send to English page
languge.onclick = function () {
    open("index.html", "_self")
}

//Portfolio Button More
portfolioButtonMore.onclick = function () {
    if (this.textContent === "المزيد") {
        document.querySelector(".portfolio .projects").style.maxHeight = "unset";
        this.textContent = "عرض أقل";
    } else {
        document.querySelector(".portfolio .projects").style.maxHeight = "750px";
        this.textContent = "المزيد";
    }
}

// Functionalty of slide to Testmonials
testmonialsButton[0].onclick = function () {
    testmonialsButton[0].classList.add("active");
    testmonialsButton[1].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    quote.textContent = "القراءة والمطالعة من أهم العادات التي تطور الشخصية وتنمي المعرفة والثقافة، ينبغي على أي أنسان أن يطور من ذاته ويرتقي بأخلاقه لكي يصل بنفسه إلى درجة عالية من الرقي الأنساني، بالأخلاق الحميدة والصفات القوية تسمو الأمم وتتطور يجب علينا التحلي بالأخلاق لكي نسمو لدرجات العزة والكرامة ولكي نكون قدوة يحتذى بها في المجتمع.";
    nameQuote.textContent = "العميل الأول";
}
testmonialsButton[1].onclick = function () {
    testmonialsButton[1].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    quote.textContent = "القراءة والمطالعة من أهم العادات التي تطور الشخصية وتنمي المعرفة والثقافة، ينبغي على أي أنسان أن يطور من ذاته ويرتقي بأخلاقه لكي يصل بنفسه إلى درجة عالية من الرقي الأنساني، بالأخلاق الحميدة والصفات القوية تسمو الأمم وتتطور يجب علينا التحلي بالأخلاق لكي نسمو لدرجات العزة والكرامة .";
    nameQuote.textContent = "العميل الثاني";
}
testmonialsButton[2].onclick = function () {
    testmonialsButton[2].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[1].classList.remove("active");
    quote.textContent = "القراءة والمطالعة من أهم العادات التي تطور الشخصية وتنمي المعرفة والثقافة، ينبغي على أي أنسان أن يطور من ذاته ويرتقي بأخلاقه لكي يصل بنفسه إلى درجة عالية من الرقي الأنساني، بالأخلاق الحميدة والصفات القوية تسمو الأمم وتتطور يجب علينا التحلي بالأخلاق لكي نسمو لدرجات العزة والكرامة.";
    nameQuote.textContent = "العميل الثالث";
}

// Functionalty of contact form
alert = document.createElement("span");
alertText = document.createTextNode("عذراً ! نموذج الإرسال لا يعمل");

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

