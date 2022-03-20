import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import styles from './style.less'
import Category from "../Category";
import Ad from "../../containers/Home/subpage/Ad";
import List from "../../containers/Home/subpage/List";


class Cart extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data
		return (


				<div className={styles["detail-info-container"]}>
					<p>Cart</p><br/><br/>
					<div className={styles["info-container"]+" clear-fix"}>
						<div className={styles["info-img-container"]+" float-left"}>
							<img src="http://127.0.0.1:3000/8.png" />
						</div>
						<div className={styles["info-content"]}>
							<h1>psychology and life</h1>
							<div className={styles["star-content"]}>
								<span className={styles["price"]}>￥28</span>
							</div>
							<p className={styles["sub-title"]}>Start time: 2022.3.20 ~ 2022.6.31</p>
						</div>
					</div>
					<div className={styles["info-container"]+" clear-fix"}>
						<div className={styles["info-img-container"]+" float-left"}>
							<img src="http://127.0.0.1:3000/9.png" />
						</div>
						<div className={styles["info-content"]}>
							<h1>Printing Course</h1>
							<div className={styles["star-content"]}>
								<span className={styles["price"]}>￥98</span>
							</div>
							<p className={styles["sub-title"]}>Start time: 2022.3.20 ~ 2022.6.31</p>
						</div>
					</div>
				</div>
			)
	}
	componentDidMount(){

	}
}

export default Cart
