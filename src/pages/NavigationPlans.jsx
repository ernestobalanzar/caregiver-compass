import React, { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  PhoneIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);

  const questions = {
    "Adult Care": [
      "Do you need assistance with daily living activities?",
      "Are you looking for home care services?",
    ],
    "Care Management": [
      "Do you need help coordinating medical appointments?",
      "Do you need a care plan for a loved one?",
    ],
    "Caregiver Health": [
      "Do you experience caregiver burnout?",
      "Do you need resources for stress management?",
    ],
    "Child Care": [
      "Do you need information on child care services?",
      "Are you looking for educational resources for children?",
    ],
    "Financial Planning": [
      "Do you need help with budgeting?",
      "Are you looking for financial planning services?",
    ],
    Insurance: [
      "Do you need assistance with choosing an insurance plan?",
      "Are you looking for health insurance options?",
    ],
    Legal: [
      "Do you need legal advice for caregiving?",
      "Are you looking for information on power of attorney?",
    ],
    "Medicare And Medicaid": [
      "Do you need help understanding Medicare benefits?",
      "Are you looking for Medicaid eligibility information?",
    ],
  };

  const descriptions = {
    "Adult Care":
      "Adult care provides assistance with daily living activities for elderly or disabled individuals, including home care services.",
    "Care Management":
      "Care management helps coordinate medical appointments and create care plans for loved ones.",
    "Caregiver Health":
      "Caregiver health resources help manage stress and prevent burnout for those taking care of others.",
    "Child Care":
      "Child care resources provide information on child care services and educational resources for children.",
    "Financial Planning":
      "Financial planning assists with budgeting and provides financial planning services for caregivers and their families.",
    Insurance:
      "Insurance resources help choose the right insurance plan and provide information on health insurance options.",
    Legal:
      "Legal resources offer advice on caregiving-related legal matters, including power of attorney.",
    "Medicare And Medicaid":
      "Medicare and Medicaid resources help understand benefits and eligibility information for these programs.",
  };

  const categories = Object.keys(questions);

  const handleAnswerChange = (e, category, question) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [category]: {
        ...prevAnswers[category],
        [question]: value,
      },
    }));
  };

  const handleSubmit = () => {
    // Simple logic to determine the result based on answers
    const resources = Object.keys(answers).filter((category) =>
      Object.values(answers[category]).includes("yes")
    );
    setResult(resources);
  };

  const handleNext = () => {
    if (step < categories.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full mx-auto p-8">
      {!result ? (
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">Caregiver Questionnaire</h1>
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">{categories[step]}</h2>
            {questions[categories[step]].map((question) => (
              <div key={question} className="mb-2">
                <label className="block text-lg mb-1">{question}</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleAnswerChange(e, categories[step], question)
                  }
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              onClick={handleBack}
              disabled={step === 0}
            >
              Back
            </button>
            {step < categories.length - 1 ? (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className=" mt-6 p-4 border border-green-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">HOLA Mundo:</h2>
          <ul className="timeline">
            {result.map((resource, index) => (
              <li
                className={
                  index % 2 === 0
                    ? "time-line-container left-container"
                    : "time-line-container right-container"
                }
                key={resource}
              >
                <div className="icon-box">
                  <UserGroupIcon />
                </div>
                <div className="text-box">
                  <h2 className="text-lg font-semibold">{resource}</h2>
                  <p>{descriptions[resource]}</p>
                </div>
                <span
                  className={
                    index % 2 === 0
                      ? "left-container-arrow"
                      : "right-container-arrow"
                  }
                ></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
