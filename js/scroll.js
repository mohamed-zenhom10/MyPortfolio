const sr = ScrollReveal();

sr.reveal(".left" , {
  origin: "left",
  distance: "30px",
  duration: 800,
  delay: 250,
  opacity: 0,
  mobile: false,
  easing: "ease",
})

sr.reveal(".right" , {
  origin: "right",
  distance: "30px",
  duration: 800,
  delay: 250,
  opacity: 0,
  mobile: false,
  easing: "ease",
})

sr.reveal(".down-up" , {
  origin: "bottom",
  distance: "25px",
  duration: 800,
  delay: 300,
  opacity: 0,
  mobile: false,
  easing: "ease",
  interval: 150
})