import _ from "lodash";
import React, { Component } from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const styles = {
    card: {
        maxWidth: 400,
        minWidth: 400
    },
    media: {
        height: 250
    }
};

class Generator extends Component {
    constructor(props) {
        super(props);

        // A list will be passed into the generator and will be stored in state.
        // This list will be used for generation.
        this.state = {
            data: props.data,
            generated: null,
            history: []
        };
        this.generateRandom = this.generateRandom.bind(this);
        this.back = this.back.bind(this);
    }

    generateRandom() {
        const { data, history } = this.state;
        let randomIndex = _.random(data.length - 1);
        let newHistory = history;
        newHistory.push(randomIndex);

        this.setState({
            generated: data[randomIndex],
            history: newHistory
        });
    }

    back() {
        const { data, history } = this.state;
        if (history.length > 0) {
            let newHistory = history;
            newHistory.pop();
            let element = newHistory[newHistory.length-1];

            this.setState({
                generated: data[element],
                history: newHistory
            });
        }
    }

    render() {
        const { name, image } = this.props;
        const { generated } = this.state;
        return (
            <div>
                <Card style={styles.card}>
                    <CardMedia className={"media"} image={image} title={name} style={styles.media} />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography component="p">{generated}</Typography>
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            className="generateButton"
                            onClick={this.generateRandom}>
                            Generate
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className="backButton"
                            onClick={this.back}>
                            Back
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Generator;
