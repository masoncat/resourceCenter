/**
 * Created by wm.liu on 2018/5/9.
 */
import React from 'react';
import './agents.scss';
// 业务组件
import Nav from '../../common/nav';

export default class Agents extends React.Component {
    render() {
        return (
            <div className="g-page" id={"Agents"}>
                <Nav/>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}