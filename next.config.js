/** @type {import('next').NextConfig} */

const isGithubActions = true;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  //   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  const repo = "https://orro-tech.github.io";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "imgix",
    path: "orro-tech.imgix.net",
  },
};

module.exports = nextConfig;
