import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
const Footer = () => {
  const footer = [
    {
      title: "Links",
      links: ["Overons", "Social Media", "Counters", "Contact"],
    },
    {
      title: "Company",
      links: ["Terms & Conditions", "Privacy Policy", "Contact"],
    },
    {
      title: "Get in touch",
      links: [
        "Crechterwoord K12 182 DK Alknjkcb",
        "085-132567",
        "info@payme.net",
      ],
    },
  ];
  return (
    <section className="min-h-[950px] pt-[175px] bg-footer pb-7">
      <div className="text-center ">
        <h1 className="mb-16 font-extrabold text-5xl sm:leading-[75px] sm:text-[62px] text-gradient ">
          Do you want to step in to the <br />
          future before others
        </h1>
        <Link href={"#"} className="p-5 border border-white">
          Request Early Access
        </Link>
      </div>
      <div className="section flex my-48  justify-center  sm:justify-between flex-wrap">
        <div className="mb-16 text-center sm:text-left flex flex-col items-center justify-center sm:block">
          <Image src={logo} alt={"logo"} width={120} height={32} />
          <p className="mt-6  text-sm">
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex xl:gap-40 lg:gap-30 flex-wrap gap-20 justify-between">
          {footer.map((item) => (
            <div key={item.title}>
              <p className="mb-9 font-bold">{item.title}</p>
              <ul className="flex flex-col gap-8 text-sm">
                {item.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm">© 2021 GPT-3. All rights reserved.</p>
    </section>
  );
};

export default Footer;
