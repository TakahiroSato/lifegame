import { c2d } from "./util";
import { set, random, update, draw } from "./lifegame";

set(require("../pattern/grider_13.json").array);

const addClickEvent = (id: string, f: EventListener) => {
    document?.getElementById(id)?.addEventListener("click", f);
}

addClickEvent("random", () => {
  random();
});
addClickEvent("new_gun", () => {
  set(require("../pattern/new_gun.json").array);
});
addClickEvent("grider13", () => {
  set(require("../pattern/grider_13.json").array);
});
addClickEvent("pulser", () => {
  set(require("../pattern/pulser.json").array);
})

let cnt = 0;
let mod = 4;

addClickEvent("fps60", () => {
    mod = 1;
});
addClickEvent("fps30", () => {
    mod = 2;
});
addClickEvent("fps15", () => {
    mod = 4;
});

(function animation() {
  c2d.fillBackground("#000000");
  if (cnt % mod == 0) {
    update();
  }
  cnt++;
  draw();
  requestAnimationFrame(animation);
})();
