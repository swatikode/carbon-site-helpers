import AppBar from "@material-ui/core/AppBar/index";
import IconButton from "@material-ui/core/IconButton/index";
import { withStyles } from "@material-ui/core/styles/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import Tooltip from "@material-ui/core/Tooltip/index";
import Typography from "@material-ui/core/Typography/index";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import CONSTANTS from "../../helpers/constants";
import SearchBar from "../Search/SearchBar";
import GithubIcon from "../SvgIcons/GitHubIcon";
import LatestReleasePage from "../../pages/Releases/LatestReleasePage";

const styles = theme => ({
    appBarHome: {
        boxShadow: "none",
        backgroundColor: theme.palette.primary.main,
        transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    },
    appBarWithNav: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${CONSTANTS.DRAWER_WIDTH}px)`
        }
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    grow: {
        flexGrow: 1,
        noWrap: 1,
        [theme.breakpoints.only("xs")]: {
            fontSize: 18
        }
    }
});

function Header(props) {
    const {
        classes,
        title,
        onMenuClick,
        isHome,
        pages,
        gitHubURL,
        withNav
    } = props;
    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classNames({
                    [classes.appBarHome]: true,
                    [classes.appBarWithNav]: !isHome && withNav
                })}
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        style={{ display: isHome ? "none" : "" }}
                        onClick={onMenuClick}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}
                    >
                        {title}
                    </Typography>
                    <SearchBar
                        pages={pages}
                        isHome={isHome}
                        withNav={withNav}
                    />
                    <LatestReleasePage isHome={isHome} gitHubURL={gitHubURL} />
                    <Tooltip
                        title={CONSTANTS.GITHUB_REPO_TOOLTIP}
                        enterDelay={300}
                    >
                        <IconButton
                            component="a"
                            color="inherit"
                            href={gitHubURL}
                            target="_blank"
                            aria-label={CONSTANTS.GITHUB_REPO_TOOLTIP}
                            data-ga-event-category="AppBar"
                            data-ga-event-action="github"
                        >
                            <GithubIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    pages: PropTypes.arrayOf(PropTypes.object),
    onMenuClick: PropTypes.func,
    title: PropTypes.string,
    isHome: PropTypes.bool,
    gitHubURL: PropTypes.string,
    withNav: PropTypes.bool
};

Header.defaultProps = {
    title: "",
    pages: [],
    onMenuClick: () => {},
    isHome: false,
    withNav: true,
    gitHubURL: ""
};

export default withStyles(styles, { withTheme: true })(Header);
