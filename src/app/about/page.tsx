import AboutEducation from "@/components/About/AboutEducation";
import AboutHealthcare from "@/components/About/AboutHealthcare";
import AboutSoftware from "@/components/About/AboutSoftware";
import AboutAgriculture from "@/components/About/AboutAgriculture";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ManagingDirector from "@/components/About/ManagingDirector";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Navsiddhi",
  description: "About | Navsiddhi",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description={`
          Navsiddhi Group, founded on August 4th, 2024, in Forbesganj, Bihar, is on a mission to empower everyday people with world-class healthcare and cutting-edge technology solutions. We operate across four dynamic divisions—Education, Healthcare, Software, and Agriculture—dedicated to helping individuals reach their full potential and achieve perfection in their lives.
          Our vision is to create a future where technology, education, and healthcare are accessible to all, driving sustainable growth and preserving traditional practices.
        `}
      />
      <ManagingDirector/>
      
      <AboutEducation />
      <AboutHealthcare />
      <AboutSoftware />
      <AboutAgriculture/>
    </>
  );
};

export default AboutPage;
