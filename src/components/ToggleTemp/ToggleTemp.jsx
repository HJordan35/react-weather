import React, { Component } from "react";
import Switch from "react-switch";

import styles from './ToggleTemp.module.css';

class ToggleTemp extends Component {
    render() {
        return (
            <label className={styles['toggle-label']} htmlFor="temperature-measurement-toggle">
                <Switch
                    onChange={this.props.onChange}
                    checked={this.props.isFahrenheit}
                    onColor="#65AED5"
                    offColor="#65AED5"
                    height={25}
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 14,
                                fontFamily: "Open Sans",
                                color: "white",
                                paddingRight: 2
                            }}
                        >F&#176;</div>
                    }
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 14,
                                color: "white",
                                paddingRight: 2
                            }}
                        >C&#176;</div>
                    }
                />
            </label>
        );
    }
}

export default ToggleTemp;