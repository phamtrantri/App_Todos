/**
 * Created by phamtrantri on 8/31/2016.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import {Link} from 'react-router';
class Main extends React.Component {
    componentWillMount() {
        this.props.fetchInitialData();
    }
    render(){
        return (
            <div className="App">
                <div className="wrapper">
                    <div id="main">
                    <div className="sticky-nav">
                    <div className="App-header">
                        <h1 className="title">Personal Notebook</h1>
                    </div>
                    <nav>
                        <ul className="list-nav">
                            <Link to="/">
                                <li className="item-nav"><a className="text-nav">Home</a></li>
                            </Link>
                            <Link to="/new">
                                <li className="item-nav"><a className="text-nav">New Task</a></li>
                            </Link>
                        </ul>
                    </nav>
                    </div>
                    {React.cloneElement(this.props.children, this.props)}
                    </div>
                    <footer className="App-footer">
                        <fieldset>
                            <legend id="label-title">Developer</legend>
                            <label className="label-content">Pham Tran Tri</label> <br/>
                            <label className="label-content">Email: phamtrantri@gmail.com</label>
                        </fieldset>
                    </footer>
                </div>
            //hello Im tri, i new!!
            </div>
        )
    }
}
export default Main