#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import { execSync } from "child_process";
import path from "path"
import fs from "fs"

if (process.argv.length < 3) {
  console.log("❗️ Name your project");
  console.log("example: ");
  console.log("npx create-lah-remix-vite my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const gitRepo = "https://github.com/leahincom/remix-vite-express-vercel";

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exists in this directory. Please choose another name.`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("🌑 Cloning create-lah-remix-vite...");
    execSync(`git clone --depth 1 ${gitRepo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("🌘 Installing dependencies...");
    execSync("yarn install");

    console.log("🌗 Removing useless files...");
    execSync("npx rimraf ./.git");
    fs.rmdirSync(path.join(projectPath, "bin"), { recursive: true });

    console.log("🌕 Installed! Enjoy hacking 🌈");
  } catch (error) {
    console.log(error);
  }
}
main();