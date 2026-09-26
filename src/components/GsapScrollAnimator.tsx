import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollAnimator() {
  useEffect(() => {
    // Animate all elements with data-gsap attributes safely
    const ctx = gsap.context(() => {
      // Fade-up headers and text blocks
      const fadeUpElements = gsap.utils.toArray<HTMLElement>('[data-gsap="fade-up"]');
      fadeUpElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true
            }
          }
        );
      });

      // Stagger children inside containers
      const staggerContainers = gsap.utils.toArray<HTMLElement>('[data-gsap="stagger"]');
      staggerContainers.forEach((container) => {
        const children = container.children;
        if (children.length > 0) {
          gsap.fromTo(
            Array.from(children),
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: container,
                start: 'top 88%',
                once: true
              }
            }
          );
        }
      });

      // Scale in badges and accent boxes
      const scaleElements = gsap.utils.toArray<HTMLElement>('[data-gsap="scale-in"]');
      scaleElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.4)',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true
            }
          }
        );
      });
    });

    // Refresh ScrollTrigger calculations
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return null;
}
