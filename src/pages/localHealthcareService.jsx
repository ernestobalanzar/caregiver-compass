import React, { useState, useEffect } from "react";
import hostpitals from "../resources/hospitals.json";
import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Container } from "../components/Container";

export default function LocalHealthcareService() {
  const [location, setLocation] = useState({
    country: "",
    state: "",
    code: "",
    county: "",
    city: "",
  });
  const [hospitalsList, setHospitals] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [googleMapsUrl, setgoogleMapsUrl] = useState("");

  const handleClickHospital = (hospital) => {
    console.log(hospital);
    setgoogleMapsUrl(
      `https://www.google.com/maps?q=${hospital.street_address}+${hospital.city}+${hospital.state}&output=embed`
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
      console.log(navigator.geolocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setgoogleMapsUrl(
        `https://www.google.com/maps?q=${lat},${lon}&output=embed`
      );

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      )
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          const country = data.address.country;
          const state = data.address.state;
          const code = data.address["ISO3166-2-lvl4"].replace("US-", "");
          const county = data.address.county;
          const city = data.address.city;
          setLocation({ country, state, code, county, city });
          const filteredHospitals = hostpitals.filter(
            (hospital) =>
              hospital.state === code &&
              hospital.county === county &&
              hospital.city === city
          );
          setHospitals(filteredHospitals);
          console.log(filteredHospitals);
        })
        .catch((error) => {
          console.error("Error fetching location data: ", error);
        });
    }

    function handleError(error) {
      console.error("Geolocation error: ", error.message);
    }
  }, []);

  return (
    <>
      <Container>
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Local Healthcare Service Providers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Welcome to the Local Healthcare Service Providers section of our
            app! In our commitment to ensuring that you have the most
            comprehensive resources at your fingertips, this section is
            dedicated to connecting you with trusted healthcare professionals
            and facilities in your area. From primary care physicians to
            specialized therapists and local clinics, our aim is to make your
            caregiver journey smoother and more informed. Browse through the
            listings, access reviews, and find the right match for your loved
            one's healthcare needs. Your peace of mind is our priority.
          </p>
        </div>
      </Container>

      <Container className={"py-10 sm:py-10"}>
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-1/2 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
            {/* Left column area */}
            <div className="border-b border-gray-200 pb-2 m-2">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Current Location
              </h3>

              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                <strong>State:</strong> {location.state},{" "}
                <strong>County:</strong> {location.county},{" "}
                <strong>City:</strong> {location.city}
              </p>
              <div>
                <form className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="keyword"
                      id="keyword"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="search by zip code"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            <ul
              role="list"
              className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-2"
            >
              {hospitalsList.map((hospital) => (
                <li
                  key={hospital.hospital_id}
                  className="relative flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <CheckBadgeIcon className="h-6 w-6 flex-none rounded-full bg-gray-200" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {hospital.name}
                      </p>
                      <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        {hospital.street_address}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {hospital.county}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Bed Size {hospital.hospital_bed_size}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleClickHospital(hospital)}
                      className="rounded-full bg-indigo-200 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <ChevronRightIcon
                        className="h-5 w-5 flex-none text-gray-400 cursor-pointer"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <iframe
              className="w-full aspect-video ..."
              src={googleMapsUrl}
              allowFullScreen
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}
