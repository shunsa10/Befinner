import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTest = () => {
    
    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
      revealRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              id: ``,
              trigger: el,
              start: "top center+=200",
              toggleActions: "play none none reverse",
              // markers: true
            },
          }
        );
      });
    
    }, []);

    const addToRefs = (el: never) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
    };

    return ({ addToRefs });

}
