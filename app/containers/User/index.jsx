import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

import Face from './subpage/face'
import styles from './style.less'
import {Link} from "react-router-dom";

class User extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id={styles["user-info"]}>
					<Face />
<<<<<<< HEAD
					<div style={{height: '15px'}}></div>
					<div className={styles["home-header-right"]+" float-right"}>
						<Link to="/cart">
							<i className="icon-star"> Cart</i>
						</Link>
					</div>

					<div className={styles["home-header-right"]+" float-right"}>
						<Link to="/contact">
							<i className="icon-star"> Contact Us</i>
						</Link>
					</div>
=======
					<div style={height: '15px'}></div>
>>>>>>> d48ce117c94fdc3e15c84eae6f4eb7c81b46a43e
				</div>
			)
	}
	componentDidMount(){
		this.props.appActionList.menu({
			location:4
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		appActionList:bindActionCreators(appActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User)
