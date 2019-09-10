import axios from "axios";
import CONSTANTS from "./constants";

let ETAG_GET_RELEASES = "";
let releaseInfo = {};
const ETAG_COOKIE_KEY = "ETAG_GET_RELEASES";

const getETagValue = () => {
  const cookies = document.cookie;
  const items = cookies.split(";");
  return items.find((item) => {
      const key = item.split("=")[0];
      if(key === ETAG_COOKIE_KEY) {
          return item;
      }
  });
};

export const retrieveReleases = gitHubURL =>
    new Promise((resolve, reject) => {
        const repositoryName = gitHubURL.split("github.com")[1];
        console.log("Echoing cookie etag releases");
        console.log(getETagValue());
        axios
            .get(
                CONSTANTS.GITHUB_API_RELEASE_URL.replace(
                    "{repo_name}",
                    repositoryName
                ),
                {
                    headers: {
                        "If-None-Match": ETAG_GET_RELEASES
                    }
                }
            )
            .then(response => {
                if (response.status === 200) {
                    ETAG_GET_RELEASES = response.headers.etag;
                    document.cookie = `${ETAG_COOKIE_KEY}=${ETAG_GET_RELEASES}`;
                    releaseInfo =  response.data;
                    resolve(response.data);
                } else {
                    resolve([]);
                }
            })
            .catch(err => {
                if(err.response && err.response.status === 304) {
                    resolve(releaseInfo);
                }
                else {
                    reject(err);
                }
            });
    });

export const getLatestRelease = releases => {
    const latestRelease = releases.find(
        release => !release.prerelease && !release.draft
    );
    return latestRelease.tag_name;
};

export const isLatestRelease = (versions, targetRelease) =>
           getLatestRelease(versions) === targetRelease.tag_name;
