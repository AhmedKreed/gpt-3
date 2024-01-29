import Image from "next/image";
import Link from "next/link";
import { b1, b2, b3, b4, b5 } from "@/assets/blog";
const Blog = () => {
  const blogs = [
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 30, 2021",
      img: b2,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 30, 2021",
      img: b3,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 30, 2021",
      img: b4,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 30, 2021",
      img: b5,
    },
  ];
  return (
    <section className="section mb-40" id="Blog">
      <h1 className="text-3xl leading-10 sm:text-[62px] font-extrabold sm:leading-[75px] max-w-[701px] text-gradient mb-28 ">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="flex gap-12 max-lg:flex-wrap justify-center ">
        <Link href={""} className="group">
          <Image src={b1} alt={"blog image"} className="sm:max-w-[418px]" />
          <div
            className={`bg-blog p-7 relative sm:max-w-[418px] h-[400px] h-f transition-all group-hover:opacity-80`}
          >
            <p className="font-bold text-[11.65px] leading-8">Sep 26, 2021</p>
            <h2 className="font-extrabold text-2xl ">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h2>
            <p className="absolute bottom-7">Read Full Article</p>
          </div>
        </Link>
        <div className=" grid gap-12 grid-cols-1 grid-rows-1 sm:grid-cols-2  sm:grid-rows-2">
          {blogs.map((blog, index) => (
            <Link key={index} href={""} className="h-full group">
              <Image src={blog.img} alt={"blog image"} />
              <div
                className={`bg-blog p-7 relative pb-0 h-[327px] transition-all group-hover:opacity-80`}
              >
                <p className="font-bold text-[11.65px] leading-8">
                  {blog.date}
                </p>
                <h2 className="font-extrabold text-xl ">{blog.title}</h2>
                <p className="absolute bottom-7">Read Full Article</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
