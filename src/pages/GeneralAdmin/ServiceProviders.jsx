import React, { useState } from "react";

const providers = [
  {
    ID: 1,
    State: "California",
    Name: "Golden State Healthcare",
    Address: "1234 Elm St, Los Angeles, CA 90001",
    ZipCode: "90001",
    PhoneNumber: "+123-456-7890",
    Services: ["Primary Care", "Dental", "Pediatrics"],
    Keywords: ["Family", "Dental", "Children"],
  },
  {
    ID: 2,
    State: "California",
    Name: "Sunshine Medical Center",
    Address: "5678 Oak Rd, San Francisco, CA 94102",
    ZipCode: "94102",
    PhoneNumber: "+123-456-7891",
    Services: ["Cardiology", "Neurology"],
    Keywords: ["Heart", "Brain"],
  },
  {
    ID: 3,
    State: "Texas",
    Name: "Lone Star Clinic",
    Address: "9101 Maple Ave, Dallas, TX 75201",
    ZipCode: "75201",
    PhoneNumber: "+123-456-7892",
    Services: ["Orthopedics", "Rehabilitation"],
    Keywords: ["Bones", "Recovery"],
  },
  {
    ID: 4,
    State: "Texas",
    Name: "TexMed Health Group",
    Address: "2345 Pine St, Houston, TX 77001",
    ZipCode: "77001",
    PhoneNumber: "+123-456-7893",
    Services: ["Primary Care", "Ophthalmology"],
    Keywords: ["General", "Eyes"],
  },
  {
    ID: 5,
    State: "New York",
    Name: "Empire Health Services",
    Address: "6789 Birch Blvd, New York, NY 10001",
    ZipCode: "10001",
    PhoneNumber: "+123-456-7894",
    Services: ["Dermatology", "Radiology"],
    Keywords: ["Skin", "X-ray"],
  },
  {
    ID: 6,
    State: "New York",
    Name: "Big Apple Medical",
    Address: "0123 Cedar Ln, Brooklyn, NY 11201",
    ZipCode: "11201",
    PhoneNumber: "+123-456-7895",
    Services: ["Pediatrics", "ENT"],
    Keywords: ["Children", "Throat"],
  },
  {
    ID: 7,
    State: "Wisconsin",
    Name: "Badger Health Associates",
    Address: "3456 Pineview Rd, Milwaukee, WI 53201",
    ZipCode: "53201",
    PhoneNumber: "+123-456-7896",
    Services: ["Primary Care", "Cardiology", "Mental Health"],
    Keywords: ["General", "Heart", "Psychology"],
  },
  {
    ID: 8,
    State: "Wisconsin",
    Name: "WisMed Clinic",
    Address: "7890 Lake Dr, Madison, WI 53701",
    ZipCode: "53701",
    PhoneNumber: "+123-456-7897",
    Services: ["Oncology", "Rehabilitation"],
    Keywords: ["Cancer", "Recovery"],
  },
  {
    ID: 9,
    State: "North Carolina",
    Name: "Tar Heel Medical Center",
    Address: "1234 Dogwood Ln, Charlotte, NC 28201",
    ZipCode: "28201",
    PhoneNumber: "+123-456-7898",
    Services: ["Dermatology", "Radiology", "Primary Care"],
    Keywords: ["Skin", "X-ray", "General"],
  },
  {
    ID: 10,
    State: "North Carolina",
    Name: "Carolina Health Group",
    Address: "5678 Magnolia St, Raleigh, NC 27601",
    ZipCode: "27601",
    PhoneNumber: "+123-456-7899",
    Services: ["ENT", "Neurology"],
    Keywords: ["Ear", "Brain"],
  },
];

export default function ServiceProviders() {
  const [selectedState, setSelectedState] = useState("All");

  const filteredProviders =
    selectedState === "All"
      ? providers
      : providers.filter((provider) => provider.State === selectedState);

  const uniqueStates = [
    "All",
    ...new Set(providers.map((provider) => provider.State)),
  ];

  return (
    <div>
      <div className="flex justify-between gap-4 mb-8">
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
        <button
          type="button"
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New Provider
        </button>
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Services
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keywords
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProviders.map((provider) => (
              <tr key={provider.ID}>
                <td className="px-6 py-4 whitespace-nowrap">{provider.Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {provider.Address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {provider.PhoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {provider.Services.map((service) => (
                    <span
                      key={service}
                      className="inline-block px-2 py-0.5 m-1 bg-indigo-200 rounded-full text-indigo-700 text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {provider.Keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-block px-2 py-0.5 m-1 bg-green-200 rounded-full text-green-700 text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
