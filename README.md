# Childcare Invoice Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

Users should be able to:

- Add a family name
- Add children to that family group
- Enter the amount of hours the childcare will cover
- Apply any funding required
- See a total of how much to charge/pay that week

### Screenshot

![](./screenshots/advice-generator-app-HERO.png)

### Links

- Solution URL: (https://github.com/hannahf86/adviceGeneratorApp)
- Live Site URL: (https://childcare-invoice-generator-qjhydycuk-hannah-feehans-projects.vercel.app/)

## My process

- After learning more about the versatility of React-Router-DOM, I decided to apply this knowledge to a small project I had recently completed.
  
- I began by using the createBrowserRouter object to define my Outlet, loaders, path to the Dashboard, an Error page and an action to be able to logout.

### Built with

- [React](https://reactjs.org/)
- [React-Router-DOM](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/)
- JSX
- Custom CSS
- [React Icons](https://react-icons.github.io/react-icons/)
- Mobile-first workflow


### What I learned

I reinforced my knowledge of using simple APIs and CSS.

I initially set out using fetch/then/catch to keep the code clean, but it wasn't working. In hindsight, I believe I was 
making some careless errors, but my goal for this project was to be fast, so I decided I would use another project to revise 
fetch/then/catch, and just use async/await for this one. However, this meant I had to add a couple more steps than was perhaps 
necessary. Something to work on in the future for sure.

I was particularly pleased with the position of the dice SVG, as it required a combination of relative/absolute positioning, 
and utilising the Z axis. I was also happy I managed to achieve the desired result for the hover effect.

```CSS
.dice:hover {
  box-shadow: 0 0 0.5em 0.25em var(--accent-color)
}``` 

Working with the designer's Figma file beside me was incredibly useful! It was a very useful exercise to be able to look at the exact 
numbers used, and translate them into code. Something I particularly enjoyed was being able to see the exact sizes and measurements of
the design, and translate them into em measurements to keep the design consistent and responsive.




If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Further development could include including user authentication and being able to save your favourite quotes. There could also be scope for setting times
of day for certain quotes, or providing tags and themes for different situations.

## Author

- Website - [Hannah Feehan](https://www.hannahfeehan.com)
- Twitter - [@hannahfdev](https://www.twitter.com/hannahfdev)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Massive thank you to Joe Abell for helping with Firefox "aggressively" caching the API!
