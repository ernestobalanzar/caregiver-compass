import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery().get("search");
  const [filteredInstitutionData, setFilteredInstitutionData] = useState([]);
  const [filteredLocalData, setFilteredLocalData] = useState([]);
  const [filterBy, setFilterBy] = useState("all"); // 'all', 'institution', 'local'

  useEffect(() => {
    // Filtering the institution data
    setFilteredInstitutionData(
      benefitsResourcesData.filter(
        (item) =>
          item.Name.toLowerCase().includes(query.toLowerCase()) ||
          item.Description.toLowerCase().includes(query.toLowerCase())
      )
    );

    // Filtering the local data
    setFilteredLocalData(
      localresourcesBenefits.filter(
        (item) =>
          item.Name.toLowerCase().includes(query.toLowerCase()) ||
          item.Description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Search Results for "{query}"
      </h1>

      {/* Refine search */}
      <div className="mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            filterBy === "all"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
          onClick={() => setFilterBy("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterBy === "institution"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
          onClick={() => setFilterBy("institution")}
        >
          Institution
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterBy === "local"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
          onClick={() => setFilterBy("local")}
        >
          Local Resource
        </button>
      </div>

      {filterBy !== "local" &&
        filteredInstitutionData.map((item) => (
          <div key={item.ID} className="p-4 bg-white rounded shadow mb-4">
            <h2 className="font-medium text-lg mb-2">
              {item.Name} (Institution)
            </h2>
            <p className="text-gray-600">{item.Description}</p>
            <Link
              to={`/detailsbenefit?id=${item.ID}&type=institution`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}

      {filterBy !== "institution" &&
        filteredLocalData.map((item) => (
          <div key={item.ID} className="p-4 bg-white rounded shadow mb-4">
            <h2 className="font-medium text-lg mb-2">{item.Name} (Local)</h2>
            <p className="text-gray-600">{item.Description}</p>
            <Link
              to={`/detailsbenefit?id=${item.ID}&type=local`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
    </div>
  );
}
