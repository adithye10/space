import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
    Grid,
    Paper,
    ButtonBase,
    Card,
    CardContent,
    CardHeader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "0",
        backgroundColor: "black",
    },
    image: {
        // width: 800,
        // height: 500,
    },
    img: {
        margin: "100px",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    font: {
        fontFamily: "sans-serif",
        color: "white",
    },
    ca: {
        backgroundColor: "black",
    },
    card: {
        width: "1510px",
        backgroundColor: "black",
    },
}));
export default function Home() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}></Grid>
        </Grid>
    );
}
