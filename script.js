/* TO-DO:
-disable items when stock is 0
-not allow any more backers when bar is full
-clean up code: combine similar code, and remove redundant and unnecessary code for js
-complete design specifications, desktop and mobile
-consider accessibility and readability for html and css
*/

/*** HAMBURGER ***/
const mobile = document.querySelector(".mobile");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

mobile.addEventListener("click", function () {
    if (menu.style.display = "none") {
        menu.style.display = "block";
        hamburger.style.display = "none";
        closeMenu.style.display = "block";
    } else if (menu.style.display = "block") {
        menu.style.display = "none";
        hamburger.style.display = "block";
        closeMenu.style.display = "none";
    }

})

closeMenu.addEventListener("click", function () {
    menu.style.display = "none";
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
})
/*** HAMBURGER ***/

/*** BOOKMARK TOGGLE ***/
const bookmark = document.getElementById("bookmark");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "on") {
    bookmark.classList.add("active");
}

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");

    if (!bookmark.classList.contains("active")) {
        return localStorage.setItem("mode", "off"); /* localStorage only accepts strings */
    }

    localStorage.setItem("mode", "on");
});
/*** BOOKMARK TOGGLE ***/

/*** MAIN MODAL ***/
const backBtn = document.getElementById("back");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");

const selectBtn = document.querySelectorAll(".select");

for (const btn of selectBtn) {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });
}

backBtn.addEventListener("click", function () {
    modal.style.display = "block";
})

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
})

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

/*** MAIN MODAL ***/

/*** DISPLAY INPUTS ***/
const noReward = document.getElementById("no-reward");
const bamboo = document.getElementById("bamboo-stand");
const black = document.getElementById("black-stand");
const mahogany = document.getElementById("mahogany-stand");
const noRewardInput = document.getElementById("none");
const bambooInput = document.getElementById("bamboo");
const blackInput = document.getElementById("black");
const mahoganyInput = document.getElementById("mahogany");

const noRewardDiv = document.getElementById("no-reward-div");
const bambooDiv = document.getElementById("bamboo-stand-div");
const blackDiv = document.getElementById("black-stand-div");
const mahoganyDiv = document.getElementById("mahogany-stand-div");

const inputs = [noRewardInput, bambooInput, blackInput, mahoganyInput];
const divs = [noRewardDiv, bambooDiv, blackDiv, mahoganyDiv];

function displayInput(input, div) {

    for (let i = 0, j = 0; i < inputs.length, i < divs.length; i++, j++) {
        if (inputs[i] === input && divs[j] === div) {
            inputs[i].style.display = "block";
            divs[j].classList.add("active");
        } else {
            inputs[i].style.display = "none";
            divs[j].classList.remove("active");
        }

    }
}

noReward.addEventListener("click", function () {
    displayInput(noRewardInput, noRewardDiv);
})

bamboo.addEventListener("click", function () {
    displayInput(bambooInput, bambooDiv);
})

black.addEventListener("click", function () {
    displayInput(blackInput, blackDiv);
})

mahogany.addEventListener("click", function () {
    displayInput(mahoganyInput, mahoganyDiv);
})
/*** DISPLAY INPUTS ***/

/*** MODAL COMPLETE ***/
const modalThankYou = document.getElementById("modal-thank-you");
const closeModalThankYou = document.getElementById("got-it");

closeModalThankYou.addEventListener("click", function () {
    modalThankYou.style.display = "none";
})
/*** MODAL COMPLETE ***/


/*** UPDATE DATA AND PROGRESS BAR ***/
const continueBtn1 = document.getElementById("continue1");
const continueBtn2 = document.getElementById("continue2");
const continueBtn3 = document.getElementById("continue3");
const continueBtn4 = document.getElementById("continue4");

const amountBacked = document.getElementById("amount-backed");
const amountPledged1 = document.getElementById("amount-pledged1");
const amountPledged2 = document.getElementById("amount-pledged2");
const amountPledged3 = document.getElementById("amount-pledged3");
const amountPledged4 = document.getElementById("amount-pledged4");
const progressBar = document.getElementById("progress-bar");
const numberOfBackers = document.getElementById("number-of-backers");

const totalAmount = 100000;

const stocksBamboo = document.getElementById("stocks-bamboo");
const stocksBlack = document.getElementById("stocks-black");
const stocksMahogany = document.getElementById("stocks-mahogany");
const mainBamboo = document.querySelector(".bamboo-main");
const mainBlack = document.querySelector(".black-main");
const mainMahogany = document.querySelector(".mahogany-main");

let currentAmount = JSON.parse(localStorage.getItem("currentAmount"));
let percentage = JSON.parse(localStorage.getItem("percentage"));
let backers = JSON.parse(localStorage.getItem("backers"));

let bambooStocks = JSON.parse(localStorage.getItem("bambooStocks"));
let blackStocks = JSON.parse(localStorage.getItem("blackStocks"));
let mahoganyStocks = JSON.parse(localStorage.getItem("mahoganyStocks"));

if (bambooStocks === null | blackStocks === null | mahoganyStocks === null) {
    localStorage.setItem("bambooStocks", "101");
    localStorage.setItem("blackStocks", "64");
    localStorage.setItem("mahoganyStocks", "50");
} else {
    stocksBamboo.textContent = `${bambooStocks}`;
    stocksBlack.textContent = `${blackStocks}`;
    stocksMahogany.textContent = `${mahoganyStocks}`;
    mainBamboo.textContent = `${bambooStocks}`;
    mainBlack.textContent = `${blackStocks}`;
    mainMahogany.textContent = `${mahoganyStocks}`;
}

if (currentAmount === null | percentage === null | backers === null) {
    progressBar.style.width = "0%";
    amountBacked.textContent = "$0";
    numberOfBackers.textContent = "0";
} else {
    progressBar.style.width = `${percentage}%`
    amountBacked.textContent = `$${currentAmount}`;
    numberOfBackers.textContent = `${backers}`;
}

function updateData(amount) {
    currentAmount += parseInt(amount.value);
    percentage = (currentAmount / totalAmount) * 100;
    backers += 1;

    localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
    localStorage.setItem("percentage", JSON.stringify(percentage));
    localStorage.setItem("backers", JSON.stringify(backers));

    progressBar.style.width = `${percentage}%`
    amountBacked.textContent = `$${currentAmount}`;
    numberOfBackers.textContent = `${backers}`;

    modalThankYou.style.display = "block";

}

function updateStocks(stocks, stocksText, nameOfData) {
    stocks = parseInt(stocksText.textContent) - 1;

    localStorage.setItem(nameOfData, JSON.stringify(stocks));

    stocksText.textContent = `${stocks}`;
}


continueBtn1.addEventListener("click", function () {
    updateData(amountPledged1);
})

continueBtn2.addEventListener("click", function () {
    updateData(amountPledged2);
    updateStocks(bambooStocks, stocksBamboo, "bambooStocks");
})

continueBtn3.addEventListener("click", function () {
    updateData(amountPledged3);
    updateStocks(blackStocks, stocksBlack, "blackStocks");
})

continueBtn4.addEventListener("click", function () {
    updateData(amountPledged4);
    updateStocks(mahoganyStocks, stocksMahogany, "mahoganyStocks");
})
/*** UPDATE DATA AND PROGRESS BAR ***/