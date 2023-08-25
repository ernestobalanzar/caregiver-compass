import React from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  BuildingStorefrontIcon,
  ReceiptRefundIcon,
  UsersIcon,
  HeartIcon,
  MapIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../components/Container";

const actions = [
  {
    title: "Schedule a one-on-one",
    href: "/oneOnOne",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "Schedule a one-on-one to find solace, get answers, and reaffirm that you have a community supporting you every step of the way.",
  },
  {
    title: "Training",
    href: "/training",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    description:
      "The more you learn about ALS, the better prepared you're circle will be.",
  },
  {
    title: "Chat Bot",
    href: "/bot",
    icon: ChatBubbleBottomCenterIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description: "Our fully trained AI bot is ready to answer your questions.",
  },
  {
    title: "Market Place",
    href: "/marketplace",
    icon: BuildingStorefrontIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    description: "Find the best products and services for your needs.",
  },
  {
    title: "Local Healthcare Services",
    href: "/localhealthcareservice",
    icon: MapIcon,
    iconForeground: "text-red-700",
    iconBackground: "bg-green-50",
    description: "Find the best local healthcare services near you.",
  },

  {
    title: "Financial & Legal",
    href: "/legalfinance",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description: "Be prepared with key documents and resources",
  },
  {
    title: "Care Management",
    href: "/generalresourcesform",
    icon: HeartIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    description: "Understand your care options and connect with solutions.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Resources() {
  return (
    <>
      <div className="py-5 sm:py-5"></div>
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Resources
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            This section is an essential hub designed specifically to support
            caregivers in their noble mission of providing care for our loved
            ones with special needs. This dedicated space gathers essential
            tools and valuable information all in one place, aiding caregivers
            in various facets of their duties.
          </p>
        </div>
        <div className="py-10 sm:py-10">
          <div className=" divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  actionIdx === 0
                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                    : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1
                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                    : "",
                  "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-3 ring-4 ring-white"
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    <Link to={action.href} className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
