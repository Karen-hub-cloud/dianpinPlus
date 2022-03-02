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
								<Link to="/search/jingdian"><li className={styles["jingdian"]+" float-left"}>service</li></Link>
	                            <Link to="/search/ktv"><li className={styles["ktv"]+" float-left"}>class</li></Link>
	                            <Link to="/search/gouwu"><li className={styles["gouwu"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/shenghuofuwu"><li className={styles["shenghuofuwu"]+" float-left"}>service</li></Link>
	                            <Link to="/search/jianshenyundong"><li className={styles["jianshenyundong"]+" float-left"}>class</li></Link>
	                            <Link to="/search/meifa"><li className={styles["meifa"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/qinzi"><li className={styles["qinzi"]+" float-left"}>service</li></Link>
	                            <Link to="/search/xiaochikuaican"><li className={styles["xiaochikuaican"]+" float-left"}>class</li></Link>
	                            <Link to="/search/zizhucan"><li className={styles["zizhucan"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/jiuba"><li className={styles["jiuba"]+" float-left"}>service</li></Link>
							</ul>
						</div>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/search/meishi"><li className={styles["meishi"]+" float-left"}>service</li></Link>
	                            <Link to="/search/dianying"><li className={styles["dianying"]+" float-left"}>class</li></Link>
	                            <Link to="/search/jiudian"><li className={styles["jiudian"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/xuixianyule"><li className={styles["xuixianyule"]+" float-left"}>service</li></Link>
	                            <Link to="/search/waimai"><li className={styles["waimai"]+" float-left"}>class</li></Link>
	                            <Link to="/search/huoguo"><li className={styles["huoguo"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/liren"><li className={styles["liren"]+" float-left"}>service</li></Link>
	                            <Link to="/search/dujiachuxing"><li className={styles["dujiachuxing"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/zuliaoanmo"><li className={styles["zuliaoanmo"]+" float-left"}>goods</li></Link>
	                            <Link to="/search/zhoubianyou"><li className={styles["zhoubianyou"]+" float-left"}>service</li></Link>
							</ul>
						</div>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/search/ribencai"><li className={styles["ribencai"]+" float-left"}>service</li></Link>
	                            <Link to="/search/SPA"><li className={styles["SPA"]+" float-left"}>service</li></Link>
	                            <Link to="/search/jiehun"><li className={styles["jiehun"]+" float-left"}>service</li></Link>
	                            <Link to="/search/xuexipeixun"><li className={styles["xuexipeixun"]+" float-left"}>service</li></Link>
	                            <Link to="/search/xican"><li className={styles["xican"]+" float-left"}>service</li></Link>
	                            <Link to="/search/huochejipiao"><li className={styles["huochejipiao"]+" float-left"}>service</li></Link>
	                            <Link to="/search/shaokao"><li className={styles["shaokao"]+" float-left"}>service</li></Link>
	                            <Link to="/search/jiazhuang"><li className={styles["jiazhuang"]+" float-left"}>service</li></Link>
	                            <Link to="/search/chongwu"><li className={styles["chongwu"]+" float-left"}>service</li></Link>
	                            <Link to="/search/quanbufenlei"><li className={styles["quanbufenlei"]+" float-left"}>service</li></Link>
							</ul>
						</div>
					</ReactSwipe>
					<div className={styles["index-container"]}>
						<ul>
							<li className={this.state.index === 0 ? styles["selected"] : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 1 ? styles["selected"] : ''} data-index="1" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 2 ? styles["selected"] : ''} data-index="2" onClick={this.SwipeCategory.bind(this)}></li>
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