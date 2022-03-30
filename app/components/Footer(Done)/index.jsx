import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import styles from './style.less'

class Footer extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const menu = this.props.app.location;
		return (
				<footer class="footer-section footer">
				<div id={styles["container"]}>
					<div id={styles["text-center"]}>
						<ul>
							<span className={styles["back-icon"]} onClick={this.clickHandle.bind(this)}>
								Your account
							</span>
						</ul>
						<ul class="footer-social">
							<li> <a href=""> <i class="fa fa-facebook" aria-hidden="true"></i>  </a> </li>
							<li> <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i>   </a> </li>
							<li> <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i>  </a> </li>
							<li> <a href=""> <i class="fa fa-pinterest-p" aria-hidden="true"></i>  </a> </li>
						</ul>
						<p>&copy; All Rights Reserved</p>
					</div>
				</div>
			</footer>
			)
	}
	componentDidMount(){
		
	}
}

function mapStateToProps(state){
	return {
		app:state.app
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)