import Feature from "@/components/Feature";

const Features = () => {
  const features = [
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <section className="section mb-11" id="Features">
      <div className="flex max-lg:flex-wrap justify-between gap-11 max-lg:justify-center">
        <div className="max-w-[462px]">
          <h1 className="text-gradient font-extrabold text-3xl sm:text-4xl leading-[45px] mb-8 max-lg:text-center">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="text-sub-text max-lg:text-center mb-5">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex justify-between sm:w-[590px] first max-sm:flex-wrap max-sm:gap-10 max-sm:text-center max-sm:justify-center"
            >
              <Feature title={feature.title} text={feature.text} font={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
