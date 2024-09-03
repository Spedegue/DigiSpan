import Head from "next/head";
import { Inter } from "next/font/google";
import Landing from "@/components/organisms/Landing/Landing";
import Services from "@/components/organisms/Services/Services";
import Page from "@/layouts/Page";
import Projects from "@/components/organisms/Projects/Projects";
import Testimonials from "@/components/organisms/Testimonials/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Spaniel</title>
        <meta name="description" content="Digital Spaniel homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page>
        <Landing />
        <Services />
        <Projects />
        {/*  This is unfinished so I've commented it out*/}
        {/*<Testimonials />*/}
      </Page>
    </>
  );
}
