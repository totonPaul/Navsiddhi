import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How NEP 2020 Promotes Practical Learning and the Importance of Programming and Coding",
    paragraph:
      "The National Education Policy (NEP) 2020 marks a transformative shift in India’s education system, emphasizing the need for practical learning and skill development. Among its various reforms, NEP 2020 highlights the integration of programming and coding into the curriculum from an early age. By fostering a hands-on approach to learning, NEP aims to equip students with essential skills needed in the digital age. The policy promotes coding as a core component of education, ensuring that students not only learn theoretical concepts but also apply them practically, preparing them for the demands of a technology-driven world.",
    image: "/images/blog/education/1.jpg",
    author: {
      name: "Sudeep Paul",
      image: "/images/blog/author-nep-coding.png",
      designation: "Software Engineer",
    },
    tags: ["education", "coding", "NEP"],
    publishDate: "10th August 2024",
  }
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
