import { createMuiTheme } from "@material-ui/core";

/**
 * @enum {object}
 */
export default {
    GITHUB_API_REPO_URL: "https://api.github.com/repos{repo_name}",
    GITHUB_API_RELEASE_URL: "https://api.github.com/repos{repositoryName}/releases?id={repositoryID}",
    GITHUB_REPO_TOOLTIP: "GitHub Repository",
    GITHUB_SITE: "github.com",
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
                fontFamily: "'Segoe UI', sans-serif"
            }
        }),
    VERSIONS_PATH: "versions"
};
