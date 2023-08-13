import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../components/Container";

export default function Help() {
  return (
    <Container>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Help Desk
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Welcome to the Help Desk, your central hub for assistance and
            information. Navigating the world of caregiving can be intricate,
            and we're here to ensure you have a smooth experience with our app.
            Whatever your query, we've got a dedicated team ready to assist
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-lg space-y-16">
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <ChatBubbleLeftRightIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Sales support
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Whether you're considering an upgrade or have questions about
                our various offerings, our Sales Support is here to guide you.
                From understanding package details to facilitating purchases,
                we're committed to ensuring you find the right fit for your
                caregiving needs..
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <BugAntIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Bug reports
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Encountered a glitch? Help us improve by reporting any issues
                you come across. Our Bug Report section is dedicated to
                identifying and rectifying problems to enhance your user
                experience. Your feedback is invaluable, and we appreciate your
                collaboration in making our app better each day..
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Report a bug <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <ComputerDesktopIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Technical support
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Facing technical challenges? Our Tech Support team is adept at
                resolving any software or compatibility issues. Whether it's a
                login problem, sync issue, or any technical setback, we're here
                to troubleshoot and guide you through.
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Join our Discord <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
