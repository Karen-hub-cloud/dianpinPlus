import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'

import styles from './style.less'

class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index:0
	  }
	}
	render(){

		const opt = {
			auto:2500,
			callback:(index)=>{
				this.setState({
					index:index
				})
			}
		}

		return (
				<div id={styles["home-category"]}>
					<ReactSwipe swipeOptions={opt}>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/cart"><li className={styles["cart"]+" float-left"}>Cart</li></Link>
	                            <Link to="/contact"><li className={styles["contact"]+" float-left"}>Contact Us</li></Link>
	                            <Link to="/search/good"><li className={styles["gouwu"]+" float-left"}>goods</li></Link>
								<Link to="/search/course"><li className={styles["zizhucan"]+" float-left"}>Course</li></Link>
	                            <Link to="/search/shenghuofuwu"><li className={styles["shenghuofuwu"]+" float-left"}>service</li></Link>

							</ul>
						</div>
					</ReactSwipe>
					<div className={styles["index-container"]}>
						<ul>
							<li className={this.state.index === 0 ? styles["selected"] : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
						</ul>
					</div>
				</div>
			)
	}

	SwipeCategory(e){

		// this.setState({
		// 	index:parseInt(e.target.getAttribute("data-index"))
		// })

		e.preventDefault();
		e.stopPropagation();
	}
}

export default Category
