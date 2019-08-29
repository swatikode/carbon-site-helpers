import React, { useState } from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import DOMPurify from "dompurify";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import useReleases from "../../hooks/useReleases";
import Header from "../../components/Header/Header";
import CONSTANTS from "../../helpers/constants";

const ReleasesPage = (props) => {
    const { gitHubURL } = props;
    const versions = useReleases(gitHubURL);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const styles = {
        container: {
            padding:"6rem"
        },
        cardHolder: {
            border: "none",
            paddingBottom: "1rem"
        },
        getCardBackground: (index) => {
            if(index === 0) {
                return {
                    background: "linear-gradient(to bottom, #FFFFFF, #aed581)"
                }
            }
        }
    };

    function getMarkdownText(body) {
        const rawMarkup = marked(DOMPurify.sanitize(body), { sanitize: true });
        return { __html: rawMarkup };
    }

    const getReleaseDetails = version => {
        return (
            <div key={version.id} dangerouslySetInnerHTML={getMarkdownText(version.body)}/>
        );
    };

    const handlePageChange = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <MuiThemeProvider theme={CONSTANTS.THEME()}>
            <Paper>
                <Header withNav={false}/>
                <div style={styles.container}>
                    <Table>
                        <TableBody>
                            {versions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((v, index) => (
                                <TableRow key={v.id}>
                                    <TableCell style={styles.cardHolder}>
                                        <Card style={styles.getCardBackground(index)}>
                                            <CardContent>
                                                {getReleaseDetails(v)}
                                            </CardContent>
                                        </Card>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[rowsPerPage, 10, 25]}
                                    count={versions.length}
                                    onChangePage={handlePageChange}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        </MuiThemeProvider>
    );
};

ReleasesPage.propTypes = {
    gitHubURL: PropTypes.string.isRequired
};

export default ReleasesPage;