// import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const EventPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events and Activities"
        description="Through this page, You can keep yourself updated with the latest events and activities associated with Navsiddhi Group"
      />
      {/* <AboutSectionOne />  */}
      <AboutSectionTwo />
    </>
  );
};

export default EventPage;
