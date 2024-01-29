import { dropbox, atlassian, google, slack, shopify } from "@/assets";
import Image from "next/image";
const Brand = () => {
  const logos = [google, slack, atlassian, dropbox, shopify];
  return (
    <div className="w-fit mx-auto mt-16 mb-24 flex gap-12 justify-center flex-wrap">
      {logos.map((logo, index) => (
        <Image key={index} src={logo} alt={"logo"}></Image>
      ))}
    </div>
  );
};

export default Brand;
