import PropTypes from "prop-types";
import React from "react";
import HomePageBlurb from "../../components/Content/HomePageBlurb";
import Header from "../../components/Header/Header";

function HomePage(props) {
    const { startLink, gitHubURL } = props;
    return (
        <>
            <Header isHome gitHubURL={gitHubURL} />
            <HomePageBlurb startLink={startLink} />
        </>
    );
}

HomePage.propTypes = {
    startLink: PropTypes.string.isRequired,
    gitHubURL: PropTypes.string.isRequired
};

export default HomePage;
