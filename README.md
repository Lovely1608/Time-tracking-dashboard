# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./Time-tracking-dashborad.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lovely1608/Time-tracking-dashboard.git)
- Live Site URL: [Add live site URL here](https://lovely1608.github.io/Time-tracking-dashboard/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- js ftech API

### What I learned

In this project I got to learn about the grid , fetch data from json file and loop with async await function and how to use them and how to applay them in project to get to know about the behavior of the function

To see how you can add code snippets, see below:

```css
main-container {
  display: grid;
  grid-template-columns: 15rem auto; /* head + body */
  gap: 2rem; /* space between columns */
}
```

```js
async function getData() {
  try {
    const response = await fetch("./data.json");
    data = await response.json();
    updateUI("weekly");
  } catch (err) {
    console.error("Failed to load data.json:", err);
  }
}
```

### Continued development

I will work on the grid ,and ansync await function for fetching data because I am still not good at this and I am going to continue learning more about this and through learning my next project and this project.

### Useful resources

- [Resource 1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This is an amazing article from the MDN Doc which helped me finally understand Fetch API. I'd recommend it to anyone still learning this concept, it will help you to enhance your knowledge and gives your more clarity over this concept.

- [Resource 2](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests) - This helped me for getting the better understanding over how to make the network request with js.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

Chatgpt and MDN doc and Google and Frontend Mentor
