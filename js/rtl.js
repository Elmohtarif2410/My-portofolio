/******************************************************************
******** overlay to main.js becoase this is arbic template ******** 
*******************************************************************/

// send to English page
languge.onclick = function () {
    open("../", "_self")
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
    quote.textContent = "على مدار الفترة التي عملت فيه مع احمد كمال، كان شخص يتسم بالاحترافية والمهينة، ولديه الكثير من المقومات التي تجعله يحظى برضى وحب جميع من عمل معه.";
    nameQuote.textContent = "احمد جمال";
}
testmonialsButton[1].onclick = function () {
    testmonialsButton[1].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    quote.textContent = "شخص لديه الكثير من المقومات والامكانيات والقدرات العالية، سعدت بالعمل معه واتمنى ان نعمل سويا في الكثير من الفترات الاتية.";
    nameQuote.textContent = "محمد";
}
testmonialsButton[2].onclick = function () {
    testmonialsButton[2].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[1].classList.remove("active");
    quote.textContent = "عمل احترافي وخدمة ممتازة، لم اتعامل في حياتي مع شخص اكثر مهارة ولا كفائة منه، سعدت جداً بالعمل معه ولن اتعامل مع اي شخص اخر غيره في المشاريع القادمة.";
    nameQuote.textContent = "اسامة محمد";
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

