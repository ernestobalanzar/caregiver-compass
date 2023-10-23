import React from "react";

const issues = [
  {
    id: 1,
    title: "Login page not responsive",
    priority: "High",
    status: "Open",
    assignedTo: "John Doe",
    createdOn: "2023-10-01",
    lastUpdated: "2023-10-03",
  },
  {
    id: 2,
    title: "Resrouces not visible to wisonsin users",
    priority: "Medium",
    status: "In Progress",
    assignedTo: "Jane Smith",
    createdOn: "2023-10-05",
    lastUpdated: "2023-10-07",
  },
  {
    id: 3,
    title: "Signup email not sending",
    priority: "Low",
    status: "Closed",
    assignedTo: "Alice Johnson",
    createdOn: "2023-09-25",
    lastUpdated: "2023-09-26",
  },
  //... additional issues
];

export default function SupportTickets() {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
            Title
          </th>
          <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
            Priority
          </th>
          <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
            Status
          </th>
          <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
            Assigned To
          </th>
          <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
            Created On
          </th>
          <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
            Last Updated
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {issues.map((issue) => (
          <tr key={issue.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">
              {issue.title}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {issue.priority}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {issue.status}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {issue.assignedTo}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {issue.createdOn}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {issue.lastUpdated}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
