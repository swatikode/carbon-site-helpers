import { useState, useEffect } from "react";
import retrieveReleases from "../helpers/releasesInfo";

const useReleases = (gitHubURL) => {
    const [releases, setReleases] = useState([]);
    useEffect(() => {
        // Make a request to get releases
        if (!releases.length) {
            retrieveReleases(gitHubURL).then((response) => {
                setReleases(response);
            });
        }
    }, []);
    return releases;
};

export default useReleases;