import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Elm St, Springfield, IL",
    insurance: "BlueCross BlueShield",
    subscription: "Premium Access",
    institution: "HealthCare Corp",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Maple Ave, Shelbyville, IL",
    insurance: "UnitedHealth",
    subscription: "Free Access",
    institution: null,
  },
  // ... (The rest of the previous 10 users)
  {
    id: 11,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    address: "1010 Binary Blvd, Techville, CA",
    insurance: "Aetna",
    subscription: "Institutional Access",
    institution: "Tech Innovators Inc.",
  },
  {
    id: 12,
    name: "Bob Wilson",
    email: "bob.w@example.com",
    address: "333 Triple St, Tripleton, TX",
    insurance: "Kaiser Permanente",
    subscription: "Free Access",
    institution: null,
  },
  {
    id: 13,
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    address: "789 Snoopy St, Cartoonville, WA",
    insurance: "Cigna",
    subscription: "Premium Access",
    institution: "Cartoon Corp",
  },
  {
    id: 14,
    name: "Daisy Miller",
    email: "daisy.m@example.com",
    address: "654 Petal Pl, Flowerfield, NY",
    insurance: "Humana",
    subscription: "Institutional Access",
    institution: "Nature Enterprises",
  },
  {
    id: 15,
    name: "Edward Stark",
    email: "edward.s@example.com",
    address: "1001 Iron Ave, Industry City, OH",
    insurance: "Centene",
    subscription: "Premium Access",
    institution: "Metallic Industries Inc.",
  },
  {
    id: 16,
    name: "Faye Valentine",
    email: "faye.v@example.com",
    address: "272 Spaceport Way, Futuretown, NV",
    insurance: "WellCare",
    subscription: "Free Access",
    institution: null,
  },
  {
    id: 17,
    name: "George Lucas",
    email: "george.l@example.com",
    address: "77 Galaxy Rd, Starworld, CA",
    insurance: "Molina Healthcare",
    subscription: "Institutional Access",
    institution: "Galactic Films",
  },
  {
    id: 18,
    name: "Hannah Montana",
    email: "hannah.m@example.com",
    address: "888 Popstar Path, Musicville, TN",
    insurance: "Ambetter",
    subscription: "Premium Access",
    institution: "Tune Studios",
  },
  {
    id: 19,
    name: "Ian Fleming",
    email: "ian.f@example.com",
    address: "007 Spy St, Adventureland, UK",
    insurance: "Anthem",
    subscription: "Free Access",
    institution: null,
  },
  {
    id: 20,
    name: "Julia Roberts",
    email: "julia.r@example.com",
    address: "101 Hollywood Blvd, Movietown, CA",
    insurance: "Bright Health",
    subscription: "Institutional Access",
    institution: "Cinema Central Corp",
  },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
              Email
            </th>
            <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
              Address
            </th>
            <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
              Insurance
            </th>
            <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
              Subscription
            </th>
            <th className="py-3 px-3 text-left text-sm font-semibold text-gray-900">
              Institution
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">
                {user.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {user.email}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {user.address}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {user.insurance}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {user.subscription}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {user.institution || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
