import React from "react";

const Billing = [
  {
    InvoiceNumber: "INV-00123",
    Product: "Caregiver Premium Subscription",
    Date: "2023-04-05",
    Total: "$70.00",
    PaymentMethod: "Credit Card",
    Status: "Paid",
  },
  {
    InvoiceNumber: "INV-00124",
    Product: "Caregiver Basic Subscription",
    Date: "2023-04-15",
    Total: "$40.00",
    PaymentMethod: "PayPal",
    Status: "Pending",
  },
  {
    InvoiceNumber: "INV-00125",
    Product: "Caregiver Institutional Access",
    Date: "2023-04-22",
    Total: "$150.00",
    PaymentMethod: "Bank Transfer",
    Status: "Paid",
  },
  {
    InvoiceNumber: "INV-00126",
    Product: "Caregiver Premium Subscription",
    Date: "2023-05-05",
    Total: "$70.00",
    PaymentMethod: "Credit Card",
    Status: "Declined",
  },
  {
    InvoiceNumber: "INV-00127",
    Product: "Caregiver Basic Subscription",
    Date: "2023-05-15",
    Total: "$40.00",
    PaymentMethod: "Credit Card",
    Status: "Paid",
  },
  {
    InvoiceNumber: "INV-00128",
    Product: "Caregiver Institutional Access",
    Date: "2023-05-20",
    Total: "$300.00",
    PaymentMethod: "PayPal",
    Status: "Paid",
  },
  {
    InvoiceNumber: "INV-00129",
    Product: "Caregiver Premium Subscription",
    Date: "2023-06-05",
    Total: "$70.00",
    PaymentMethod: "Credit Card",
    Status: "Paid",
  },
  {
    InvoiceNumber: "INV-00130",
    Product: "Caregiver Basic Subscription",
    Date: "2023-06-18",
    Total: "$40.00",
    PaymentMethod: "Bank Transfer",
    Status: "Pending",
  },
  {
    InvoiceNumber: "INV-00131",
    Product: "Caregiver Institutional Access",
    Date: "2023-06-25",
    Total: "$250.00",
    PaymentMethod: "Credit Card",
    Status: "Paid",
  },
];

export default function BillingHistory() {
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
                      Invoice Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Payment Method
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {Billing.map((bill) => (
                    <tr key={bill.InvoiceNumber}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {bill.InvoiceNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bill.Product}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bill.Date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bill.Total}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bill.PaymentMethod}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bill.Status}
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
