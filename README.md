# Crowdfunding Product Page

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [How to setup the project](#how-to-setup-the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The challenge is to create a crowdfunding product page dedicated to the Mastercraft Bamboo Monitor Riser, a beautifully handcrafted monitor stand designed to reduce neck and eye strain. 

Users should be able to- 
- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to support
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked.

### How to setup the project

To set up the project locally, follow these steps:

1. Clone the repository using GitHub Desktop or Git Bash:
   ```bash
   git clone https://github.com/SartHak-0-Sach/Crowdfunding-product-page_frontend.git
   ```
2. Open the project folder in your code editor.
3. Run the project using a live server extension or deploy it using Netlify, Vercel, or another web hosting and deployment service.

### Screenshot

![Screenshot](/design/active-states-modal-default.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/Crowdfunding-product-page_frontend)
- Live Site URL: [Live Site](https://crowdfunding-product-page-frontend.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I learned

In this project the biggest challenge one faces is to design the modal as shown below to work, and then displaying and storing the final order with a thank you modal when user checks out-
```
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
```

### Continued development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in javascript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

### Useful resources

- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you liked this project make sure to spread the word and share it with all your friends.

**Happy coding!** ☺️🚀
