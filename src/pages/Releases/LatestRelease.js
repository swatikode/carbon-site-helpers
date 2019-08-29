import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import useReleases from "../../hooks/useReleases";
import CONSTANTS from "../../helpers/constants";

const styles = {
    marginLeft: "10px",
    backgroundColor: "#fff",
    color: "#0074b8"
};

const getLatestRelease = (releases) => releases[0].tag_name;

const LatestRelease = (props) => {
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

LatestRelease.propTypes = {
    isHome: PropTypes.bool,
    gitHubURL: PropTypes.string
};

LatestRelease.defaultProps = {
    isHome: false,
    gitHubURL: ""
};

export default LatestRelease;
