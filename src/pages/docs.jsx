import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Container } from "../components/Container";
import { PlusIcon } from "@heroicons/react/20/solid";

const statuses = {
  Complete: "text-green-700 bg-green-50 ring-green-600/20",
  "In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const projects = [
  {
    id: 1,
    name: "Medical History & Current Medications",
    href: "#",
    status: "Complete",
    createdBy: "Tom Cook",
    dueDate: "March 17, 2023",
    dueDateTime: "2023-03-17T00:00Z",
  },
  {
    id: 2,
    name: "Daily Care Routine",
    href: "#",
    status: "In progress",
    createdBy: "Tom Cook",
    dueDate: "May 5, 2023",
    dueDateTime: "2023-05-05T00:00Z",
  },
  {
    id: 3,
    name: "Emergency Contact Information",
    href: "#",
    status: "In progress",
    createdBy: "Tom Cook",
    dueDate: "May 25, 2023",
    dueDateTime: "2023-05-25T00:00Z",
  },
  {
    id: 4,
    name: "Personal Preferences & Needs",
    href: "#",
    status: "In progress",
    createdBy: "Tom Cook",
    dueDate: "June 7, 2023",
    dueDateTime: "2023-06-07T00:00Z",
  },
  {
    id: 5,
    name: "Legal & Financial Documents",
    href: "#",
    status: "Archived",
    createdBy: "Tom Cook",
    dueDate: "June 10, 2023",
    dueDateTime: "2023-06-10T00:00Z",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="py-5 sm:py-5"></div>
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Documents
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            In the Document Vault section, users have a dedicated space to
            securely store (HIPAA compliant) and manage vital documents
            pertaining to both caregivers and patients. Whether it's medical
            histories, daily care routines, emergency contacts, or any essential
            paperwork, the vault ensures easy access and organization.
            Prioritizing privacy and data protection, this feature offers peace
            of mind, knowing that all critical information is safeguarded and at
            your fingertips whenever needed.
          </p>
        </div>
        <div className="relative flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Add new Document
          </button>
        </div>
      </Container>
      <div className="py-10 sm:py-10"></div>
      <Container className={"bg-white"}>
        <ul role="list" className="divide-y divide-gray-100">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between gap-x-6 py-5"
            >
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {project.name}
                  </p>
                  <p
                    className={classNames(
                      statuses[project.status],
                      "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {project.status}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p className="whitespace-nowrap">
                    Due on{" "}
                    <time dateTime={project.dueDateTime}>
                      {project.dueDate}
                    </time>
                  </p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="truncate">Created by {project.createdBy}</p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <a
                  href={project.href}
                  className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                >
                  Download<span className="sr-only">, {project.name}</span>
                </a>
                <Menu as="div" className="relative flex-none">
                  <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Edit
                            <span className="sr-only">, {project.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Move
                            <span className="sr-only">, {project.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Delete
                            <span className="sr-only">, {project.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
