import Link from "next/link";

const CTA = () => {
  return (
    <section className="section my-40">
      <div className="bar-gradient rounded-xl min-h-44 flex items-center justify-between px-11 py-6 max-md:flex-col">
        <div className="text-black max-md:text-center">
          <p className="text-xs leading-8 ">
            Request Early Access to Get Started
          </p>
          <h1 className="font-extrabold text-2xl leading-[45px] mb-5 max-sm:text-[22px] max-sm:leading-10">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <Link
          href={"#"}
          className="px-11 py-4 font-bold text-lg bg-black rounded-[40px] text-center"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA;
