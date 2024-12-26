# Contribute to the ReactDevs - A Playground for react learners

Welcome to the **ReactDevs** project! This repository allows beginners to contribute one or more React components of their choice. This guide will walk you through every step of the process to ensure you can easily contribute to the project. Follow these steps carefully to add your own component, including a small credit section that links to your name and GitHub profile.

### Why Be Part Of This Project?
- **Git**: Learn version control and collaboration using Git.
- **GitHub**: Gain experience with GitHub for managing and contributing to open-source projects. Earn Github badges.
- **Collaboration**: Work together with developers of all skill levels to build something meaningful.
- **Project Building**: Contribute to a real-world project, gaining hands-on experience.
- **Learn to Contribute to Open Source**: Understand the process of contributing to open-source projects.
- **Learn from Others**: Discover new techniques and approaches from fellow contributors.
- **Practice React Skills**: Hone your React skills by building components and working with others.
- **Networking**: Connect with other developers and expand your professional network.
- **Build a Portfolio**: Showcase your contributions in your personal portfolio to attract future opportunities.

---

## **1. Prerequisites**

Before you begin contributing to the project, you'll need a few things installed on your local machine:

- **Node.js**: This project uses Node.js for running JavaScript code. You can download and install it from [here](https://nodejs.org/).
- **Git**: Git is necessary for version control and contributing to the project. Install it from [here](https://git-scm.com/).
- **Text Editor (VS Code recommended)**: You'll need a code editor to edit the project's files. [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.
- **GitHub Account**: You need a GitHub account to fork and submit pull requests to the project. If you don’t have one, create one at [GitHub](https://github.com/).

---

### Rules - Don't Forget The Rules
1. Star the repository so that more people can discover it and join. 
2. Create a folder name based on your github username for the component as explained below.Use unqiue component names. 
3. Code on your own. Make it unique. You can contribute multiple components.
4. Don't touch or change anything that is already there without discussing. Raise an issue here on GitHub first.
5. Use the colors and root variables defined in the index.css file to maintain the design consistency. Don't add any color on your own. 
6. Use rem for font-size, borders etc. You are free to adjust sizes except for border radius.
7. Help others and engage with project community. Don't forget to invite more people to this project.
8. Don't hesistate to ask if you are stuck somewhere.

## **2. Fork the Repository**

### **Step 1: Fork the Repository**
- Go to the [ReactDevs repository](https://github.com/kelixirr/ReactDevs) on GitHub.
- In the top-right corner of the page, click the **Fork** button. This creates a personal copy of the repository under your GitHub account.

### **Step 2: Clone the Forked Repository**
Once you’ve forked the repository, you need to clone it to your local machine so you can start working on it.

- On your forked repository page, click the **Code** button and copy the URL (either HTTPS or SSH).
- Open your terminal or command prompt and run the following command to clone the repository:

  ```bash
  git clone <your-forked-repo-url>
  ```

  This will create a copy of the repository on your machine.

### **Step 3: Navigate to the Project Folder**
Once you have cloned the repository, navigate to the project directory:

```bash
cd <your-cloned-repo-name>
```

---

## **3. Set Up the Project Locally**

Now that you have the repository on your local machine, it's time to set it up.

### **Step 1: Install Dependencies**

This project uses `npm` (Node Package Manager) to manage dependencies. To install all the necessary packages and libraries, run:

```bash
npm install
```

This will read the `package.json` file and install all the dependencies specified.

### **Step 2: Start the Development Server**

To see the project in action, you need to start the development server. Run the following command:

```bash
npm run dev
```

This will launch the project in your default web browser (usually at `http://localhost:5173/` since we are using Vite).

---

## **4. Creating Your Own Component**

### **Step 1: Create a Folder for Your Component**

Inside the `src/components` folder, create a new folder using your name(use a unique name or your github username) as the folder name. This will help us identify your component and give you credit. For example, if your github username is `johndoe`, create a folder called `johndoe`.

```bash
src/components/johndoe/
```

### **Step 2: Create the Component File**

Inside your folder, create a new file for your component, named something descriptive. For example, if you want to contribute a `Button` component, create a file called `Button.jsx`.

```bash
src/components/johndoe/Button.jsx
```

In this file, create your React component as you normally would. Here's an example `Button.jsx`:

```javascript
// Create a simple button component
export default function Button() {
  return <button className = {styles.btn} >Click Me</button>;
}
```
Don't forget to use Button.module.css and styles.classname approach. This is important because we want to keep the design consistent.

### **Step 3: Add Your Credit**

At the bottom of your component file, add the author component with your name and GitHub link. This is important so everyone knows who contributed the component. A component name Author is alreay created for you all you have to do is do this:

Example:

```javascript
// Add this component with your name and github link. Place this component at the very end.
<Author name="Your Name" githubLink="Your GitHub Link" />
```

This ensures you get credit for your work!

### **Step 4: Style Your Component (Optional)**

If your component requires custom styling, you can create a separate CSS file or use inline styles.

For example, if you want to add styles for the button:

1. Create a new CSS file inside your component folder:

   ```bash
   src/components/jane-doe/Button.module.css
   ```

2. Add the following CSS code in `Button.module.css`:

   ```css
   .btn {
   padding: var(--spacing-sm) var(--spacing-md);
   border: none;
   border-radius: var(--border-radius-md);
   cursor: pointer;
   background-color: var(--primary-color);
   }

   ```

3. Then, import the CSS file into your `Button.jsx` file:

   ```javascript
   import styles from './Button.module.css';
   ```
   
Don't forget to use our global root varibales for consistent styling across the site. We have all the roots variables in Index.css file. 

## **5. Testing Your Component**

### **Step 1: Test the Component Locally**

Before submitting your component, you should test it to make sure it works. Open the main `App.jsx` file (located in `src/App.jsx`) and import your component.

For example:

```javascript
import React from 'react';
import Button from './components/johndoe/Button'; // Adjust path to your component
import Details from './components/kelixirr/Details';
import Hero from './Hero' 

function App() {
  return (
    <>
      <Hero />
      <Details />
       {/* Place your component after this for example Button below, and so on. One after another */}
      <Buton /> 
    </>
  );
}

export default App
```

Run `npm run dev` to ensure your component is correctly rendered on the page. If it is already running do check for consistent output. 

### **Step 2: Check for Errors**

Ensure that there are no console errors in your browser’s developer tools. If there are any errors, fix them before proceeding.

## **6. Commit Your Changes**

Once you're happy with your component, commit your changes to your local Git repository.

### **Step 1: Stage Your Changes**

In your terminal, run the following command to stage all the changes you made:

```bash
git add .
```

### **Step 2: Commit Your Changes**

Now, commit your changes with a meaningful message:

```bash
git commit -m "Added Button component by Jane Doe"
```

### **Step 3: Push Changes to Your Fork**

Push your changes to your forked repository:

```bash
git push origin main
```

## **7. Create a Pull Request**

Now that your changes are pushed to your forked repository, you need to create a pull request to contribute your component to the main project.

### **Step 1: Go to the Original Repository**

Visit the original repository (not your forked version) on GitHub.

### **Step 2: Create a Pull Request**

Click the **New Pull Request** button.

- In the **Compare** section, make sure you are comparing your branch (usually `main`) with the original `main` branch of the repository.
- Write a title and description for your pull request explaining what component you added and how it works.

Example:
```
Title: Added Button component by John Doe

Description: This pull request adds a simple button component to the collection. It includes styling for the button etc.. The component is created by John Doe (GitHub: https://github.com/your username).
```

### **Step 3: Submit the Pull Request**

Click the **Create Pull Request** button to submit your changes.

## **8. Review and Merge**

Once you submit your pull request, project maintainers will review it. If everything looks good, they will merge it into the main project.


## **9. Congratulations! 🎉**

You've successfully contributed to the project! Thank you for your time and effort.

## **10. Helpful Links**

- [GitHub Documentation](https://docs.github.com/en/github)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

Feel free to reach out if you have any questions or need assistance during the process!

