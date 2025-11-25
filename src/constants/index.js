const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/lightbulb.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/lightbulb.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results with great attention to every single detail",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule without compromising quality.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Frontend Development",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Interactive Development",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Management",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
    {
      name: "Automated Development",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0 , 0],
    },
    {
      name: "Backend Integration",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Working with Lota was excellent. He quickly adapted to our existing infrastructure and made seamless modifications and integrations. His ability to collaborate effectively within established systems is truly impressive.",
      imgPath: "/images/neuLogo.svg",
      logoPath: "/images/neuLogo.svg",
      title: "Front End Engineer",
      date: "June 2025 - Present",
      responsibilities: [
        "Implemented frontend architecture using Next.js to enhance performance and scalability.",
        "Integrated backend APIs and services to enable seamless data flow and functionality.",
        "Implemented AI model integrations to enhance platform capabilities.",
      ],
    },
    {
      review:
        "Lota brought creativity and technical expertise to the team, significantly improving our frontend performance whilst accomplishing tasks with speed. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/oryzonLogo.svg",
      logoPath: "/images/oryzonLogo.svg",
      title: "Frontend Developer",
      date: "January 2025 - May 2025",
      responsibilities: [
        "Translated Figma Designs into fully responsive  and compatible web pages",
        "Created clean interactive UI components using React and Tailwind CSS.",
        "Enhanced website performance through code optimization, group reviews and best practices.",
      ],
    },
    {
      review:
        "Lota's work with Pixel Codex has been really versatile. He delivered solutions that enhanced our user's experience, product launch & met our product goals with very interesting quality.",
      imgPath: "/images/PClogo.svg",
      logoPath: "/images/PClogo.svg",
      title: "React Frontend Developer",
      date: "February 2023 - Present",
      responsibilities: [
        "Build cross-platform Single Page Applications using React.",
        "Build micro web applications for client's projects and assignments.",
        "Curate project based courses for students regarding Frontend Development.",
      ],
    },
    {
      review:
        "Lota single-handedly translated our designs into a functional web application. It's outstanding how he approaches challenges with a problem-solving mindset.",
      imgPath: "/images/AKHlogo.svg",
      logoPath: "/images/AKHicon.svg",
      title: "Front End Developer",
      date: "March 2024 - May 2024",
      responsibilities: [
        "Led the frontend development of AKH's web application, focusing on scalability.",
        "Created reusable forms and cards components for future use.",
        "Collaborated with the team to optimize UI elements, enhancing user experience.",
      ],
    }
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can't say enough good things about Lota. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Lota was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Lota was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lota's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lota is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Lota was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Lota's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Lota was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/stayweirdlota_?igsh=MTV2aDhpc2V1cWFxdw%3D%3D&utm_source=qr",
      imgPath: "/images/insta.png",
    },
    {
      name: "whatsapp",
      url: "https://wa.me/2348108253273",
      imgPath: "/images/whatsapp.png",
    },
    {
      name: "github",
      url: "https://github.com/WisdomLota",
      imgPath: "/images/github.png",
    },
    // {
    //   name: "fb",
    //   url: "https://www.facebook.com/",
    //   imgPath: "/images/fb.png",
    // },
    // {
    //   name: "x",
    //   url: "https://www.x.com/",
    //   imgPath: "/images/x.png",
    // },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/wisdom-ngaloru-26371a255",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };