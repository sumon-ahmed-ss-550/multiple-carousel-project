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