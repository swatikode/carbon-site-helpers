import List from "@material-ui/core/List/index";
import PropTypes from "prop-types";
import React from "react";
import NavItem from "../components/Drawer/NavItem";
import { convertPageToTitle } from "./pageHelpers";

/* eslint-disable no-use-before-define */
/**
 * Creates routes and nav items to be rendered within NavBar based on page objects
 * @param {object} props - NavItem props
 * @param {string} activePage - Current page/pathname
 * @param {array} items - list of NavItems
 * @param {string} page - page object
 * @param {number} depth - nested depth
 * @returns {array} list of NavItems that are recursively scanned
 */
const reduceChildRoutes = ({ props, activePage, items, page, depth }) => {
    if (page.displayNav === false) {
        return items;
    }
    if (page.children && page.children.length > 0) {
        const title = convertPageToTitle(page);
        const openImmediately =
            activePage.pathname.indexOf(`${page.pathname}/`) === 0;
        items.push(
            <NavItem
                depth={depth}
                key={title}
                openImmediately={openImmediately}
                title={title}
            >
                {renderNavItems({
                    props,
                    pages: page.children,
                    activePage,
                    depth: depth + 1
                })}
            </NavItem>
        );
    } else {
        const title = convertPageToTitle(page);
        const currentPage =
            page.children && page.children.length === 1
                ? page.children[0]
                : page;

        items.push(
            <NavItem
                depth={depth}
                key={title}
                title={title}
                href={currentPage.pathname}
                onClick={props.onClose}
            />
        );
    }
    return items;
};

/*
 * @class renderNavItems
 * */
function renderNavItems({ pages, ...params }) {
    return (
        <List>
            {pages.reduce(
                (items, page) => reduceChildRoutes({ items, page, ...params }),
                []
            )}
        </List>
    );
}

renderNavItems.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default renderNavItems;
/* eslint-enable no-use-before-define */
