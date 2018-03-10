import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}