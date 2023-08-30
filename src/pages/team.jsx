import React, { useEffect, useId, useState } from "react";

import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "../components/Container";
import { DiamondIcon } from "../components/DiamondIcon";
import andrewGreeneImage from "../images/avatars/andrew-greene.jpg";
import cathleneBurrageImage from "../images/avatars/cathlene-burrage.jpg";
import damarisKimuraImage from "../images/avatars/damaris-kimura.jpg";
import dianneGuilianelliImage from "../images/avatars/dianne-guilianelli.jpg";
import erhartCockrinImage from "../images/avatars/erhart-cockrin.jpg";
import giordanoSagucioImage from "../images/avatars/giordano-sagucio.jpg";
import gordonSandersonImage from "../images/avatars/gordon-sanderson.jpg";
import heatherTerryImage from "../images/avatars/heather-terry.jpg";
import ibrahimFraschImage from "../images/avatars/ibrahim-frasch.jpg";
import jaquelinIschImage from "../images/avatars/jaquelin-isch.jpg";
import kimberlyParsonsImage from "../images/avatars/kimberly-parsons.jpg";
import parkerJohnsonImage from "../images/avatars/parker-johnson.jpg";
import piersWilkinsImage from "../images/avatars/piers-wilkins.jpg";
import richardAstley from "../images/avatars/richard-astley.jpg";
import rinaldoBeynonImage from "../images/avatars/rinaldo-beynon.jpg";
import ronniCantadoreImage from "../images/avatars/ronni-cantadore.jpg";
import stevenMchailImage from "../images/avatars/steven-mchail.jpg";
import waylonHydenImage from "../images/avatars/waylon-hyden.jpg";
import InviteMember from "../components/InviteMember";
import Luis from "../images/avatars/Luis.jpg";
import { PlusIcon } from "@heroicons/react/20/solid";
import background from "../images/background.jpg";

const days = [
  {
    name: "",
    MainRole: "Admins",
    dateTime: "2022-04-04",
    roleDescription:
      "Responsible for comprehensive oversight of the caregiving circle. They handle document organization, schedule management, medication tracking, and additional administrative tasks. Circle Managers have the authority to bring in new participants into the caregiving network.",
    speakers: [
      {
        name: "Tom Cook",
        role: "Organizer of this circle",
        image: stevenMchailImage,
      },
      {
        name: "Dianne Guilianelli",
        role: "I'm here to support you!",
        image: dianneGuilianelliImage,
      },
      {
        name: "Ronni Cantadore",
        role: "I'm here with you",
        image: ronniCantadoreImage,
      },
      {
        name: "Erhart Cockrin",
        role: "I will be here for you",
        image: erhartCockrinImage,
      },
      {
        name: "Parker Johnson",
        role: "Times like these",
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: "",
    MainRole: "Caregivers",
    dateTime: "2022-04-05",
    roleDescription:
      "Limited to scheduling activities on the shared calendar, this role also has visibility into essential documents and medication lists, but does not have the ability to modify them.",
    speakers: [
      {
        name: "Damaris Kimura",
        role: "We need each other",
        image: damarisKimuraImage,
      },
      {
        name: "Ibrahim Frasch",
        role: "We are not alone",
        image: ibrahimFraschImage,
      },
      {
        name: "Cathlene Burrage",
        role: "We are in this together",
        image: cathleneBurrageImage,
      },
      {
        name: "Rinaldo Beynon",
        role: "We are here for you",
        image: rinaldoBeynonImage,
      },
      {
        name: "Waylon Hyden",
        role: "We are here to help",
        image: waylonHydenImage,
      },
      {
        name: "Giordano Sagucio",
        role: "We are here to support you",
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: "",
    MainRole: "Supporters",
    dateTime: "2022-04-06",
    roleDescription:
      "Primarily friends and family members, people in this role have restricted access to the caregiving circle. They can view the shared calendar and training materials, and they have the option to contribute comments in the home section.",
    speakers: [
      {
        name: "Andrew Greene",
        role: "You can do this!",
        image: andrewGreeneImage,
      },
      {
        name: "Heather Terry",
        role: "You are not alone",
        image: heatherTerryImage,
      },
      {
        name: "Piers Wilkins",
        role: "You are not alone",
        image: piersWilkinsImage,
      },
      {
        name: "Gordon Sanderson",
        role: "We are here to help",
        image: gordonSandersonImage,
      },
      {
        name: "Kimberly Parsons",
        role: "I can help with anything",
        image: kimberlyParsonsImage,
      },
      {
        name: "Richard Astley",
        role: "I'm here to support you",
        image: richardAstley,
      },
    ],
  },
];

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Team() {
  const [isOpen, setIsOpen] = useState(false);
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-5 sm:py-5"
    >
      <ImageClipPaths id={id} />
      <InviteMember IsOpen={isOpen} onClose={handleCloseModal} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Your Inner Circle
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Your Inner Circle is essential in your caregiving journey. As a
            caregiver, you're never alone; your friends, family members, and
            even professional aides can be part of your support team.
          </p>
        </div>
      </Container>

      <Container className={"py-10 sm:py-10"}>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-15 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-20">
          <img
            alt=""
            loading="lazy"
            width="919"
            height="1351"
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={background}
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Meet Luis:
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Thank you for joining my inner circle, it means a lot to me, I
                know with your support I will get through this.
              </p>
            </div>
            <form>
              <div className="mt-5 flex items-center justify-center content-center rounded-3xl  py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <img className="h-36 w-36 rounded-full" src={Luis} alt="" />
              </div>
            </form>
          </div>
        </div>
      </Container>

      <Container>
        <div className="relative flex justify-center pt-6">
          <button
            onClick={openModal}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Invite New Member
          </button>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        "absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        dayIndex === selectedIndex
                          ? "fill-blue-600 stroke-blue-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          "font-mono text-sm",
                          dayIndex === selectedIndex
                            ? "text-blue-600"
                            : "text-slate-500"
                        )}
                      >
                        <Tab className="ui-not-focus-visible:outline-none">
                          <time
                            dateTime={day.MainRole}
                            className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                          >
                            {day.MainRole}
                          </time>
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel key={day.dateTime} unmount={false}>
                <p className="flex mt-1 text-base tracking-tight text-slate-500 justify-center items-center mb-6">
                  {day.roleDescription}
                </p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
                  {day.speakers.map((speaker, speakerIndex) => (
                    <div key={speakerIndex}>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <div
                          className={clsx(
                            "absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                            [
                              "border-blue-300",
                              "border-indigo-300",
                              "border-sky-300",
                            ][speakerIndex % 3]
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          style={{
                            clipPath: `url(#${id}-${speakerIndex % 3})`,
                          }}
                        >
                          <img
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={speaker.image}
                            alt=""
                            loading="lazy"
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-base tracking-tight text-slate-500">
                        {speaker.role}
                      </p>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
}
