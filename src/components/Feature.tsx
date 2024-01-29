interface Params {
  title: string;
  text: string;
  font: boolean;
}
const Feature = ({ title, text, font }: Params) => {
  return (
    <>
      <h1
        className={` relative font-extrabold before:content-[''] leading-6 before:absolute before:w-[38px] before:h-[3px] before:bar-gradient before:top-[-10px] before:left-0 
        ${font ? "text-[24px]" : "text-18px"}`}
      >
        {title}
      </h1>
      <p className="text-text  leading-8">{text}</p>
    </>
  );
};

export default Feature;
