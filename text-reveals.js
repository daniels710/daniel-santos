window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play(),
    });
  }

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });

    // Add a delay for the second animation
    let delay = index === 1 ? 0.2 : 0; // Add 0.5s delay for the second element (index 1)

    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: { amount: 0.3 },
      delay: delay, // Add delay here
    });
    createScrollTrigger($(this), tl);
  });

  // Play tl when scrolled into view (60% from top of screen)
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 60%",
    onEnter: () => timeline.play(),
  });
});

// Avoid flash of unstyled content
gsap.set("[text-split]", { opacity: 1 });
