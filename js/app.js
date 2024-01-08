(() => {
  "use strict";
  function isWebp() {
    function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
      let className = support === true ? "webp" : "no-webp";
      document.documentElement.classList.add(className);
    });
  }
  let addWindowScrollEvent = false;
  setTimeout(() => {
    if (addWindowScrollEvent) {
      let windowScroll = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(windowScroll);
      });
    }
  }, 0);
  //-------------------------------------------------------------------//
  let zSpacing = -1e3;
  let lastPos = zSpacing / 5;
  let script_frames = Array.from(document.getElementsByClassName("frame"));
  let zVals = [];
  window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;
    lastPos = top;
    script_frames.forEach((n, i) => {
      zVals.push(i * zSpacing + zSpacing);
      zVals[i] += delta * -5.5;
      let frame = script_frames[i];
      let transform = `translateZ(${zVals[i]}px)`;
      let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
      frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
    });
  };
  window.scrollTo(0, 1);
  window["FLS"] = true;
  isWebp();
})();
