/**
 * Created by wm.liu on 2018/5/9.
 */
import React from 'react';
import './nav.scss';

import {NavConfig} from './config';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="g-nav">
                <p className="nav-logo">logo</p>
                <ul className="nav-container">
                    {NavConfig.map((navItem) => {
                        return <li key={navItem.id}>{navItem.text}</li>
                    })}
                </ul>
            </div>
        );
    }
}