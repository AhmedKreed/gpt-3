declare global {
  namespace JSX {
    interface IntrinsicElements {
      page: any;
    }
  }
}
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "@/containers";
import { Brand, CTA, NavBar } from "@/components";
export default function Home() {
  return (
    <main className="bg-main relative overflow-hidden text-white">
      <div id="Home" className=" bg_gradient_header min-h-screen">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
