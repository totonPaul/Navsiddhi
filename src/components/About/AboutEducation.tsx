import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutEducation = () => {
  const List = ({ text }) => (
    <p className="mb-3 flex items-center text-lg font-medium text-body-color">
      <span className="mr-3 flex h-[24px] w-[24px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-12 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-12 dark:border-white/[.15] md:pb-16 lg:pb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Education Unit"
                paragraph="The education wing is committed to providing cutting-edge learning opportunities. We offer comprehensive courses in computer programming and software engineering , designed to equip individuals with the skills needed for the rapidly evolving tech landscape. Our curriculum is crafted to foster practical knowledge and hands-on experience, preparing students for successful careers in these dynamic fields."
                mb="24px" // Reduced margin-bottom
              />

              <div
                className="mb-8 max-w-[570px] lg:mb-12" // Reduced margin-bottom
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Low cost" />
                    <List text="Practical Learning" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Programming" />
                    <List text="Artificial Intelligence" />
                    <List text="Software Development" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[200px] px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0" style={{ height: 'auto', width: '100%' }}>
                <Image
                  src="/images/slideshow/education.png"
                  alt="about-image"
                  width={500}  // Set a fixed width
                  height={300} // Reduced height
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                {/* <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  width={500}  // Set a fixed width
                  height={300} // Reduced height
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
