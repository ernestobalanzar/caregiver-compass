import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Container } from "./Container";

const reviews = [
  {
    title: "Game Changer",
    body: "This app has been a game changer for me. The AI interface is intuitive and smart, making the often arduous task of health tracking seamless and even enjoyable.",
    author: "CrazyInvestor",
    rating: 5,
  },
  {
    title: "Spot On!.",
    body: "I've never seen a caregiver app handle mental health as well as this one. It understands the need for emotional wellness in care and offers substantial support",
    author: "CluelessButRich",
    rating: 5,
  },
  {
    title: "Easy to use!",
    body: "The app's user-friendly interface is a joy to use. Despite its complex functions, it makes navigating through the different features incredibly easy.",
    author: "LivingDaDream",
    rating: 5,
  },
  {
    title: "My new health tracker",
    body: "I love the app's capacity to track physical health with such precision. It monitors vital signs and activity, ensuring my loved one's wellbeing is always a top priority.",
    author: "JordanBelfort1962",
    rating: 5,
  },
  {
    title: "I love it!",
    body: "The financial tracking feature has been incredibly helpful in managing my expenses. It's a comprehensive tool that ensures nothing slips through the cracks",
    author: "MrBurns",
    rating: 5,
  },
  {
    title: "Too good to be true.",
    body: "The legal aspects of caregiving can be overwhelming. Thankfully, this app is designed to guide users through these complexities in a simple, easy-to-understand manner.",
    author: "LazyRich99",
    rating: 5,
  },
  {
    title: "Wish I could give 6 stars",
    body: "Being able to balance work and life has always been a challenge for caregivers. This app provides valuable resources and practical tips to achieve the much-needed balance.",
    author: "SarahLuvzCash",
    rating: 5,
  },
  {
    title: "The AI is mind-blowing.",
    body: "The AI-driven suggestions and advice the app provides have been incredibly insightful and timely. It's like having a professional caregiving consultant in my pocket.",
    author: "ScroogeMcduck",
    rating: 5,
  },
  {
    title: "Less Stress, More Joy.",
    body: "This app is much more than a health tracker. It's a full-fledged personal assistant that makes caregiving more manageable and less stressful.",
    author: "BruceWayne",
    rating: 5,
  },
  {
    title: "Impressive!!",
    body: "The attention to mental health is impressive. It includes features to track mood, stress levels, and offers coping strategies which have been beneficial.",
    author: "RichieRich",
    rating: 5,
  },
  {
    title: "Helps with finances.",
    body: "The finance tracking feature has brought a new level of order to my caregiving responsibilities. It's comprehensive and detailed, helping me stay on top of all costs involved",
    author: "TheCountOfMonteChristo",
    rating: 5,
  },
  {
    title: "It’s like a superpower.",
    body: "Its work-life balance module has been a blessing. It helps me organize and prioritize my tasks, creating a balance that I once thought was unattainable.",
    author: "ClarkKent",
    rating: 5,
  },
  {
    title: "I love it!",
    body: "The app's AI is remarkable. It learns and adapts to my needs and offers tailored advice to help me be more effective in my caregiving role.",
    author: "GeorgeCostanza",
    rating: 5,
  },
  {
    title: "Innovation at its best.",
    body: "What sets this app apart is its integrated approach. It considers all aspects of caregiving - physical, mental, legal, financial, and even work-life balance.",
    author: "JeffBezos",
    rating: 5,
  },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-cyan-500" : "fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && "lg:hidden"
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is changing improving their life with Caregiver Compass.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          A lot of people have been using Caregiver Compass to improve their
          life. Here's
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
}
