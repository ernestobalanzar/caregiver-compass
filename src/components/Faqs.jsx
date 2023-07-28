import { Link } from "react-router-dom";

import { Container } from "./Container";

const faqs = [
  [
    {
      question: "What is the primary function of this caregiver system?",
      answer:
        "The primary function of the caregiver system is to provide caregivers with relevant information, tools, and resources that help them provide optimal care for their patients. It can also facilitate communication between caregivers, patients, and healthcare providers, making care coordination more efficient.",
    },
    {
      question:
        "How does the system assist in scheduling and task management for caregivers?",
      answer:
        "The system offers a comprehensive scheduling feature that allows caregivers to plan their tasks in an organized manner. Caregivers can schedule medication times, doctors' appointments, personal care tasks, and other activities. Reminders can also be set to ensure that no task is overlooked.",
    },
    {
      question:
        "Does this system provide any training or educational resources for caregivers?",
      answer:
        "Yes, the system provides an array of educational resources and training modules that can help caregivers enhance their caregiving skills and knowledge. These resources cover a wide range of topics including basic care techniques, understanding specific medical conditions, managing stress, and more.",
    },
  ],
  [
    {
      question: "How secure is the information stored in this system?",
      answer:
        "We take data privacy and security very seriously. The system employs advanced encryption methods to ensure that all user data is secure. Only authorized users can access the information in the system.",
    },
    {
      question:
        "Can the system help me track the health progress of the person I am caring for?",
      answer:
        "Yes, the system allows caregivers to record and monitor the health progress of the person they are caring for. You can track symptoms, monitor vital signs, and record any changes in health conditions over time.",
    },
    {
      question:
        "Can I use the system to communicate with healthcare professionals?",
      answer:
        "Yes, the system facilitates communication between caregivers and healthcare professionals. It allows for secure messaging, sharing of health data, and setting up virtual consultations, depending on the functionalities provided by the healthcare providers.",
    },
  ],
  [
    {
      question:
        "Is this system user-friendly for someone who is not tech-savvy?",
      answer:
        "The system is designed to be user-friendly and intuitive. Even if you're not tech-savvy, you should find it straightforward to navigate and use. We also provide user manuals and customer support to assist users who might need additional help.",
    },
    {
      question: "How does this system support caregivers' well-being?",
      answer:
        "Understanding that caregiving can be a stressful task, the system offers features aimed at supporting caregivers' well-being. This may include stress management resources, peer support forums, and information on self-care techniques.",
    },
    {
      question: "Is there a cost associated with using this caregiver system?",
      answer:
        "This depends on the specifics of the caregiver system. Some systems may offer basic features for free with premium features available at a cost. Please refer to the pricing section or contact the customer service for detailed information on the costs associated with using the system.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{" "}
            <Link
              to="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
