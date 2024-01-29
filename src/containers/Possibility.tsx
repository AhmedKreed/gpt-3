import Image from "next/image";
import possibility from "@/assets/possibility.png";

const Possibility = () => {
  return (
    <section className="section" id="Possibility">
      <div className="flex gap-3 max-md:flex-col px-10">
        <div className="basis-1/2">
          <Image src={possibility} alt={"possibility"} />
        </div>
        <div className="basis-1/2 self-end mb-10 ">
          <p className="text-[#71E5FF] leading-8 mb-3">
            Request Early Access to Get Started
          </p>
          <h1 className="text-gradient font-extrabold text-4xl">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-text leading-8 mt-6 mb-8">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-sub-text leading-8">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </section>
  );
};

export default Possibility;
