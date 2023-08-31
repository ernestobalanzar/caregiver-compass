import React from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function Training() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Is ALS?
        </h1>
        <p className="mt-6 text-xl leading-8">
          Amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig’s
          Disease, is a disease that affects parts of the nervous system that
          control voluntary muscle movements (the muscles that people move at
          will, like those of the arms and legs).
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            ALS is referred to as a progressive disease, meaning the symptoms
            continue to get worse over time. People with ALS gradually lose
            strength in their muscles and become weaker, which can limit
            movement and the ability to live an independent life. As ALS
            progresses, it will eventually affect muscles that control
            breathing, as well as chewing and swallowing food. Currently, there
            is no cure for ALS. However, it's important to ask your healthcare
            provider(s) about treatment options.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How Does ALS Affect the Body?
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong> ALS
                begins in the brain and spinal cord by affecting nerve cells
                called motor neurons.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Motor neurons extend from the brain to the spinal cord and from
                the spinal cord to voluntary muscles throughout the body.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Motor neurons provide a vital line of communication between the
                brain and the muscles, which produce movements like walking,
                talking, breathing, and swallowing.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            In people with ALS, these motor neurons stop working. When this
            happens, the brain can no longer communicate with the muscles. Over
            time, the brain loses its ability to initiate and control certain
            muscle movements, resulting in progressive weakness and paralysis.
            People living with ALS may eventually need assistance with speaking,
            eating, and breathing on their own.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div class="w-full p-8 bg-white">
          <div class="rounded border border-gray-300 shadow-sm p-4 mb-4">
            <p class="text-sm font-serif italic">
              References: 1. Amyotrophic lateral sclerosis (ALS) fact sheet.
              National Institute of Neurological Disorders and Stroke website.
              https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Fact-Sheets/Amyotrophic-Lateral-Sclerosis-ALS-Fact-Sheet.
              Published June 2013. Accessed April 13, 2017. 2. What is ALS? ALS
              Association website.
              http://www.alsa.org/about-als/what-is-als.html. Accessed April 13,
              2017. 3. Who gets ALS? The ALS association
              http://webco.alsa.org/site/PageServer/?pagename=CO_1_WhoGets.html.
              Last updated May 2019. Accessed October 8, 2021. 4. What is ALS?
              ALS Therapy Development Institute website.
              http://www.als.net/what-is-als/. Accessed April 13, 2017. 5. Beghi
              E, Mennini T, Bendotti C, et al. The heterogeneity of amyotrophic
              lateral sclerosis: a possible explanation of treatment failure.
              Curr Med Chem. 2007;14(30):3185-3200. 6. Symptoms and diagnosis.
              ALS Association website.
              http://www.alsa.org/about-als/symptoms.html. Accessed April 13,
              2017. 7. Cedarbaum JM, Stambler N, Malta E, et al. The ALSFRS-R: a
              revised ALS functional rating scale that incorporates assessments
              of respiratory function. J Neurol Sci. 1999;169(1-2):13-21. 8.
              Mitchell JD, Borasio GD. Amyotrophic lateral sclerosis. Lancet.
              2007;369:2031-2041. 9. Amyotrophic lateral sclerosis: symptoms and
              causes. Mayo Clinic website.
              www.mayoclinic.org/diseases-conditions/amyotrophic-lateral-sclerosis/symptoms-causes/dxc-20247211.2016.
              Accessed March 13, 2017. 10. ALS Society of Canada [Internet].
              Toronto: ALS Canada; [cited 2018 August 15]. Pseudobulbar affect;
              [about 1 paragraph]. Available from:
              https://www.als.ca/wp-content/uploads/2017/04/ALSCAN-Pseudobulbar-Affect-EN.pdf.
              11. Rutkove SB. Clinical measures of disease progression in
              amyotrophic lateral sclerosis. Neurotherapeutics.
              2015;12(2):384-393.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
