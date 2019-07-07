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
import { GettingStartedPage, HomePage, NotFoundPage } from "./pages";

function AppRouter(props) {
    const { pages, startLink } = props;
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    {flatten(pages, CONSTANTS.PATHNAME_PROPERTY).map(p => (
                        <Route
                            exact
                            key={p}
                            path={p}
                            render={() => <GettingStartedPage pages={pages} />}
                        />
                    ))}
                    <Route
                        exact
                        path="/"
                        render={() => <HomePage startLink={startLink} />}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </HashRouter>
    );
}

AppRouter.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object).isRequired,
    startLink: PropTypes.string.isRequired
};

/*
 * Exposed functions
 * */
/**
 * Renders the carbon graphs site
 * @param {Array<Object>} pages - Hash Routed pages within the site
 * @param {string} startLink - href link to be routed when clicked on "Getting Started" link.
 * Needs to be a `pathname` within `pages`, appended with `#`
 * @returns {undefined} returns nothing
 */
const renderSiteApp = (pages, startLink) => {
    validatePageObject(pages);
    validateStartLink(startLink);
    ReactDOM.render(
        <AppRouter pages={pages} startLink={startLink} />,
        document.getElementById("root")
    );
};

export default renderSiteApp;
