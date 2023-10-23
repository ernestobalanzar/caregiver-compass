import React, { useState } from "react";
import ModalConditions from "../../components/GeneralAdmin/ModalConditions";

const conditions = [
  {
    name: "Heart disease",
    intro:
      "The leading cause of death, primarily affecting the heart and blood vessels.",
    description:
      "Heart diseases encompass a range of conditions that affect the heart. This includes diseases related to blood vessels, such as coronary artery disease, heart rhythm problems, and heart defects. Common issues involve the narrowing or blockage of blood vessels, leading to chest pain, heart attack, or stroke.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Cancer",
    intro: "A group of diseases involving abnormal cell growth.",
    description:
      "Cancer can start almost anywhere in the human body, which is made up of trillions of cells. It begins when cells grow uncontrollably, invading and damaging surrounding tissues. There are over 100 types of cancer, including breast cancer, skin cancer, lung cancer, colon cancer, and more.",
    source: "https://www.who.int/health-topics/cancer#tab=tab_1",
  },
  {
    name: "Unintentional injuries",
    intro: "Accidents and injuries that were not intended to occur.",
    description:
      "Unintentional injuries cover a wide range of incidents, such as car accidents, falls, burns, and drownings. They are unforeseen accidents that can result in minor to severe injuries or death.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Chronic lower respiratory diseases",
    intro: "Diseases affecting the lungs and breathing.",
    description:
      "This group includes conditions such as chronic obstructive pulmonary disease (COPD), bronchitis, and emphysema. They are characterized by long-term breathing problems and poor airflow, often caused by smoking or exposure to irritating gases or particulate matter.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Stroke",
    intro:
      "A medical condition where poor blood flow to the brain results in cell death.",
    description:
      "Strokes occur when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. This can be due to a blocked or burst blood vessel. It can lead to lasting brain damage, long-term disability, or even death.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Alzheimer's disease",
    intro:
      "A progressive brain disorder that affects memory, thinking, and behavior.",
    description:
      "Alzheimer's disease is the most common cause of dementia among older adults. It involves parts of the brain that control thought, memory, and language. Over time, it can seriously affect a condition's ability to carry out daily activities.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Diabetes",
    intro:
      "A chronic condition that affects how the body processes blood sugar.",
    description:
      "Diabetes occurs when the body either doesn't produce enough insulin or can't effectively use the insulin it produces. This can result in too much sugar in the blood, leading to various complications such as heart disease, nerve damage, kidney damage, and more.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Chronic liver disease and cirrhosis",
    intro: "Long-term, progressive deterioration of liver function.",
    description:
      "Liver diseases, such as hepatitis, alcoholic liver disease, and fatty liver disease, can lead to cirrhosis. Cirrhosis involves the formation of fibrous tissue in the liver, replacing the damaged cells. This can hinder the liver's ability to function properly.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Kidney disease",
    intro:
      "Conditions that affect the kidneys' ability to filter waste and excess fluids.",
    description:
      "Chronic kidney disease (CKD) means your kidneys are damaged and can't filter blood the way they should. It can be due to conditions like hypertension and diabetes. Over time, the damage can get worse, leading to kidney failure.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
  {
    name: "Influenza and pneumonia",
    intro: "Viral or bacterial infections affecting the respiratory system.",
    description:
      "Influenza (flu) is a contagious respiratory illness caused by influenza viruses. Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid. Both conditions can range from mild to severe and can lead to serious complications or death, especially in vulnerable populations.",
    source:
      "https://www.who.int/health-topics/cardiovascular-diseases/#tab=tab_1",
  },
];

function trimString(str, maxLength = 100) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

export default function Conditions() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ModalConditions IsOpen={isOpen} onClose={handleCloseModal} />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <p className="mt-2 text-sm text-gray-700">
              Here is the list of supported illnesses and conditions in our app.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={openModal}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Illness
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
                        Intro
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Source
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
                    {conditions.map((condition) => (
                      <tr key={condition.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {condition.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {trimString(condition.intro, 20)}{" "}
                          {/* Adjust the max length as per your need */}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {trimString(condition.description, 50)}{" "}
                          {/* Adjust the max length as per your need */}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {trimString(condition.source, 20)}{" "}
                          {/* Adjust the max length as per your need */}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            <span className="sr-only">, {condition.name}</span>
                          </a>
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
