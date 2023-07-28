import { AppStoreLink } from "./AppStoreLink";
import { CircleBackground } from "./CircleBackground";
import { Container } from "./Container";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-cyan-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Let's redefine home care together
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            As we step into the future, embracing the evolving trends and
            harnessing the power of technology is no longer an option but a
            necessity. Let me introduce you to our unique caregiver system that
            marries high-tech solutions with a personal touch, offering
            long-term, sustainable care plans tailored to your needs.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
