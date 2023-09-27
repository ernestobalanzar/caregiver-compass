import { Fragment, useRef, useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";

import CustomMailchimpSubscribe from "./CustomMailChimp";

export default function Newsletter(props) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const postUrl = `https://mycaregivercompass.us12.list-manage.com/subscribe/post-json?u=38db3fbbb91b10009e3eb5b20&id=4bff02e009&f_id=008241e0f0`;
  //10389278d57ae59b5137348c25365dad-us12
  useEffect(() => {
    setOpen(props.IsOpen);
  }, [props.IsOpen]);

  const closeModal = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <Transition.Root key={props.IsOpen} show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
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

        <div className="fixed inset-0 z-20 overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <EnvelopeIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    ></Dialog.Title>
                    <div className="mt-2">
                      <CustomMailchimpSubscribe
                        url={postUrl}
                        closeModal={() => {
                          /* Your modal close logic here */
                          closeModal();
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
