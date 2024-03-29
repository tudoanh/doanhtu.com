import { annotate } from "https://unpkg.com/rough-notation?module";

const annotations = {
  ".box": {
    type: "box",
    color: "#6789d0",
    iterations: 3,
    multiline: true,
    animate: true,
  },
  ".underline": {
    type: "underline",
    color: "#52b788",
    multiline: true,
    animate: true,
  },
  ".red-underline": {
    type: "underline",
    color: "#F32424",
    multiline: true,
    animate: true,
  },
  ".circle": {
    type: "circle",
    color: "#ffce55",
    multiline: true,
    animate: true,
    padding: 6,
  },
  ".bracket": {
    type: "bracket",
    color: "#f2e53",
    multiline: true,
    animate: false,
    brackets: ["left", "right"],
    padding: [2, 10],
  },
  ".readmore": {
    type: "box",
    color: "#8eecf5",
    multiline: true,
    animate: false,
    iterations: 3,
  },
};

[...Object.keys(annotations)].forEach((selector) => {
  [...document.querySelectorAll(selector)].forEach((el) =>
    annotate(el, annotations[selector]).show()
  );
});
