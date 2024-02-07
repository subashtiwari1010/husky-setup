/* eslint-disable no-undef */
const { execSync } = require("child_process");
const fs = require("fs");

async function setupWorkflow() {
  const packageManager = await detectPackageManager();

  if (!isESLintConfigured()) {
    console.log(
      "\x1b[31mESLint is not configured in this project. Please configure ESLint before setting up Husky.\x1b[0m"
    );
    return;
  }

  execSync("npx husky-init", { stdio: "inherit" });
  execSync(`${packageManager} install`, { stdio: "inherit" });
  execSync(`${packageManager} install lint-staged --save-dev`, {
    stdio: "inherit",
  });

  createHuskyFiles();
  createLintStagedFile();

  console.log("Workflow setup complete!");
}

function detectPackageManager() {
  const yarnLockExists = fs.existsSync("yarn.lock");
  return yarnLockExists ? "yarn" : "npm";
}

function isESLintConfigured() {
  const eslintConfigFiles = [".eslintrc", ".eslintrc.js"];
  const eslintConfigExists = eslintConfigFiles.some((file) =>
    fs.existsSync(file)
  );

  if (eslintConfigExists) {
    console.log("\x1b[42mESLint configuration found.\x1b[0m");
    return true;
  } else {
    console.log("\x1b[31mESLint configuration not found.\x1b[0m");
    return false;
  }
}

function createHuskyFiles() {
  fs.writeFileSync(
    ".husky/commit-msg",
    fs.readFileSync(__dirname + "/templates/commit-msg", "utf8")
  );
  fs.writeFileSync(
    ".husky/pre-commit",
    fs.readFileSync(__dirname + "/templates/pre-commit", "utf8")
  );

  execSync("chmod ug+x .husky/*");
  execSync("chmod ug+x .git/hooks/*");
}

function createLintStagedFile() {
  fs.writeFileSync(
    ".lintstagedrc",
    fs.readFileSync(__dirname + "/templates/.lintstagedrc", "utf8")
  );
}

setupWorkflow();
