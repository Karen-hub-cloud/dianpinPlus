import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class Side extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section id="hero" class="hero-section top-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="hero-content">
                                <p class="hero-text">This is Libelula</p>
                                <h1 class="hero-title">Welcome to a new shopping experience</h1>
                                <div>
                                    <form onClick={search} method="GET" class="sidebar-form">
                                        <div class="input-group">
                                            <input type="text" name="q" class="form-control" placeholder="Search product" value="{ request()->input('q') }"></input>
                                            <span class="input-group-btn">
                                                <button type="submit" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>Search</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    clickHandle() {
        window.history.back()
    }
}

export default Header