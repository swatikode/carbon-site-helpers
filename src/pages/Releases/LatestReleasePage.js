import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import useReleases from "../../hooks/useReleases";
import CONSTANTS from "../../helpers/constants";
import { getLatestRelease } from "../../helpers/releasesInfo";

const styles = {
    marginLeft: "10px",
    backgroundColor: "#fff",
    color: "#0074b8"
};

const LatestReleasePage = (props) => {
    const { gitHubURL } = props;
    const { isHome } = props;

    if (isHome || !gitHubURL) {
        return "";
    }

    const releases = useReleases(gitHubURL);
    return releases.length ? (
        <Chip
            style={styles}
            label={getLatestRelease(releases)}
            component="a"
            href={`#/${CONSTANTS.VERSIONS_PATH}`}
            clickable
        />
    ) : "";
};

LatestReleasePage.propTypes = {
    isHome: PropTypes.bool,
    gitHubURL: PropTypes.string
};

LatestReleasePage.defaultProps = {
    isHome: false,
    gitHubURL: ""
};

export default LatestReleasePage;
