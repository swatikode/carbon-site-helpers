import axios from "axios";
import CONSTANTS from "./constants";

const retrieveReleases = (gitHubURL) => new Promise((resolve, reject) => {
  const repositoryName = gitHubURL.split("github.com")[1];
  axios.get(CONSTANTS.GITHUB_API_REPO_URL.replace("{repo_name}", repositoryName)).then((response) => {
    const repoID = response.data.id;
    if (response.status === 200) {
      axios.get(CONSTANTS.GITHUB_API_RELEASE_URL
        .replace("{repositoryName}", repositoryName)
        .replace("{repositoryID", repoID)).then((releaseDetails) => {
        if (releaseDetails.status === 200) {
          resolve(releaseDetails.data);
        }
        else {
          reject(releaseDetails.statusText);
        }
      });
    }
    else {
      reject(response.statusText);
    }
  });
});

export default retrieveReleases;