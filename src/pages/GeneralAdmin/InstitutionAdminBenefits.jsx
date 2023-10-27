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

const benefitsResourcesData = [
  {
    ID: 1,
    Name: "Company Gym Membership",
    Type: "Benefit",
    Description:
      "A free or discounted gym membership for employees to promote physical well-being.",
    EligibilityCriteria: "All full-time employees",
    HowToApply: "Contact HR for the gym membership form.",
    Timelines: "Approval within 5 business days",
    ID_Category: 1,
  },
  {
    ID: 2,
    Name: "Health Screenings",
    Type: "Resource",
    Description:
      "Regular health check-ups and screenings available at the company's health center.",
    EligibilityCriteria: "All employees",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 1,
  },
  {
    ID: 3,
    Name: "Nutrition Workshops",
    Type: "Resource",
    Description:
      "Monthly workshops on balanced diets, supplements, and healthy eating habits.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 1,
  },
  {
    ID: 4,
    Name: "Mental Wellness Sessions",
    Type: "Benefit",
    Description: "Access to licensed therapists and counseling sessions.",
    EligibilityCriteria: "All employees and their immediate family",
    HowToApply: "Book through the company's health portal.",
    Timelines: "Immediate access upon request",
    ID_Category: 2,
  },
  {
    ID: 5,
    Name: "Stress Relief Workshops",
    Type: "Resource",
    Description:
      "Workshops on stress management, meditation, and relaxation techniques.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 2,
  },
  {
    ID: 6,
    Name: "Mindfulness Retreats",
    Type: "Benefit",
    Description:
      "Annual company-sponsored retreats focused on mindfulness and well-being.",
    EligibilityCriteria: "All employees",
    HowToApply: "Apply through HR for slot allocation.",
    Timelines: "Announced annually",
    ID_Category: 2,
  },
  {
    ID: 7,
    Name: "Senior Care Assistance",
    Type: "Resource",
    Description:
      "Resources to help manage senior care, including finding facilities and caregivers.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 3,
  },
  {
    ID: 8,
    Name: "Child Care Facilities",
    Type: "Benefit",
    Description:
      "On-site child care facilities or subsidies for external child care services.",
    EligibilityCriteria: "All full-time employees",
    HowToApply: "Contact HR for details.",
    Timelines: "As per availability",
    ID_Category: 3,
  },
  {
    ID: 9,
    Name: "Caregiver Support Groups",
    Type: "Resource",
    Description:
      "Support groups for employees who are caregivers, to share experiences and advice.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 3,
  },
  {
    ID: 10,
    Name: "Flexible Working Hours",
    Type: "Benefit",
    Description:
      "Allows employees to adjust their work schedule for better work-life balance.",
    EligibilityCriteria: "Employees with over 6 months tenure",
    HowToApply: "Submit a request through the HR portal.",
    Timelines: "Review within 7 business days",
    ID_Category: 4,
  },
  {
    ID: 11,
    Name: "Remote Work Opportunities",
    Type: "Benefit",
    Description: "Opportunities to work remotely for better flexibility.",
    EligibilityCriteria: "Based on job role and manager's discretion",
    HowToApply: "Discuss with direct manager.",
    Timelines: "Varies by department",
    ID_Category: 4,
  },
  {
    ID: 12,
    Name: "Team Building Activities",
    Type: "Resource",
    Description:
      "Regular team outings and activities to foster collaboration and relaxation.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 4,
  },
  {
    ID: 13,
    Name: "Legal Consultation",
    Type: "Benefit",
    Description:
      "Access to legal professionals for consultation on personal matters.",
    EligibilityCriteria: "All full-time employees",
    HowToApply: "Schedule a session through the company portal.",
    Timelines: "Immediate access upon request",
    ID_Category: 5,
  },
  {
    ID: 14,
    Name: "Emergency Loan Assistance",
    Type: "Benefit",
    Description: "Short-term loans for employees facing financial hardships.",
    EligibilityCriteria: "Employees with over 1-year tenure",
    HowToApply: "Submit a loan request form to the finance department.",
    Timelines: "Approval within 10 business days",
    ID_Category: 5,
  },
  {
    ID: 15,
    Name: "Financial Planning Workshops",
    Type: "Resource",
    Description:
      "Workshops on financial planning, retirement planning, and investment.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 5,
  },
  {
    ID: 16,
    Name: "Food Pantry Access",
    Type: "Resource",
    Description: "Access to the company's food pantry for essential groceries.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 6,
  },
  {
    ID: 17,
    Name: "Housing Assistance",
    Type: "Benefit",
    Description:
      "Financial assistance or partnerships with housing providers for discounted rates.",
    EligibilityCriteria: "Employees based on income bracket",
    HowToApply: "Contact HR for more details.",
    Timelines: "Upon availability",
    ID_Category: 6,
  },
  {
    ID: 18,
    Name: "Clothing Donations",
    Type: "Resource",
    Description:
      "Platform to donate and receive clothing items within the company.",
    EligibilityCriteria: "NA",
    HowToApply: "NA",
    Timelines: "NA",
    ID_Category: 6,
  },
  {
    ID: 19,
    Name: "Family and Medical Leave Act (FMLA)",
    Type: "Benefit",
    Description:
      "The FMLA entitles eligible employees to take up to 12 workweeks of unpaid, job-protected leave in a 12-month period for specified family and medical reasons, or for any qualifying exigency arising out of the fact that a covered military member is on active duty, or has been notified of an impending call or order to active duty, in support of a contingency operation. Additionally, up to 26 workweeks of leave during a single 12-month period to care for a covered servicemember recovering from a serious injury or illness.",
    EligibilityCriteria:
      "Employees are eligible if they have worked for their employer for at least 12 months, have 1,250 hours of service over the previous 12 months, and work at a location where the company employs 50 or more employees within 75 miles.",
    HowToApply:
      "Contact your HR department to initiate the process and to provide necessary documentation for your leave request.",
    Timelines:
      "Generally, employees should give at least 30 days’ notice when the leave is foreseeable. In cases of unexpected or sudden conditions, notice should be given as soon as possible.",
    ID_Category: 5,
  },
];

export default function InstitutionAdminBenefits() {
  const { ID_category } = useParams();
  const categoryId = parseInt(ID_category, 10);
  const filteredData = benefitsResourcesData.filter(
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
