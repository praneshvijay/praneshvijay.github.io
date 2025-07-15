// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects that I have worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-b-tech-at-iit-kharagpur",
          title: 'Started B.Tech at IIT Kharagpur',
          description: "",
          section: "News",},{id: "news-completed-project-internship-at-bial",
          title: 'Completed Project Internship at BIAL',
          description: "",
          section: "News",},{id: "news-won-gold-in-adobe-image-classification-challenge-at-inter-iit-tech-meet-2024",
          title: 'Won Gold in Adobe Image Classification Challenge at Inter IIT Tech Meet 2024...',
          description: "",
          section: "News",},{id: "news-completed-project-internship-at-oracle-bangalore",
          title: 'Completed Project Internship at Oracle, Bangalore',
          description: "",
          section: "News",},{id: "projects-image-captioning-with-model-benchmarking",
          title: 'Image Captioning with Model Benchmarking',
          description: "CS60010: Deep Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DL_A2/";
            },},{id: "projects-32-bit-risc-processor-in-verilog",
          title: '32-bit RISC processor in Verilog',
          description: "CS39001: Computer Organization Laboratory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RISC/";
            },},{id: "projects-airline-ticket-booking-and-confirmation-system",
          title: 'Airline Ticket Booking and Confirmation System',
          description: "CS29202:  Software Engineering Laboratory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/astrojet/";
            },},{id: "projects-acid-compliant-transaction-manager",
          title: 'ACID Compliant Transaction Manager',
          description: "CS30202: Database Management Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/txnmngr/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%61%6E%65%73%68%76@%6B%67%70%69%61%6E.%69%69%74%6B%67%70.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/praneshvijay", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/praneshvijay", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
