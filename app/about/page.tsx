import Header from "@/components/header";
import React from "react";

const Page = () => {
  return (
    <main className="relative min-h-screen px-5">
      <Header />

      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto py-5 md:py-10 text-center">
        <h1 className="text-3xl font-bold">
          About Indian Photobiology Society
        </h1>
        <p className="mt-2 text-justify">
          The Indian Photobiology Society (IPS), a prestigious scientific
          organization, has been at the forefront of advancing photobiology
          research and education in India since its inception in 1964. Through
          its unwavering commitment to scientific inquiry, the IPS has fostered
          a vibrant community of researchers, educators, and industry
          professionals. The society&apos;s diverse range of activities,
          including international conferences, workshops, and symposia, provides
          a platform for the exchange of cutting-edge research and the
          dissemination of knowledage. The IPS organises virtual monthly science
          talk; publishes Newsletter; collaborates state-level, national,
          international seminars and students competitions in colleges,
          universities. By promoting interdisciplinary collaborations and
          nurturing young talent, the IPS plays a pivotal role in shaping the
          future of photobiology in India and globally.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto py-5 md:py-10 text-center">
        <h1 className="text-3xl font-bold">About the symposium</h1>
        <p className="mt-2 text-justify">
          The forthcoming symposium, "Sustainable Technologies - The Way
          Forward," is poised to convene experts, innovators, and policymakers
          to deliberate on the trajectory of sustainable development. This event
          will spotlight keynote addresses from prominent figures in the realms
          of renewable energy, sustainable agriculture, and waste management,
          underscoring the imperative of embracing sustainable technologies to
          counter climate change and environmental degradation. Participants
          will actively engage in panel discussions and workshops centered on
          the latest breakthroughs in clean energy, smart technologies, and
          resource-efficient practices. The symposium will accentuate
          collaboration across sectors to expedite the adoption of innovative
          solutions that foster sustainability. Attendees will be afforded the
          opportunity to share insights, exchange ideas, and network with
          industry leaders, cultivating partnerships that can catalyze impactful
          change. In the end, the symposium aspires to inspire action and
          commitment toward a sustainable future, showcasing how technology can
          serve as a potent tool in constructing resilient communities and
          safeguarding our planet.
        </p>
      </div>

      <img
        src="/doodle.svg"
        alt="soodles"
        className="absolute top-0 left-0 z-0 h-screen object-cover w-full"
      />
    </main>
  );
};

export default Page;
