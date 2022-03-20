import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import styles from './style.less'
import Category from "../Category";
import Ad from "../../containers/Home/subpage/Ad";
import List from "../../containers/Home/subpage/List";


class Contact extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div className={styles["detail-info-container"]}>
					<div className={styles["info-container"]+" clear-fix"}>
						<p>Contact Us</p>
						<br/>
						<br/>
						<div className={styles["info-content"]}>
							<h4>title</h4>
							<input type="text"/>
							<h4>phone</h4>
							<input type="text"/>
							<h4>content</h4>
							<textarea name="textfield3" cols="30" rows="3"></textarea>
							<br></br>
							<button>submit</button>
						</div>
					</div>
				</div>
			)
	}
	componentDidMount(){

	}
}

export default Contact
