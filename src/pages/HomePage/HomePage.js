import { MuiThemeProvider } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import HomePageBlurb from "../../components/Content/HomePageBlurb";
import Header from "../../components/Header/Header";
import CONSTANTS from "../../helpers/constants";

function HomePage(props) {
    const { startLink } = props;
    return (
        <MuiThemeProvider theme={CONSTANTS.THEME()}>
            <Header isHome />
            <HomePageBlurb startLink={startLink} />
        </MuiThemeProvider>
    );
}

HomePage.propTypes = {
    startLink: PropTypes.string.isRequired
};

export default HomePage;
