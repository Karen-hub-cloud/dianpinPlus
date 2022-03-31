import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../Cart(Done)/detail.less";

export default class CartsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveCarts = this.retrieveCarts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveCart = this.setActiveCart.bind(this);
        this.removeAllCarts = this.removeAllCarts.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            tutorials: [],
            currentCart: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveCarts();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveCarts() {
        CartDataService.getAll()
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveCarts();
        this.setState({
            currentCart: null,
            currentIndex: -1
        });
    }

    setActiveCart(tutorial, index) {
        this.setState({
            currentCart: tutorial,
            currentIndex: index
        });
    }

    removeAllCarts() {
        CartDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        this.setState({
            currentCart: null,
            currentIndex: -1
        });

        CartDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { cart, currentCart, currentIndex } = this.state;

        return (
            <div>
                <div className={styles["row"]}>
                    <div className={styles["col-md-12"]}>
                        <ol class="breadcrumb">
                            <li><a href="{ route('home') }"> <i class="fa fa-home"></i> Home</a></li>
                            <li class="active">Cart</li>
                        </ol>
                    </div>
                </div>

                <div className={styles["row"]}>
                    <div className={styles["col-md-12 content"]}>
                        <div className={styles["box-body"]}>
                            @include('layouts.errors-and-messages')
                        </div>
                        <h3><i class="fa fa-cart-plus"></i> Shopping Cart</h3>
                    </div>
                </div>


                <div className={styles["row"]}>
                    <div className={styles["col-md-12"]}>
                        <div className={styles["row hidden-xs hidden-sm"]} style="height: 40px;">

                            <div className={styles["col-lg-2 col-md-2 col-sm-4 col-xs-4"]}>
                                <div className={styles["row"]}>
                                    <div className={styles["col-lg-12 col-md-12 col-sm-12 col-xs-12"]}><b>Cover</b></div>
                                </div>
                            </div>

                            <div className={styles["col-lg-10 col-md-10 col-sm-8 col-xs-8"]}>
                                <div className={styles["row"]}>
                                    <div className={styles["col-lg-5 col-md-5"]}><b>Name</b></div>
                                    <div className={styles["col-lg-2 col-md-2"]}><b>Quantity</b></div>
                                    <div className={styles["col-lg-1 col-md-1"]}><b>Remove</b></div>
                                    <div className={styles["col-lg-2 col-md-2"]}><b>Price</b></div>
                                    <div className={styles["col-lg-2 col-md-2"]}><b>Total</b></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["row"]}>
                            <div className={styles["col-lg-2 col-md-2 col-sm-3 col-xs-4"]}>
                                <div className={styles["row"]}>
                                    <div className={styles["col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"]}>
                                        <a href="{ route('front.get.cart', [cartItem.cart.slug]) }" class="hover-border">
                                            <img src="{cartItem.cover}" alt="{ cartItem.name }" class="img-responsive img-thumbnail"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["col-lg-10 col-md-10 col-sm-9 col-xs-8"]}>
                                <div className={styles["row"]}>


                                    <div className={styles["col-lg-5 col-md-5 col-sm-12 col-xs-12"]}>
                                        <h4 style="margin-bottom:5px;">{cartItem.name}</h4>
                                        @if(cartItem.options.has('combination'))
                                        <div style="margin-bottom:5px;">
                                            @foreach(cartItem.options.combination as $option)
                                            <small class="label label-primary">{$option['value']}</small>
                                            @endforeach
                                        </div>
                                        @endif
                                        {cartItem.cart.description}
                                    </div>

                                    <div className={styles["col-lg-2 col-md-2 col-sm-4 col-xs-8"]}>
                                        <form action="{ route('cart.update', cartItem.rowId) }" class="form-inline" method="post">
                                            {csrf_field()}
                                            <input type="hidden" name="_method" value="put"></input>
                                            <div className={styles["input-group"]}>
                                                <input type="text" name="quantity" value="{ cartItem.qty }" class="form-control input-sm" />
                                                <span class="input-group-btn"><button class="btn btn-default btn-sm">Update</button></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={styles["col-lg-1 col-md-1 col-sm-8 col-xs-4"]}>
                                        <form action="{ route('cart.destroy', cartItem.rowId) }" method="post">
                                            {csrf_field()}
                                            <input type="hidden" name="_method" value="delete"></input>
                                            <button onclick="return confirm('Are you sure?')" class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
