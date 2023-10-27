import React, { useState, Fragment } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Physical Health",
    initials: "PH",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    id: 2,
    name: "Mental Health",
    initials: "MH",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    name: "Care Management",
    initials: "CH",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    name: "Work | Life",
    initials: "WL",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    id: 5,
    name: "Financial | Legal",
    initials: "FL",
    href: "#",
    members: 8,
    bgColor: "bg-blue-500",
  },
  {
    id: 6,
    name: "Basic Needs",
    initials: "BN",
    href: "#",
    members: 8,
    bgColor: "bg-red-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const solutions = [
  { name: "Cofiguration", href: "#" },
  { name: "Engagement", href: "#" },
  { name: "Security", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Automations", href: "#" },
];

export default function LocalResources() {
  const [selectedState, setSelectedState] = useState("All");
  const uniqueStates = [
    "All",
    "Wisconsin",
    "Illinois",
    "Minnesota",
    "Michigan",
    "Texas",
    "California",
    "New York",
    "North Carolina",
  ];
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">
        Configure Benefits and Resources by State
      </h2>
      <div className="mb-4 w-full">
        <label
          htmlFor="stateFilter"
          className="block text-sm font-medium text-gray-700"
        >
          Filter by State
        </label>
        <select
          id="stateFilter"
          name="stateFilter"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {uniqueStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link
                  to={`/localresourcesbenefits/${project.id}`}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </Link>
              </div>
              <div className="flex-shrink-0 pr-2">
                <Popover className="relative">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-50 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                      <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block p-2 hover:text-indigo-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
