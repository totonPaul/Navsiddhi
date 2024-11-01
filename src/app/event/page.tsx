// import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eVENST | Navsiddhi",
  description: "Navsiddhi",
  // other metadata
};

const EventPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events and Activities"
        description="ClickVidya Coding classes is live and admissions are going on, visit clickvidya.navsiddhi.in for more details."
      />
      {/* <AboutSectionOne />  */}
      <AboutSectionTwo />
    </>
  );
};

export default EventPage;
