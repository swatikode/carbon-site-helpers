import { MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button/index";
import Link from "@material-ui/core/Link/index";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography/index";
import PropTypes from "prop-types";
import React from "react";
import CONSTANTS from "../../helpers/constants";
import CarbonMainIcon from "../SvgIcons/CarbonMainIcon";

const styles = theme => ({
    root: {
        flex: "1 0 100%"
    },
    hero: {
        height: `calc(100vh - ${theme.spacing(9)}px)`, // This is dependant on the height of the header
        flex: "0 0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        color:
            theme.palette.type === "light"
                ? theme.palette.primary.dark
                : theme.palette.primary.main
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        textIndent: ".7rem",
        alignContent: "center",
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only("xs")]: {
            fontSize: 36
        },
        whiteSpace: "nowrap"
    },
    headline: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginTop: theme.spacing(4),
        maxWidth: 500,
        [theme.breakpoints.only("xs")]: {
            fontSize: 18
        },
        textAlign: "center"
    },
    button: {
        marginTop: theme.spacing(3),
        color: theme.palette.background.paper,
        fontSize: 16,
        [theme.breakpoints.only("xs")]: {
            fontSize: 12
        }
    },
    social: {
        backgroundColor: theme.palette.background.paper,
        padding: `${theme.spacing(2)}px 0`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 20,
        boxSizing: "content-box",
        "& span": {
            display: "flex",
            marginRight: theme.spacing(1)
        },
        "& a": {
            color: theme.palette.background.paper
        }
    }
});

function HomePageBlurb(props) {
    const { classes, startLink } = props;

    return (
        <MuiThemeProvider theme={CONSTANTS.THEME()}>
            <div className={classes.root}>
                <div className={classes.hero}>
                    <div className={classes.content}>
                        <CarbonMainIcon />
                        <div className={classes.text}>
                            <Typography
                                variant="h3"
                                component="h1"
                                color="inherit"
                                gutterBottom
                                className={classes.title}
                            >
                                {"Carbon"}
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h2"
                                color="inherit"
                                gutterBottom
                                className={classes.headline}
                            >
                                {
                                    "A responsive graphing library built using d3 that integrates well with consumer's tech stack."
                                }
                            </Typography>
                            <Button
                                component={buttonProps => (
                                    <Link
                                        underline="none"
                                        href={startLink}
                                        {...buttonProps}
                                    />
                                )}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                            >
                                {CONSTANTS.GETTING_STARTED}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}

HomePageBlurb.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    startLink: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(HomePageBlurb);
