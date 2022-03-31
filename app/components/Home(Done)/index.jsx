import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class Index extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return (
			<section class="new-product t100 home">
				<div id={styles["common-header"]}>
					<div class="section-title b50">
						<h2></h2>
					</div>
					<div id="browse-all-btn"> <a class="btn btn-default browse-all-btn" href="{ route('front.category.slug', $cat1->slug) }" role="button">browse all items</a></div>
				</div>
			</section>
		)
	}
	clickHandle() {
		window.history.back()
	}
}

export default Header