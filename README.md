# Husky Workflow Setup Guide

This guide will help you set up a workflow with Husky, and lint-staged in your project. This workflow ensures that your code follows linting rules and passes pre-commit checks automatically.

## Prerequisites

Before you begin, ensure you have the following installed in your project:

- Node.js and npm or Yarn
- Git
- ESLint setup is already done: To configure ESLint, ensure you have an ESLint configuration file (e.g., `.eslintrc.js`, `.eslintrc.json`) in your project. Customize ESLint rules based on your project requirements.<br />
  - Please refer to the [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started) to setup ESLint in your project.

## Setup Instructions

Follow these steps to set up the workflow:

1. Run the following command to initialize Husky in your project and create the necessary scripts in `package.json`:

   ```bash
   npx husky-init
   ```

2. Next, install dependencies using npm or Yarn. This includes lint-staged, and any other dependencies required for your project:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

3. Once dependencies are installed, `.husky` folder will be created automatically. If not re-run the process again.

4. Then, create `pre-commit` and `commit-msg` hooks inside the `.husky` folder and create `.lintstagedrc` file (in same directory as `.husky` folder). Update the respective scripts from `templates` folder. These hooks enforce linting and commit message conventions before allowing commits to be made.

5. Finally, run the script to set permissions for the hooks, ensuring they can be executed:

   ```bash
   chmod +x .husky/pre-commit .husky/commit-msg
   ```

6. Your workflow is now set up! Test it by making changes to your code and committing them. Husky will automatically run lint-staged before each commit, ensuring that your changes pass linting checks.

## Customization

You can customize the workflow to fit your project's specific requirements. For example, you can modify ESLint rules, customize commit message checks, or add additional pre-commit checks as needed.

## Conclusion

Congratulations! You've successfully set up a workflow with Husky, and lint-staged in your project. This workflow helps maintain code quality and enforce best practices in your development process.

For more information on configuring Husky, and lint-staged, refer to their respective documentation:

- [Husky Documentation](https://typicode.github.io/husky)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
