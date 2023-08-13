import React, { Fragment, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import stevenMchailImage from "../images/avatars/steven-mchail.jpg";
import piersWilkinsImage from "../images/avatars/piers-wilkins.jpg";
import rinaldoBeynonImage from "../images/avatars/rinaldo-beynon.jpg";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NestedFeed() {
  const [selected, setSelected] = useState(moods[5]);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl rounded-md bg-white shadow-lg px-4 py-5 sm:px-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <img
              className="relative inset-0 h-16 w-16 object-cover transition duration-300 group-hover:scale-110"
              src={stevenMchailImage}
              alt=""
              loading="lazy"
              sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold">Tom Cook</h4>
            <p className="mt-1">
              Hey all!!. As many of you know, Luis is going through a
              challenging time, and our support can make a world of difference
              for him. This group was created to coordinate and offer care for
              Luis during this period. We're like a family here, and I believe
              our collective strength can help him navigate this journey. Thank
              you all for being a part of this crucial effort. Your commitment
              is invaluable, and together, we can ensure Luis feels the love,
              care, and support he needs. I encourage everyone to introduce
              themselves briefly, share any thoughts, and let's discuss the best
              ways we can assist.
            </p>

            <div className="mt-6 flex">
              <div className="mr-4 flex-shrink-0">
                <img
                  className="relative inset-0 h-12 w-12 object-cover transition duration-300 group-hover:scale-110"
                  src={piersWilkinsImage}
                  alt=""
                  loading="lazy"
                  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">Piers Wilkins</h4>
                <p className="mt-1">
                  We can do this together! I'm here to help in any way I can.
                </p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="mr-4 flex-shrink-0">
                <img
                  className="relative inset-0 h-12 w-12 object-cover transition duration-300 group-hover:scale-110"
                  src={rinaldoBeynonImage}
                  alt=""
                  loading="lazy"
                  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">Rinaldo Beynon</h4>
                <p className="mt-1">
                  I will be here for Luis. I'm available to help with
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-x-3">
              <img
                src={stevenMchailImage}
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              <form action="#" className="relative flex-auto">
                <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label htmlFor="comment" className="sr-only">
                    Add your comment
                  </label>
                  <textarea
                    rows={2}
                    name="comment"
                    id="comment"
                    className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Add your comment..."
                    defaultValue={""}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Attach a file</span>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="sr-only">
                              Your mood
                            </Listbox.Label>
                            <div className="relative">
                              <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                <span className="flex items-center justify-center">
                                  {selected.value === null ? (
                                    <span>
                                      <FaceSmileIcon
                                        className="h-5 w-5 flex-shrink-0"
                                        aria-hidden="true"
                                      />
                                      <span className="sr-only">
                                        Add your mood
                                      </span>
                                    </span>
                                  ) : (
                                    <span>
                                      <span
                                        className={classNames(
                                          selected.bgColor,
                                          "flex h-8 w-8 items-center justify-center rounded-full"
                                        )}
                                      >
                                        <selected.icon
                                          className="h-5 w-5 flex-shrink-0 text-white"
                                          aria-hidden="true"
                                        />
                                      </span>
                                      <span className="sr-only">
                                        {selected.name}
                                      </span>
                                    </span>
                                  )}
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                  {moods.map((mood) => (
                                    <Listbox.Option
                                      key={mood.value}
                                      className={({ active }) =>
                                        classNames(
                                          active ? "bg-gray-100" : "bg-white",
                                          "relative cursor-default select-none px-3 py-2"
                                        )
                                      }
                                      value={mood}
                                    >
                                      <div className="flex items-center">
                                        <div
                                          className={classNames(
                                            mood.bgColor,
                                            "flex h-8 w-8 items-center justify-center rounded-full"
                                          )}
                                        >
                                          <mood.icon
                                            className={classNames(
                                              mood.iconColor,
                                              "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <span className="ml-3 block truncate font-medium">
                                          {mood.name}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
