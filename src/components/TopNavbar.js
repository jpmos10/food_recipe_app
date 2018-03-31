import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const style = {
    margin: 12,
};

export default class TopNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <FlatButton 
                        label="Cuisine"
                        onClick={this.handleClick}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu>
                            <MenuItem 
                                primaryText="American"
                                menuItems={[
                                    <MenuItem primaryText="Beef" />,
                                    <MenuItem primaryText="Chicken" />,
                                    <MenuItem primaryText="Pork" />,
                                    <MenuItem primaryText="Seafood" />,
                                    <MenuItem primaryText="Vegetarian" />,
                                ]} 
                            />
                            <MenuItem
                                primaryText="Chinese"
                                menuItems={[
                                    <MenuItem primaryText="Beef" />,
                                    <MenuItem primaryText="Chicken" />,
                                    <MenuItem primaryText="Pork" />,
                                    <MenuItem primaryText="Seafood" />,
                                    <MenuItem primaryText="Vegetarian" />,
                                ]}
                            />
                            <MenuItem
                                primaryText="Italian"
                                menuItems={[
                                    <MenuItem primaryText="Beef" />,
                                    <MenuItem primaryText="Chicken" />,
                                    <MenuItem primaryText="Pork" />,
                                    <MenuItem primaryText="Seafood" />,
                                    <MenuItem primaryText="Vegetarian" />,
                                ]}
                            />
                            <MenuItem
                                primaryText="Indian"
                                menuItems={[
                                    <MenuItem primaryText="Beef" />,
                                    <MenuItem primaryText="Chicken" />,
                                    <MenuItem primaryText="Pork" />,
                                    <MenuItem primaryText="Seafood" />,
                                    <MenuItem primaryText="Vegetarian" />,
                                ]}
                            />
                            <MenuItem
                                primaryText="Mexican"
                                menuItems={[
                                    <MenuItem primaryText="Beef" />,
                                    <MenuItem primaryText="Chicken" />,
                                    <MenuItem primaryText="Pork" />,
                                    <MenuItem primaryText="Seafood" />,
                                    <MenuItem primaryText="Vegetarian" />,
                                ]}
                            />
                        </Menu>
                    </Popover>
                    <FlatButton
                        label="Submit a recipe"
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Login" style={style} />
                </ToolbarGroup>    
            </Toolbar>
        );
    }
}