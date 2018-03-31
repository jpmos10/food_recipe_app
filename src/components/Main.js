import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TopNavbar from 'TopNavbar';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };       
    }



    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TopNavbar />
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}