import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
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

export default function InstitutionBenefits() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">
        Configure Benefits and Resources
      </h2>
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
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link
                  to={`/institutionbenefits/${project.id}`}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
