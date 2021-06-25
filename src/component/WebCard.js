import React from "react";

import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        textAlign: "left",
    },
    media: {
        height: 140,
    },
});

export const WebCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.pocketProps.imageUrl}
                    title={props.pocketProps.imageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.pocketProps.projectName}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.pocketProps.projectBody}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
