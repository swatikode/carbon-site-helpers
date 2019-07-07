import { createMuiTheme } from "@material-ui/core";

/**
 * @enum {object}
 */
export default {
    GITHUB_REPO: "https://github.com/cerner/carbon-graphs",
    GITHUB_REPO_TOOLTIP: "GitHub Repository",
    HEADER_MAIN_TITLE: "Carbon",
    HEADER_ROOT_LINK: "#",
    NOTFOUND_PRIMARY_TITLE: "404",
    GETTING_STARTED: "Get Started",
    NOTFOUND_SECONDARY_TITLE: "Page Not Found",
    PATHNAME_PROPERTY: "pathname",
    SEARCH_PLACEHOLDER: "Search",
    SEARCH_MAX_RESULTS: 10,
    DRAWER_WIDTH: 275,
    THEME: () =>
        createMuiTheme({
            palette: {
                primary: {
                    main: "#0074b8",
                    navigationLink: "#000000"
                },
                secondary: {
                    main: "#fafafa"
                },
                background: {
                    default: "#ffffff"
                }
            },
            typography: {
                useNextVariants: true,
                fontFamily: ["Segoe UI", "sans-serif"]
            }
        })
};
