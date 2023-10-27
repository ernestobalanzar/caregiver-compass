import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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

export default function detailsBenefit() {
  const query = useQuery();
  const navigate = useNavigate(); // Use the useNavigate hook here
  const id = parseInt(query.get("id"));
  const type = query.get("type");

  const [details, setDetails] = useState(null);

  useEffect(() => {
    let filteredData;

    if (type === "institution") {
      filteredData = benefitsResourcesData.find((item) => item.ID === id);
    } else if (type === "local") {
      filteredData = localresourcesBenefits.find((item) => item.ID === id);
    }

    setDetails(filteredData);
  }, [id, type]);

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleBackClick}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">{details.Name}</h1>
      <p className="mb-4">
        <strong>Type:</strong> {details.Type}
      </p>
      <p className="mb-4">
        <strong>Description:</strong> {details.Description}
      </p>
      <p className="mb-4">
        <strong>Eligibility Criteria:</strong> {details.EligibilityCriteria}
      </p>
      <p className="mb-4">
        <strong>How to Apply:</strong> {details.HowToApply}
      </p>
      {details.Timelines && (
        <p className="mb-4">
          <strong>Timelines:</strong> {details.Timelines}
        </p>
      )}
    </div>
  );
}
