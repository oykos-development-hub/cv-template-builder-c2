export const fadeOut = (id) => {
  setTimeout(() => {
    let opacity = 0;
    const intevalID = setInterval(() => {
      const element = document.getElementById(id);
      opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));
      if(opacity > 0) {
        opacity = opacity - 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(intevalID);
      }
    }, 20)
  }, 3000)
};

export const appearAnimation = (id) => {
  let opacity = 0;
  const intevalID = setInterval(() => {
      const element = document.getElementById(id);
      opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));
      if(opacity < 1) {
        opacity = opacity + 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(intevalID);
        return 'aloe'
      }
  }, 20)
  fadeOut(id);
};