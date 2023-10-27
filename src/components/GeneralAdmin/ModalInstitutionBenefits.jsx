import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ModalInstitutionBenefits(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.IsOpen);
  }, [props.IsOpen]);

  const closeModal = () => {
    setOpen(false);
    props.onClose();
  };

  // State for the form data
  const [formData, setFormData] = useState({
    Name: "",
    Type: "",
    Description: "",
    Eligibility_Criteria: "",
    How_to_Apply: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);

    // Reset the form state
    setFormData({
      Name: "",
      Type: "",
      Description: "",
      Eligibility_Criteria: "",
      How_to_Apply: "",
    });
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
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Type
                    </label>
                    <select
                      id="name"
                      name="Type"
                      value={formData.Type}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="Financial">-Select type-</option>
                      <option value="Benefit">Benefit</option>
                      <option value="Resource">Resource</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      name="Description"
                      id="Description"
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
                      Eligibility
                    </label>
                    <textarea
                      name="Eligibility_Criteria"
                      id="Eligibility_Criteria"
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
                      How to apply
                    </label>
                    <textarea
                      name="How_to_Apply"
                      id="How_to_Apply"
                      rows="5"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter a detailed description"
                    ></textarea>
                  </div>
                  {/* You can replicate the above structure for other form fields like Type, Description, etc. */}

                  <div className="mt-4">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
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
