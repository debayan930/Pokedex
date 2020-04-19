import React, { Component } from 'react';
import Aux from '../Auxiliary';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import classes from './Layout.module.css';
import Topbar from '../../components/Navigation/Topbar/Topbar';

class Layout extends Component {
    state = {
        showSidedrawer: false
    }
    
    toggleSidedrawerHandler = () => {
        this.setState((prevState) => {
            return {
                showSidedrawer: !prevState.showSidedrawer
            }
        });
    }

    render(){
        return(
            <Aux>
                <Topbar drawerClicked={this.toggleSidedrawerHandler} />
                <Sidebar open={this.state.showSidedrawer} closed={this.toggleSidedrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;