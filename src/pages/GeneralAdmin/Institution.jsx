import React from "react";
import { Link } from "react-router-dom";

const institutions = [
  {
    id: 1,
    name: "Tek Systems",
    address: "123 Caregiver Ave, HealthCity, HC 90210",
    mainContact: "John Doe",
    phoneNumber: "(123) 456-7890",
    employees: 500,
  },
  {
    id: 2,
    name: "Coca-Cola",
    address: "456 Wellness Blvd, WellTown, WT 80345",
    mainContact: "Jane Smith",
    phoneNumber: "(234) 567-8901",
    employees: 1200,
  },
  {
    id: 3,
    name: "Dell",
    address: "789 Life St, LiveCity, LC 70456",
    mainContact: "Robert Brown",
    phoneNumber: "(345) 678-9012",
    employees: 800,
  },
  {
    id: 4,
    name: "Microsoft Inc",
    address: "101 Tech Way, Nurtura, NT 60578",
    mainContact: "Emily Clark",
    phoneNumber: "(456) 789-0123",
    employees: 1500,
  },
  {
    id: 5,
    name: "Procter & Gamble",
    address: "202 Elder Ln, Aidville, AV 50689",
    mainContact: "Michael Johnson",
    phoneNumber: "(567) 890-1234",
    employees: 400,
  },
  {
    id: 6,
    name: "CaringFuture Group",
    address: "303 Future Rd, Careland, CL 40789",
    mainContact: "Sarah White",
    phoneNumber: "(678) 901-2345",
    employees: 750,
  },
  {
    id: 7,
    name: "GuardianSolutions Inc.",
    address: "404 Guardian Pl, SafeCity, SC 30870",
    mainContact: "William Turner",
    phoneNumber: "(789) 012-3456",
    employees: 2000,
  },
  {
    id: 8,
    name: "GoldenYears Technologies",
    address: "505 Gold St, YearTown, YT 20901",
    mainContact: "Anna Moore",
    phoneNumber: "(890) 123-4567",
    employees: 650,
  },
  {
    id: 9,
    name: "FamilyFirst Global",
    address: "606 Family Blvd, Firstville, FV 10928",
    mainContact: "Richard Lee",
    phoneNumber: "(901) 234-5678",
    employees: 950,
  },
  {
    id: 10,
    name: "SolaceWorks Corp.",
    address: "707 Solace Ln, WorkCity, WC 00129",
    mainContact: "Jessica Green",
    phoneNumber: "(012) 345-6789",
    employees: 1400,
  },
];

export default function Institution() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <p className="mt-2 text-sm text-gray-700">
              Active institutions in the Caregiver Compass network.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Institution
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Main Contact
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
                        #Employees
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
                    {institutions.map((institution) => (
                      <tr key={institution.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {institution.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {institution.address}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {institution.mainContact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {institution.phoneNumber}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {institution.employees}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to={`/institutiondetails/${institution.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            <span className="sr-only">
                              , {institution.name}
                            </span>
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
    </>
  );
}
