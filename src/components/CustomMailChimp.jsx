import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomForm from "./CustomForm"; // Adjust this import if the path is different.
import jsonp from "jsonp";

const CustomMailchimpSubscribe = ({ url, closeModal }) => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const Listid = "4bff02e009";
  const key = "10389278d57ae59b5137348c25365dad-us12";

  const onValidated = async (formData) => {
    setStatus("sending");
    console.log("formData", formData);
    try {
      jsonp(
        `${url}&EMAIL=${formData.EMAIL}&FNAME=${formData.MERGE1}&LNAME=${formData.MERGE2}`,
        { param: "c" },
        (_, data) => {
          if (data.result === "success") {
            setStatus("success");
            setMessage(data.msg); // Adjust this if you want to display a specific message from the response.
          } else {
            setStatus("error");
            setMessage(data.msg);
          }
        }
      );

      // Check response and set status/message accordingly.
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <CustomForm
      status={status}
      message={message}
      onValidated={onValidated}
      closeModal={closeModal}
    />
  );
};

export default CustomMailchimpSubscribe;
