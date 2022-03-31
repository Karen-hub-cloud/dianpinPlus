import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../Star'

import styles from './style.less'

class DetailInfo extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data
		return (
				<div className={styles["detail-info-container"]}>
					<div className={styles["info-container"]+" clear-fix"}>
						<div className={styles["info-img-container"]+" float-left"}>
							<img src={data.img} />
						</div>
						<div className={styles["info-content"]}>
							<h1>{data.title}</h1>
							<div className={styles["star-content"]}>
								<Star star={data.star}/>
								<span className={styles["price"]}>￥{data.price}</span>
							</div>
							<p className={styles["sub-title"]}>{data.subTitle}</p>
						</div>
					</div>
<<<<<<< HEAD
					<p dangerouslySetInnerHTML={{__html:data.desc}} className={styles["info-desc"]}></p>
					<br></br><br></br><button>buy</button>
=======
					<p dangerouslySetInnerHTML={__html:data.desc} className={styles["info-desc"]}></p>
>>>>>>> d48ce117c94fdc3e15c84eae6f4eb7c81b46a43e
				</div>
			)
	}
	componentDidMount(){
		
	}
}

export default DetailInfo