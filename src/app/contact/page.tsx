import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Navsiddhi",
  description: "Navsiddhi",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Coming Soon!!"
      />

      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;
