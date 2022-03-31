import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);
        this.removeAllProducts = this.removeAllProducts.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            tutorials: [],
            currentProduct: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveProducts();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveProducts() {
        ProductDataService.getAll()
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
        this.retrieveProducts();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    setActiveProduct(tutorial, index) {
        this.setState({
            currentProduct: tutorial,
            currentIndex: index
        });
    }

    removeAllProducts() {
        ProductDataService.deleteAll()
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
            currentProduct: null,
            currentIndex: -1
        });

        ProductDataService.findByTitle(this.state.searchTitle)
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
        const { cart, currentProduct, currentIndex } = this.state;

        return (
            <ul class="row text-center list-unstyled">
                <li class="col-md-3 col-sm-6 col-xs-12 product-list">
                    <div class="single-product">
                        <div class="product">
                            <div class="product-overlay">
                                <div class="vcenter">
                                    <div class="centrize">
                                        <ul class="list-unstyled list-group">
                                            <li>
                                                <form action="{cart.store}" class="form-inline" method="post">
                                                    {csrf_field()}
                                                    <input type="hidden" name="quantity" value="1" />
                                                    <input type="hidden" name="product" value="{ currentProduct.id }"></input>
                                                    <button id="add-to-cart-btn" type="submit" class="btn btn-warning" data-toggle="modal" data-target="#cart-modal"> <i class="fa fa-cart-plus"></i> Add to cart</button>
                                                </form>
                                            </li>
                                            <li>  <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal_{ currentProduct.id }"> <i class="fa fa-eye"></i> Quick View</button></li>
                                            <li>  <a class="btn btn-default product-btn" href="{ route('front.get.product', currentProduct.slug) }"> <i class="fa fa-link"></i> Go to product</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            @if(isset(currentProduct.cover))
                            <img src="{currentProduct.cover}" alt="{ currentProduct.name }" class="img-bordered img-responsive"></img>
                            @else
                            <p class="alert alert-warning text-center">Upload cover image.</p>
                            @endif
                        </div>

                        <div class="product-text">
                            <h4>{currentProduct.name}</h4>
                            <p>
                                {'cart.currency'}
                            </p>
                        </div>
                        <div class="modal fade" id="myModal_{ currentProduct.id }" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    @include('layouts.front.product')
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <div class="row">
                    <div class="col-md-12">
                        <div class="pull-left">{currentProducts.links}</div>
                    </div>
                </div>
            </ul>
        );
    }
}