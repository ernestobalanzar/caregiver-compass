import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ManageInstitutionEmployees from "../../components/GeneralAdmin/ManageInstitutionEmployees";
import BillingHistor from "../../components/GeneralAdmin/BillingHistory";
import InstitutionBenefits from "../../components/GeneralAdmin/InstitutionBenefits";
import { Link } from "react-router-dom";

const institutions = [
  {
    id: 1,
    name: "Tek Systems",
    address: "123 Caregiver Ave, HealthCity, HC 90210",
    mainContact: "John Doe",
    phoneNumber: "(123) 456-7890",
    employees: 500,
    employeesObj: [],
  },
  {
    id: 2,
    name: "Coca-Cola",
    address: "456 Wellness Blvd, WellTown, WT 80345",
    mainContact: "Jane Smith",
    phoneNumber: "(234) 567-8901",
    employees: 1200,
    employeesObj: [],
  },
  {
    id: 3,
    name: "Dell",
    address: "789 Life St, LiveCity, LC 70456",
    mainContact: "Robert Brown",
    phoneNumber: "(345) 678-9012",
    employees: 800,
    employeesObj: [],
  },
  {
    id: 4,
    name: "Microsoft Inc",
    address: "101 Tech Way, Nurtura, NT 60578",
    mainContact: "Emily Clark",
    phoneNumber: "(456) 789-0123",
    employees: 1500,
    employeesObj: [],
  },
  {
    id: 5,
    name: "",
    address: "202 Elder Ln, Aidville, AV 50689",
    mainContact: "Michael Johnson",
    phoneNumber: "(567) 890-1234",
    employees: 400,
    employeesObj: [],
  },
  {
    id: 6,
    name: "CaringFuture Group",
    address: "303 Future Rd, Careland, CL 40789",
    mainContact: "Sarah White",
    phoneNumber: "(678) 901-2345",
    employees: 750,
    employeesObj: [],
  },
  {
    id: 7,
    name: "GuardianSolutions Inc.",
    address: "404 Guardian Pl, SafeCity, SC 30870",
    mainContact: "William Turner",
    phoneNumber: "(789) 012-3456",
    employees: 2000,
    employeesObj: [],
  },
  {
    id: 8,
    name: "GoldenYears Technologies",
    address: "505 Gold St, YearTown, YT 20901",
    mainContact: "Anna Moore",
    phoneNumber: "(890) 123-4567",
    employees: 650,
    employeesObj: [],
  },
  {
    id: 9,
    name: "FamilyFirst Global",
    address: "606 Family Blvd, Firstville, FV 10928",
    mainContact: "Richard Lee",
    phoneNumber: "(901) 234-5678",
    employees: 950,
    employeesObj: [],
  },
  {
    id: 10,
    name: "SolaceWorks Corp.",
    address: "707 Solace Ln, WorkCity, WC 00129",
    mainContact: "Jessica Green",
    phoneNumber: "(012) 345-6789",
    employees: 1400,
    employeesObj: [],
  },
];

/*
TABS example from MUI
*/

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailsInstitutions() {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Assuming you have a function to fetch an institution by its ID
  // let's set up a state to hold the institution data
  const [institution, setInstitution] = useState({
    name: "",
    address: "",
    mainContact: "",
    phoneNumber: "",
    employees: 0,
    id: null,
    employeesObj: [],
  });

  useEffect(() => {
    // Fetch your institution data using the ID and set it to state
    // fetchInstitutionById(id).then(data => setInstitution(data));
    const institutionObj = institutions.find(
      (institution) => institution.id == id
    );
    setInstitution(institutionObj);
    console.log(institutionObj, id);
  }, [id]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInstitution((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update your institution in the backend/database
    // After updating, you can redirect or give some feedback

    // updateInstitution(institution).then(() => {
    //   history.push('/some-route-after-updating'); // e.g., back to the list or to the details page
    // });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" grid grid-cols-4 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={institution.name}
            onChange={handleChangeInput}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={institution.address}
            onChange={handleChangeInput}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="mainContact"
            className="block text-sm font-medium text-gray-700"
          >
            Main Contact
          </label>
          <input
            id="mainContact"
            name="mainContact"
            type="text"
            value={institution.mainContact}
            onChange={handleChangeInput}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={institution.phoneNumber}
            onChange={handleChangeInput}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="employees"
            className=" text-sm font-medium text-gray-700"
          >
            Number of Employees
          </label>
          <input
            id="employees"
            name="employees"
            type="number"
            value={institution.employees}
            onChange={handleChangeInput}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="flex h-12 mr-4 justify-end col-span-3">
          <button
            type="button"
            className="mr-4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>

      <Box sx={{ width: "100%", paddingTop: "80px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Employees" {...a11yProps(0)} />
            <Tab label="Billing History" {...a11yProps(1)} />
            <Tab label="Benefits " {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ManageInstitutionEmployees />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BillingHistor />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <InstitutionBenefits />
        </CustomTabPanel>
      </Box>
    </>
  );
}
