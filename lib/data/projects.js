import exp_tracker_images from "@/lib/images/exp_tracker";
import bodycult_images from "@/lib/images/bodycult";
import movies_images from "@/lib/images/movies";

const projects = [
  {
    name: "Movies website (In progress)",
    description:
      "Website for searching movies and tv shows and storing for collection. This website is created with Next js. I used TMDB API to fetch data. I am still working on this project and I am planning to add more features in the future.",
    images: movies_images,
    features: [
      
    ],
    tech_stack: ["typescript", "next", "sass"],
    link_to_preview: "https://my-movie-website-2023.vercel.app/",
    link_to_github: "https://https://github.com/tomas-land/myMovie-website-2023",
  },
  {
    name: "Expenses Tracker",
    description:
      "The idea to create this app came when my friend asked me to create a simple app for tracking his expenses on his mobile. For development I decided to try Next js framework and Prisma ORM to connect and query database. First of all I created light and bright design with some colourfull accents and intuitive user interface. The app is divided in three pages. The app's front page provides a clear overview of current month's expenses, allowing user to control spending. Second page is for creating expense and assigning to category. Third page is for comparing current month expenses with previous month including visualized expenses in pie chart. This app offers a simple yet effective solution for managing expenses.",
    images: exp_tracker_images,
    features: [
      "User can see latest expenses for current month",
      "User can create, assign to category and delete expenses",
      "Previuos month expenses can be compared with current",
      "Current month expenses are shown in chart",
    ],
    tech_stack: ["typescript", "react", "next", "sass", "prisma"],
    link_to_preview: "https://expense-tracker-portfolio.vercel.app/",
    link_to_github: "https://github.com/tomas-land/expenses-tracker",
  },
  ///////////////////////////////////////////////////////////////////////////////
  {
    name: "Gym Website",
    description:
      "This is my first project with react. I used only react and sass to create this website. Creating this website I was mainly focused on learning react basics, creating components, passing props, Context API and react router. I enjoyed creating layout and design for this website.",
    images: bodycult_images,
    features: ["Responsive design", "Easy to navigate", "Nice layout"],
    tech_stack: ["react", "sass"],
    link_to_preview: "https://body-cult.vercel.app/",
    link_to_github: "https://github.com/tomas-land/bodycult-gym-website.git",
  },
];

export default projects;
