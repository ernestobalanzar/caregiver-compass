import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageInstitutionEmployees() {
  const [institution, setInstitution] = useState({
    name: "",
    address: "",
    mainContact: "",
    phoneNumber: "",
    employees: 0,
    id: null,
    employeesObj: [
      {
        ID: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "+123-456-7890",
        active: true,
      },
      {
        ID: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phoneNumber: "+123-456-7891",
        active: true,
      },
      {
        ID: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phoneNumber: "+123-456-7892",
        active: false,
      },
      {
        ID: 4,
        name: "Bob Martin",
        email: "bob.martin@example.com",
        phoneNumber: "+123-456-7893",
        active: true,
      },
      {
        ID: 5,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        phoneNumber: "+123-456-7894",
        active: false,
      },
      {
        ID: 6,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        phoneNumber: "+123-456-7895",
        active: true,
      },
      {
        ID: 7,
        name: "Edward Cullen",
        email: "edward.cullen@example.com",
        phoneNumber: "+123-456-7896",
        active: true,
      },
      {
        ID: 8,
        name: "Fiona Apple",
        email: "fiona.apple@example.com",
        phoneNumber: "+123-456-7897",
        active: false,
      },
      {
        ID: 9,
        name: "George Orwell",
        email: "george.orwell@example.com",
        phoneNumber: "+123-456-7898",
        active: true,
      },
    ],
  });
  return (
    <div className="px-8 sm:px-6 lg:px-8 shadow-lg mt-8 mb-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            List of employees in this institution.
          </p>
        </div>
        <div className="flex mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="  rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Employee
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root mb-4">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mb-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Active/Synced
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {institution.employeesObj.map((employee) => (
                    <tr key={employee.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {employee.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {employee.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {employee.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {employee.active ? "Active" : "Inactive"}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`#`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                          <span className="sr-only">, {employee.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
