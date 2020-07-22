import Navigo from "navigo";

// helper functions for slide animation
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// set current slide 'page'
const setSlide = async (id: string) => {
  const slideElements = document.querySelectorAll("main");
  const currentSlideElement = document.querySelector("[data-id-current]");
  const currentSlideId = !!currentSlideElement
    ? currentSlideElement.dataset.id
    : 1;
  slideElements.forEach(slideElement => {
    const slideId = slideElement.dataset.id;
    if (slideId === id) {
      slideElement.style.display = "flex";
      slideElement.dataset.idCurrent = "true";
      const translatePosition = currentSlideId > id ? "-100%" : "100%";
      slideElement.style.transform = `translateX(${translatePosition})`;
    } else {
      delete slideElement.dataset.idCurrent;
      const translatePosition = slideId < id ? "-100%" : "100%";
      slideElement.style.transform = `translateX(${translatePosition})`;
    }
  });
  await wait(600);
  slideElements.forEach(slide => {
    slide.style.display = slide.dataset.id === id ? "flex" : "none";
    slide.style.transform = "translateX(0%)";
  });
};

// router setup
const router = new Navigo(null, true);

router.on("slide/:id", ({ id }) => setSlide(id)).resolve();
router.navigate("slide/7");
