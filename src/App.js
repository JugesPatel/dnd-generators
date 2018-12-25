import { Grid, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import Generator from "./components/Generator";
import { tables, tableTypes } from "./data";

const drawerWidth = 240;

const styles = {
    drawer: {
        drawerWidth: 240,
        flexShrink: 0
    },
    container: {
        margin: 10
    },
    content: {
        flexGrow: 1,
        marginLeft: drawerWidth
    },
    image: {
      height: 150,
      width: 150,
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: 0
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(category) {
        this.setState({
            selectedCategory: category
        });
    }

    render() {
        const { selectedCategory } = this.state;
        return (
            <div className="App">
                <Drawer className={"drawer"} variant="permanent" anchor="left" style={styles.drawer}>
                    <img className="image" src={"./images/dnd-logo.png"} alt="D&D" style={styles.image} />
                    <List>
                        {tableTypes.map((item, i) => (
                            <ListItem
                                button
                                key={i}
                                onClick={() => {
                                    this.handleSelect(i);
                                }}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <div style={styles.content}>
                    {
                        <Grid
                            container
                            className="grid"
                            justify="flex-start"
                            alignItems="center"
                            spacing={16}
                            style={styles.container}>
                            {tables.map(
                                (item, i) =>
                                    item.category === selectedCategory && (
                                        <Grid item key={i}>
                                            <Generator key={i} data={item.data} name={item.name} image={item.image} />
                                        </Grid>
                                    )
                            )}
                        </Grid>
                    }
                </div>
            </div>
        );
    }
}

export default App;
