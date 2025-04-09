## HTML CODE HERE
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/all.min.css">
    <link rel="stylesheet" href="./css/fontawesome.min.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="container">

        <div class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item"><img src="./img/img1.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img2.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img3.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img4.jpg" alt=""></div>
            </div>

            <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
            <div class="dots"></div>

        </div>

    </div>
    <script src="./js/all.min.js"></script>
    <script src="./js/fontawesome.min.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>
```
## CSS CODE HERE
```css
/*==========================================================
BASIC CSS STYLE START HERE
===========================================================*/
*{
    margin:0px;
    padding:0px;
    list-style-type:none;
    box-sizing:border-box;
    outline:none;
    line-height:1.5rem;
    }
.container{
    width:100%;
    max-width:1200px;
    margin:0px auto;
    }
/*==========================================================
BASIC CSS STYLE END HERE
===========================================================*/
.carousel{
    width:100%;
    position:relative;
    overflow:hidden;
    }
.carousel-inner{
    display:flex;
    flex-direction:row;
    transition:0.5s ease;
    }
.carousel-item{
    flex-basis:33.33%;
    flex-grow:0;
    flex-shrink:0;
    padding:6px;
    box-sizing:border-box;
    }
.carousel-item img{
    width:100%;
    height:auto;
    display:block;
    }
button{
    border:none;
    outline:none;
    font-size:22px;
    padding:12px 16px;
    border-radius:4px;
    opacity:0;
    color:black;
    cursor:pointer;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    }
.prev{
    left:16px;
}
.next{
    right:0px;
    right:16px;
    }
.carousel:hover button{
    opacity:0.5;
    }
.dots{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:10px;
    display:flex;
    gap:6px;
}
.dot{
    width:10px;
    height:10px;
    background-color:white;
    border-radius:50%;
    cursor:pointer;
    }
.active{
    background-color:black;
    }
```
## JAVASCRIPT CODE HERE
```javascript
"use strict"
try{

const carouselInner = document.querySelector(".carousel-inner");
  const carouselItem = document.querySelectorAll(".carousel-item");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let count = 0;

  const slideShow = (index) => {
    // Update count if index is provided
    if (typeof index === "number") {
      count = index;
    }

    // Apply transition and transform
    carouselInner.style.transition = "transform 0.5s ease-in-out";
    carouselInner.style.transform = `translateX(-${count * (100 / 3)}%)`;

    if (count >= totalItems) {
      setTimeout(() => {
        carouselInner.style.transition = "none";
        count = 0;
        carouselInner.style.transform = `translateX(-${count * (100 / 3)}%)`;
        updateDots();
      }, 500);
    } else if (count < 0) {
      setTimeout(() => {
        carouselInner.style.transition = "none";
        count = totalItems - 1;
        carouselInner.style.transform = `translateX(-${count * (100 / 3)}%)`;
        updateDots();
      }, 500);
    } else {
      updateDots();
    }
  };

  // Create dots dynamically
  carouselItem.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      slideShow(index); // Pass index to slideShow
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");
  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === count);
    });
  };

  // Create the infinite loop with clone items
  const totalItems = carouselItem.length;
  const cloneFirst = carouselItem[0].cloneNode(true);
  const cloneSecond = carouselItem[1].cloneNode(true);
  const cloneThird = carouselItem[2].cloneNode(true);
  carouselInner.appendChild(cloneFirst);
  carouselInner.appendChild(cloneSecond);
  carouselInner.appendChild(cloneThird);

  const moveNext = () => {
    count++;
    slideShow();
  };

  const movePrev = () => {
    count--;
    if (count < 0) {
      count = totalItems - 1;
      carouselInner.style.transition = "none";
      carouselInner.style.transform = `translateX(-${count * (100 / 3)}%)`;
      setTimeout(() => {
        count--;
        carouselInner.style.transition = "transform 0.5s ease-in-out";
        slideShow();
      }, 20);
    } else {
      slideShow();
    }
  };

  prev.addEventListener("click", movePrev);
  next.addEventListener("click", moveNext);

  // Auto-slide every 3 seconds
  setInterval(moveNext, 3000);

}catch(err){
    console.log(err)
}





// "use strict";
// try {
//   const carouselInner = document.querySelector(".carousel-inner");
//   const carouselItem = document.querySelectorAll(".carousel-item");
//   const prev = document.querySelector(".prev");
//   const next = document.querySelector(".next");
//   const dotsContainer = document.querySelector(".dots");
//   let count = 0;

//   // Function to handle slide show
//   const slideShow = (index) => {
//     // Update count if index is provided
//     if (typeof index === "number") {
//       count = index;
//     }

//     // Apply transform for sliding
//     carouselInner.style.transition = "transform 0.5s ease-in-out";
//     carouselInner.style.transform = `translateX(-${count * 100}%)`;

//     // Handle infinite loop transitions
//     if (count >= totalItems) {
//       setTimeout(() => {
//         carouselInner.style.transition = "none";
//         count = 0;
//         carouselInner.style.transform = `translateX(-${count * 100}%)`;
//         updateDots();
//       }, 500);
//     } else if (count < 0) {
//       setTimeout(() => {
//         carouselInner.style.transition = "none";
//         count = totalItems - 1;
//         carouselInner.style.transform = `translateX(-${count * 100}%)`;
//         updateDots();
//       }, 500);
//     } else {
//       updateDots();
//     }
//   };

//   // Create dots dynamically
//   carouselItem.forEach((_, index) => {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     if (index === 0) {
//       dot.classList.add("active");
//     }
//     dot.addEventListener("click", () => {
//       slideShow(index); // Pass index to slideShow
//     });
//     dotsContainer.appendChild(dot);
//   });

//   const dots = document.querySelectorAll(".dot");
//   const updateDots = () => {
//     dots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === count);
//     });
//   };

//   // Create the infinite loop with clone items
//   const totalItems = carouselItem.length;
//   const cloneFirst = carouselItem[0].cloneNode(true);
//   const cloneSecond = carouselItem[1].cloneNode(true);
//   const cloneThird = carouselItem[2].cloneNode(true);
//   carouselInner.appendChild(cloneFirst);
//   carouselInner.appendChild(cloneSecond);
//   carouselInner.appendChild(cloneThird);

//   const moveNext = () => {
//     count++;
//     slideShow();
//   };

//   const movePrev = () => {
//     count--;
//     if (count < 0) {
//       count = totalItems - 1;
//       carouselInner.style.transition = "none";
//       carouselInner.style.transform = `translateX(-${count * 100}%)`;
//       setTimeout(() => {
//         count--;
//         carouselInner.style.transition = "transform 0.5s ease-in-out";
//         slideShow();
//       }, 20);
//     } else {
//       slideShow();
//     }
//   };

//   prev.addEventListener("click", movePrev);
//   next.addEventListener("click", moveNext);

//   // Auto-slide every 3 seconds
//   setInterval(moveNext, 3000);
// } catch (err) {
//   console.log(err);
// }
```