import React from "react";

const notificationMethods = [
  { id: "Appointment", title: "Appointment" },
  { id: "Medication", title: "Medication" },
  { id: "Errands", title: "Errands" },
  { id: "Meals", title: "Meals" },
  { id: "Visit", title: "Visit" },
  { id: "Pet Care", title: "Pet Care" },
  { id: "Ride", title: "Ride" },
];

export default function CategoryPicker() {
  return (
    <div>
      <label className="text-base text-left font-semibold text-gray-900">
        Pick Category
      </label>

      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
