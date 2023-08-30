import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UsersIcon } from "@heroicons/react/24/outline";

export default function InviteMember(props) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const showDescription = (role) => {
    setRole(role);
    switch (role) {
      case "Admin":
        setDescription(
          "Grants full administrative control, including management of documents, calendars, and medications. Can also invite new members to the circle."
        );
        break;
      case "Caregiver":
        setDescription(
          "Permits scheduling on the shared calendar and viewing of essential documents and medications. No administrative permissions."
        );
        break;
      case "Supporter":
        setDescription(
          "Limited access—allows viewing of calendar and training materials, along with the ability to comment in the home section. Ideal for friends and family"
        );
        break;
      default:
        setDescription("");
        break;
    }
  };

  useEffect(() => {
    setOpen(props.IsOpen);
  }, [props.IsOpen]);

  const cancelButtonRef = useRef(null);

  const closeModal = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <Transition.Root key={props.IsOpen} show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-4">
                <div>
                  <div className="mx-auto flex h-12 w-16 items-center justify-center rounded-full bg-green-100">
                    <UsersIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Invite a new member
                    </Dialog.Title>
                    <div className="mt-2 pb-10">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="city"
                            className="block text-sm text-left font-medium leading-6 text-gray-900"
                          >
                            Name:
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-sm text-left font-medium  leading-6 text-gray-900"
                          >
                            Email:
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="last-name"
                            className="block text-sm text-left font-medium leading-6 text-gray-900"
                          >
                            Role:
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              onChange={(e) => showDescription(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>-Select Role-</option>
                              <option>Admin</option>
                              <option>Caregiver</option>
                              <option>Supporter</option>
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-6">
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
