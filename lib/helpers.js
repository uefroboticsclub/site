export const normalizeGitHubCommitUrl = (url) => {
  return url
    .replace("api.", "")
    .replace("/repos", "")
    .replace("commits", "commit");
};
