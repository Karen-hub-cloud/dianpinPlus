import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className={styles["city-list-container"]}>
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'beijing')}>beijing</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'shanghai')}>shanghai</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'hangzhou')}>hangzhou</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'guangzhou')}>guangzhou</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Dallas')}>Dallas</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Los Angeles')}>Los Angeles</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'New York')}>New York</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Seattle')}>Seattle</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Austin')}>Austin</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Boston')}>Boston</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Houston')}>Houston</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Little Rock')}>Little Rock</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList