import Image from "next/image";
import people from "@/assets/people.png";
import ai from "@/assets/ai.png";
const Header = () => {
  return (
    <section className="section ">
      <div className="flex items-center min-h-[calc(100vh-140px)]">
        <div className="lg:basis-[60%] flex flex-col gap-8 h-full justify-center">
          <h1 className="text-gradient text-[60px] max-sm:text-5xl font-extrabold tracking-tight leading-tight">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-xl leading-normal text-text w-[88%] max-sm:text-base">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form action="" className="flex ">
            <input
              type="email"
              placeholder="Your Email Address"
              className=" px-8 w-3/4 rounded-l-md py-6 bg-[#052D56] outline-none"
            />
            <button className="w-1/4 rounded-r-md  bg-[#FF4820]">
              Get Started
            </button>
          </form>
          <div className="flex items-center gap-3 max-sm:flex-col ">
            <Image src={people} alt={"people"} />
            <p className="text-xs">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="self-start max-lg:hidden">
          <Image src={ai} alt={"ai image"} width={667} height={701} />
        </div>
      </div>
    </section>
  );
};

export default Header;
