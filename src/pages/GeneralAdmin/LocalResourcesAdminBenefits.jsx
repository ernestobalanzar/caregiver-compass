import React, { useState } from "react";

import { useParams } from "react-router-dom";
import ModalInstitutionBenefits from "../../components/GeneralAdmin/ModalInstitutionBenefits";

const listBenefits = [
  {
    ID: 1,
    key: "Physical Health",
  },
  {
    ID: 2,
    key: "Mental Health",
  },
  {
    ID: 3,
    key: "Care Management",
  },
  {
    ID: 4,
    key: "Work-Life Balance",
  },
  {
    ID: 5,
    key: "Financial & Legal",
  },
  {
    ID: 6,
    key: "Basic Needs",
  },
];

const localresourcesBenefits = [
  {
    ID: 100,
    Name: "Wisconsin Family and Medical Leave Act",
    Type: "Benefit",
    Description:
      "The Wisconsin FMLA offers job-protected medical leave, similar to the federal FMLA, but has some variations in terms of duration and eligibility.",
    EligibilityCriteria:
      "Employees who have worked for the same employer for more than 52 consecutive weeks and with at least 1,000 hours in the preceding 52-week period.",
    HowToApply:
      "Contact your employer's HR department for application procedures.",
    Timelines:
      "Notify your employer at least 30 days in advance if the leave is foreseeable. Otherwise, as soon as possible.",
    ID_Category: 5,
  },
  {
    ID: 101,
    Name: "Wisconsin's Medicaid Program",
    Type: "Benefit",
    Description:
      "Provides health coverage to eligible low-income adults, children, pregnant women, elderly adults, and people with disabilities.",
    EligibilityCriteria: "Based on income, household size, and other factors.",
    HowToApply:
      "Apply online at ACCESS.wi.gov or contact your local county or tribal agency.",
    Timelines:
      "Applications are processed within 30 days for most programs, and within 90 days for disability-related Medicaid.",
    ID_Category: 1,
  },
  {
    ID: 102,
    Name: "Wisconsin Well Woman Program",
    Type: "Benefit",
    Description:
      "Provides preventive health screening services to women with little or no health insurance coverage.",
    EligibilityCriteria:
      "Women ages 45 to 64 with little or no health insurance and meet certain income guidelines.",
    HowToApply: "Contact your local Well Woman coordinating agency.",
    Timelines: "Varies depending on the coordinating agency.",
    ID_Category: 1,
  },
  {
    ID: 103,
    Name: "Wisconsin Works (W-2)",
    Type: "Benefit",
    Description:
      "A time-limited program that provides a structure and resources to build skills and work experience to achieve higher earnings.",
    EligibilityCriteria:
      "Low-income parents and pregnant women who are eligible to work in the U.S.",
    HowToApply: "Contact your local W-2 Agency.",
    Timelines: "Applications are typically processed within 30 days.",
    ID_Category: 6,
  },
  {
    ID: 104,
    Name: "Wisconsin Mental Health Services",
    Type: "Resource",
    Description:
      "Directory and information on mental health clinics, counseling services, and resources throughout the state.",
    EligibilityCriteria: "N/A",
    HowToApply:
      "Visit the Wisconsin Department of Health Services website or call the helpline.",
    Timelines: "N/A",
    ID_Category: 2,
  },
  {
    ID: 105,
    Name: "Wisconsin Home Energy Assistance Program (WHEAP)",
    Type: "Benefit",
    Description:
      "Provides assistance with heating costs, electric costs, and energy crisis situations.",
    EligibilityCriteria: "Based on income and household size.",
    HowToApply: "Apply at your local energy assistance agency.",
    Timelines: "Applications are accepted from October 1 to May 15.",
    ID_Category: 6,
  },
  {
    ID: 106,
    Name: "Wisconsin Tenant Resource Center",
    Type: "Resource",
    Description: "Offers information on tenant rights and responsibilities.",
    EligibilityCriteria: "N/A",
    HowToApply: "Visit the center's website or call for more information.",
    Timelines: "N/A",
    ID_Category: 5,
  },
  {
    ID: 107,
    Name: "Wisconsin FoodShare",
    Type: "Benefit",
    Description:
      "Helps people with limited income buy the food they need for good health.",
    EligibilityCriteria: "Based on income, assets, and certain expenses.",
    HowToApply:
      "Apply online at ACCESS.wi.gov or contact your local county or tribal agency.",
    Timelines: "Applications are typically processed within 30 days.",
    ID_Category: 6,
  },
  {
    ID: 108,
    Name: "Wisconsin Elderly Care Counseling",
    Type: "Resource",
    Description:
      "Connects seniors and their families with professionals who can provide guidance on long-term care options.",
    EligibilityCriteria: "N/A",
    HowToApply:
      "Contact the Wisconsin Department of Aging Services or visit their website.",
    Timelines: "N/A",
    ID_Category: 3,
  },
  {
    ID: 109,
    Name: "Wisconsin Employee Work-Life Seminars",
    Type: "Resource",
    Description:
      "Monthly seminars on a range of topics designed to help state employees manage the demands of work and home.",
    EligibilityCriteria: "State employees and their families.",
    HowToApply:
      "Visit the Wisconsin State Employees Union website for seminar schedules.",
    Timelines: "N/A",
    ID_Category: 4,
  },
  {
    ID: 110,
    Name: "Wisconsin State Employee Assistance Program",
    Type: "Benefit",
    Description:
      "Provides confidential counseling and referral services to help state employees address personal and work-related challenges.",
    EligibilityCriteria: "State employees and their immediate family members.",
    HowToApply: "Contact the program hotline or visit the program's website.",
    Timelines: "Immediate assistance is usually available.",
    ID_Category: 2,
  },
  {
    ID: 111,
    Name: "Wisconsin Legal Aid for Families",
    Type: "Resource",
    Description:
      "Free legal assistance to eligible low-income families facing civil legal problems.",
    EligibilityCriteria: "Based on income, assets, and type of legal problem.",
    HowToApply:
      "Contact your local legal aid office or visit the Wisconsin Legal Aid website.",
    Timelines: "Varies based on the nature of the legal issue.",
    ID_Category: 5,
  },
  {
    ID: 112,
    Name: "Wisconsin State Park Pass for Seniors",
    Type: "Benefit",
    Description:
      "Reduced-cost annual pass for state parks and recreational areas.",
    EligibilityCriteria: "Wisconsin residents age 65 and older.",
    HowToApply:
      "Visit any state park or recreational area office. Proof of age required.",
    Timelines: "Immediate, upon verification of eligibility.",
    ID_Category: 6,
  },
];

export default function LocalResourcesAdminBenefits() {
  const { ID_category } = useParams();
  const categoryId = parseInt(ID_category, 10);
  const filteredData = localresourcesBenefits.filter(
    (item) => item.ID_Category === categoryId
  );
  const filteredTitle = listBenefits.filter((item) => item.ID === categoryId);
  console.log(filteredTitle);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <ModalInstitutionBenefits IsOpen={isOpen} onClose={handleCloseModal} />
      <div className="sm:flex sm:items-center mb-8">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            {filteredTitle[0].key}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={openModal}
          >
            New Benefit | Resource
          </button>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Type
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Description
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              Eligibility
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
              How to Apply
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {filteredData.map((item) => (
            <tr key={item.ID}>
              <td className="px-4 py-3 text-sm text-gray-900">{item.Name}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{item.Type}</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {item.Description}
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {item.EligibilityCriteria}
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {item.HowToApply}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
