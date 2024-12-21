document.querySelector(".circle").animate(
  [
    {
      transform: "translateY(0)",
    },
    {
      transform: "translateY(450px)",
    },
  ],
  {
    duration: 1000,
    iterations: Infinity,
    fill: "backwards",
    direction: "alternate",
    easing: "ease-in-out",
  }
);
