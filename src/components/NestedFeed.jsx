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
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function NestedFeed(props) {
  const [selected, setSelected] = useState(moods[5]);

  const addSubcomment = (commentId, subcomment) => {
    var sub = {
      id: Math.floor(Math.random() * 100),
      name: "Tom Cook",
      date: "now",
      imageSrc: stevenMchailImage,
      body: subcomment,
    };

    const newComments = props.comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, sub],
        };
      }
      return comment;
    });
    document.getElementById("subcomment").value = "";
    props.addSubcomment(newComments);
  };

  return (
    <>
      {props.comments.length
        ? props.comments.map((comment) => (
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"
              key={comment.id}
            >
              {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="mx-auto max-w-3xl rounded-md bg-white shadow-lg px-4 py-5 sm:px-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <img
                      className="relative inset-0 h-16 w-16 object-cover transition duration-300 group-hover:scale-110"
                      src={comment.imageSrc}
                      alt=""
                      loading="lazy"
                      sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-bold">{comment.name}</h4>
                    <p className="mt-1 w-full">{comment.body}</p>
                    {comment.replies
                      ? comment.replies.map((reply) => (
                          <motion.div
                            className="mt-6 flex"
                            key={reply.id}
                            variants={container}
                            initial="hidden"
                            animate="visible"
                          >
                            <div className="mr-4 flex-shrink-0">
                              <img
                                className="relative inset-0 h-12 w-12 object-cover transition duration-300 group-hover:scale-110"
                                src={reply.imageSrc}
                                alt=""
                                loading="lazy"
                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold">
                                {reply.name}
                              </h4>
                              <p className="mt-1">{reply.body}</p>
                            </div>
                          </motion.div>
                        ))
                      : null}

                    <div className="mt-6 flex gap-x-3">
                      <img
                        src={comment.imageSrc}
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
                            name="subcomment"
                            id="subcomment"
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
                                <PaperClipIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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
                                                  active
                                                    ? "bg-gray-100"
                                                    : "bg-white",
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
                            type="button"
                            onClick={() =>
                              addSubcomment(
                                comment.id,
                                document.getElementById("subcomment").value
                              )
                            }
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
            </motion.div>
          ))
        : null}
    </>
  );
}
