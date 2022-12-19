# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview
- This an article it's an idea for decoration. it containes a picture for the idea, description and haves creator info and also haves share button.
- This share button is fuctionall when you click on them it's display share options(facecook, twitter, pinterset), but this share options hase difrent style comperd with the width of the .


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![mobile verstion](./images/screenshot/mobile%20verstion.png);
![active mobile vestion](./images/screenshot/active%20mobile%20verstion.png);
![desktop verstion](./images/screenshot/desktop%20verstion.png);
![active desktop verstion](./images/screenshot/active%20desktop%20verstion.png);

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- In HTML: I creat a container that holds all the element on this article.
*The first section is a touches picture, the sconde section is the discrption and the last section containes creater info and share button when you click on it should display share options*

- In CSS: I used the grid property for create container and divid it into tree parts.
*For positioning the element inside the article and make it responsive however the whidth of screen*

- In JavaScript: I creat two function and an event listener with arrow function thats contains media query.
*One function for display the mobile verstion of share options and the athore for display the desktop verstion of share options, an event listener for run the arrow function that sheks if the window width is more than 620px run the function thats display desktop verstion else run the function thats display mobile verstion of the shre options*

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid(8column)
- Mobile-first workflow
- [icons from font awesome](https://fontawesome.com/) - For styles
- [font family from google fonts](https://fonts.google.com/specimen/Manrope) - Also for style

### What I learned

~ I learned in CSS how to creat an animation like move an element fro the bottom to the top, withe keyframe role and custome property like in the example below.

```CSS
    .activeDesktop{
        /* for postiont it end give anmition duration and name... */
        position: absolute;
        top: -90px;
        right: -64px;
        animation: postinor;
        animation-duration: 1s;
        animation-timing-function: ease-out;
    }


    /* the anmition kyfromes for translate from the bottom to the top */
    @keyframes postinor{
        from{top: -30px; right: -64px;}
        to{top: -90px; right: -64px;}
    }

  
```

And how to create the comment shape.
```CSS 
 .activeDesktop{
        display: block;
        background-color: var(--Very-Dark-Grayish-Blue);
        padding: .8rem 2rem;
        border-radius: 10px;
        box-shadow: 6px 6px 5px hsla(0, 0%, 0%, 00.2);
    }

    /* create the trangle shape on the bottom of share options to have the same look as comment shape */
    .activeDesktop::after{
        content: '';
        position: absolute;
        border-top:20px solid var(--Very-Dark-Grayish-Blue);
        border-right:20px solid transparent;
        border-left:20px solid transparent ;
        top: 100%;
        left: 40%;
    }
```


And also how to show a specific part of an image however if ```top , bottom```or ```left, right```.
- for top an bottom:
```CSS
  .picture{
    overflow: hidden;
}

.picture img{
    width: 100%;
    margin-block: -16px -50px;
}

```
- for left and right:
```CSS
      .picture{
        overflow: hidden;
        text-indent: 20%;
        margin-left: -30%;
    }
    
    .picture img{
        height: 100%;
    }

```
~ I learned in JavaScript how to use javascript *media querys*.

```js
   document.getElementById('share-btn').addEventListener("click",()=>{
    // media query wiht a condition for add specific function on specific width of the window
     const widthS = window.matchMedia("(max-width:38.75rem)");

     if(widthS.matches){
       mobileShare();
       
     } else{
       desktopShare();
     }
   });

```
And how to toggle a button.

```Js
  
   function desktopShare() { // This function represent the desktop verstion for display and indisplay the share options
     elementFiftChild.classList.toggle('activeDesktop');

     if(elementFiftChild.classList.contains('activeDesktop')){
       btn.style.backgroundColor = "#6d7f97";
       btn.style.color = "#ecf2f8";

     } else{

       btn.style.backgroundColor = " #ecf2f8";
       btn.style.color = "#6d7f97";
     }
   }

```

### Useful resources

- [How to show specific parte from an image](https://themetry.com/css-image-cropping/) .

- [How to use Media querys](https://www.w3schools.com/howto/howto_js_media_queries.asp) - This is an amazing article which helped me finally understand Mdia querys. I'd recommend it to anyone still learning this concept.

- [How to creat comment shape](https://www.web4college.com/how-to-make/web4-css-rounded-comment-shape.php) - This is an amazing article which helped me to creat the comment shape. I'd recommend it to anyone still learning this concept.

- [How to creat an animation](https://www.w3schools.com/css/css3_animations.asp) - This is an amazing explanation wich heleped me finally to understand animation consept in css. I'd recomend it to anyone still learning this concept.
