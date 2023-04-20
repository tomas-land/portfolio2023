import exp_tracker_images from "@/lib/images/exp_tracker";
import bodycult_images from "@/lib/images/bodycult";

const projects = [
  {
    name: "Expenses Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut itaque sequi ipsa voluptates a accusamus id nisi aspernatur. Fuga quod impedit iusto quasi numquam illo nam fugiat vero perferendis.",
    images: exp_tracker_images,
    features: [
      "User can see latest expenses for current month",
      "User can create, assign to category and delete expenses",
      "Previuos month expenses can be compared with current",
      "Current month expenses are shown in chart",
    ],
    link_to_preview: "https://expenses-tracker-self.vercel.app",
    link_to_github: "https://github.com/tomas-land/expenses-tracker",
  },
  {
    name: "Gym Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut itaque sequi ipsa voluptates a accusamus id nisi aspernatur. Fuga quod impedit iusto quasi numquam illo nam fugiat vero perferendis.",
    images: bodycult_images,
    features: [
      "User can see latest expenses for current month",
      "User can create, assign to category and delete expenses",
      "Previuos month expenses can be compared with current",
      "Current month expenses are shown in chart",
    ],
    link_to_preview: "https://bodycult.website",
    link_to_github: "https://github.com/tomas-land/expenses-tracker",
  },
];

export default projects;
