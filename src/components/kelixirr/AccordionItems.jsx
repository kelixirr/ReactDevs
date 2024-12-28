import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./../kelixirr/AccordionItems.module.css";
import { WiStars } from "react-icons/wi";
import Author from "../../Author";

export default function AccordionItems() {
  const accs = [
    {
      id: 1,
      title: "Who can contribute?",
      content:
        "This project is open to anyone, regardless of experience. Whether you are just starting with React or have basic knowledge of front-end development, you can contribute. The goal is to create a collaborative learning environment where people of all skill levels can participate and grow.",
    },
    {
      id: 2,
      title: "How do I contribute a component?",
      content:
        "To contribute a component, first, fork the repository and create a new branch for your changes. Then, you can start building the component of your choice. Once you've completed your component, ensure that it follows the project's guidelines, such as naming conventions and structure, and then submit a pull request. Don’t worry if you're unsure — there is a documentation to help you through each step.",
    },
    {
      id: 3,
      title: "What kind of components can I contribute?",
      content:
        "You can contribute any React component that you feel comfortable building. It can be anything from a simple button, input form, or card to more complex components like modals, sliders, games, or navigation bars. Just make sure they follow our design guidelines",
    },
    {
      id: 4,
      title: "Will my contributions be reviewed?",
      content:
        "Yes, all contributions will be reviewed by the maintainers of the project. They will check the code for correctness, ensure it meets the project's standards, and provide constructive feedback. If your contribution is accepted, it will be merged into the main codebase, and you’ll get credit for your work.",
    },
    {
      id: 5,
      title: "Can I ask for help if I get stuck?",
      content:
        "Absolutely! This project is all about learning, so feel free to ask for help. You can open an issue in the repository",
    },
    {
      id: 6,
      title: "How will this project help me improve my skills?",
      content:
        "Contributing to this project will help you practice key front-end skills like React, component-based architecture, and JavaScript. You'll also gain experience with version control (Git), collaboration tools, and code review processes. Plus, working on real-world projects is a great way to build your portfolio and showcase your skills to potential employers or collaborators.",
    },
    {
      id: 7,
      title: "Will I receive credit for my contribution?",
      content:
        "Yes, all contributors will be credited for their work. Each accepted pull request will be attributed to you, and we will include your GitHub profile in the project’s contributor list. If you’re building components as part of your portfolio, this is a great way to demonstrate your involvement in an open-source project. Above all don't forget to add our Author component below your component so that people can know who created it.",
    },
  ];

  const initialState = accs.reduce((state, item) => {
    if (item.id === 1) {
      state[item.id] = true;
    } else {
      state[item.id] = false;
    }
    return state;
  }, {});

  const [accstate, setAccState] = useState(initialState);

  const handleAcc = (id) => {
    setAccState((state) => ({
      ...Object.fromEntries(Object.keys(state).map((key) => [key, false])),
      [id]: !state[id],
    }));
  };

  return (
    <>
      <div className={styles.AccordionContainer}>
        <div className={styles.Accordion}>
          <h3 className={styles.AccordionH3}>
            <WiStars />
            FAQs: In Case!
          </h3>
          <ul className={styles.AccordionUl}>
            {accs.map((acc) => (
              <li
                key={acc.id}
                onClick={() => handleAcc(acc.id)}
                className={`${styles.AccordionUlLi} ${
                  accstate[acc.id] ? styles.activeLi : ""
                }`}
              >
                <div className={styles.AccordionUlLiDiv}>
                  <h3>{acc.title}</h3>
                  {accstate[acc.id] ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </div>
                {accstate[acc.id] && <p>{acc.content}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Author name="Amritesh Kumar" githubLink="https://github.com/kelixirr" />
    </>
  );
}
