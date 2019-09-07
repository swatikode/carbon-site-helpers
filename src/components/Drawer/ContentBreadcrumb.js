import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNextRounded";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";
import { makeSearchTitle } from "../../helpers/searchHelpers";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        display: "flex",
        background: theme.palette.background.default
    }
}));

export default function ContentBreadcrumb(props) {
    const classes = useStyles();
    const { pathname } = props;
    const pathPartitions = makeSearchTitle(pathname).split(">");
    const isLastPath = (str, index) =>
        str && index === pathPartitions.length - 1;
    return (
        <Paper className={classes.root}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {pathPartitions.map((p, index) => {
                    if (isLastPath(p, index)) {
                        return (
                            <Typography variant="button" key={p} color="secondary">
                                {p.trim()}
                            </Typography>
                        );
                    }
                    return (
                        <Typography variant="button" key={p}>
                            {p.trim()}
                        </Typography>
                    );
                })}
            </Breadcrumbs>
        </Paper>
    );
}

ContentBreadcrumb.propTypes = {
    pathname: PropTypes.string.isRequired
};
