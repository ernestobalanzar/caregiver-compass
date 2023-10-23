import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ModalConditions(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.IsOpen);
  }, [props.IsOpen]);

  const closeModal = () => {
    setOpen(false);
    props.onClose();
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
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

        <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
          <div className="flex min-h-full sm:py-10  justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter condition name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="intro"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Intro
                    </label>
                    <textarea
                      name="intro"
                      id="intro"
                      rows="3"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter a brief introduction"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="5"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter a detailed description"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Source
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="5"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter a detailed description"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={closeModal}
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      Insert Illness
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
