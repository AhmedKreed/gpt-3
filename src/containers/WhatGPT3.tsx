import Feature from "@/components/Feature";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      page: any;
    }
  }
}
const WhatGPT3 = () => {
  const features = [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];
  return (
    <page id="What is GPT?" name="What is GPT?">
      <section className="w-full sm:section mb-52">
        <div className="p-10 gpt3__whatgpt3 flex flex-col gap-28">
          <div className="flex justify-between gap-5 flex-wrap pt-3">
            <Feature
              title={"What is GPT-3"}
              text={
                "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
              }
              font={true}
            />
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-gradient font-extrabold text-3xl sm:text-[34px] max-w-[470px]">
              The possibilities are beyond your imagination
            </h1>
            <p
              className="text-sub-text font-medium leading-8 max-md:w-full "
              style={{ direction: "rtl" }}
            >
              Explore The Library
            </p>
          </div>
          <div className="flex items-center justify-center gap-11 max-lg:flex-wrap max-md:flex-col">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-12 max-lg:basis-[45%] "
              >
                <Feature
                  title={feature.title}
                  text={feature.text}
                  font={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </page>
  );
};

export default WhatGPT3;
