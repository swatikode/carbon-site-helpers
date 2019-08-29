import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import CONSTANTS from "./helpers/constants";
import {
    flatten,
    validatePageObject,
    validateStartLink
} from "./helpers/pageHelpers";
import {
    GettingStartedPage,
    HomePage,
    NotFoundPage,
    ReleasesPage
} from "./pages";

function AppRouter(props) {
    const { pages, startLink, gitHubURL } = props;
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    {flatten(pages, CONSTANTS.PATHNAME_PROPERTY).map(p => (
                        <Route
                            exact
                            key={p}
                            path={p}
                            render={() => <GettingStartedPage pages={pages} gitHubURL={gitHubURL}/>}
                        />
                    ))}
                    <Route
                        exact
                        path="/"
                        render={() => <HomePage startLink={startLink} gitHubURL={gitHubURL}/>}
                    />
                    <Route
                        exact
                        path={`/${CONSTANTS.VERSIONS_PATH}`}
                        render={() => <ReleasesPage gitHubURL={gitHubURL}/>}
                    />
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

AppRouter.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object).isRequired,
    startLink: PropTypes.string.isRequired,
    gitHubURL: PropTypes.string.isRequired
};

/*
 * Exposed functions
 * */
/**
 * Renders the carbon graphs site
 * @param {Array<Object>} pages - Hash Routed pages within the site
 * @param {string} startLink - href link to be routed when clicked on "Getting Started" link.
 * Needs to be a `pathname` within `pages`, appended with `#`
 * @param {string} gitHubURL - A github repo releases URL. For e.g. https://api.github.com/repos/cerner/carbon-graphs/releases
 * @returns {undefined} returns nothing
 */
const renderSiteApp = (pages, startLink, gitHubURL) => {
    validatePageObject(pages);
    validateStartLink(startLink);
    ReactDOM.render(
        <AppRouter pages={pages} startLink={startLink} gitHubURL={gitHubURL}/>,
        document.getElementById("root")
    );
};

export default renderSiteApp;
