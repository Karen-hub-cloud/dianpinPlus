import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Me = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <section class="container content">
            <div class="row">
                <div class="col-md-12">
                    <h2> <i class="fa fa-home"></i> My Account</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                            <li role="presentation"><a href="#orders" aria-controls="orders" role="tab" data-toggle="tab">Orders</a></li>
                            <li role="presentation"><a href="#address" aria-controls="address" role="tab" data-toggle="tab">Addresses</a></li>
                        </ul>
                        <div class="tab-content customer-order-list">
                            <div role="tabpanel" class="tab-pane" id="profile">
                                {name} <br /><small>{email}</small>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="orders">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>Date</td>
                                            <td>Total</td>
                                            <td>Status</td>
                                        </tr>
                                    </tbody>
                                    <tbody>s
                                            {Order.map(order =>
                                                <td>
                                                    <a data-toggle="modal" data-target="" title="Show order" href="javascript: void(0)">strtotime({order.created_at})</a>
                                                    <div class="modal fade" id="o" tabindex="-1" role="dialog" aria-labelledby="MyOrders">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                                    <h4 class="modal-title" id="myModalLabel">Reference</h4>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <th>Address</th>
                                                                            <th>Payment Method</th>
                                                                            <th>Total</th>
                                                                            <th>Status</th>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <address>
                                                                                        <strong>{order.address.alias}</strong><br />
                                                                                        {order.address.alias}
                                                                                    </address>
                                                                                </td>
                                                                                <td>{order.payment}</td>
                                                                                <td>{order.total}</td>
                                                                                <td><p class="text-center" style="color: #ffffff;">{order.status}</p></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <p>Order details:</p>
                                                                    <table class="table">
                                                                        <thead>
                                                                            <th>Name</th>
                                                                            <th>Quantity</th>
                                                                            <th>Price</th>
                                                                            <th>Cover</th>
                                                                        </thead>
                                                                        <tbody>
                                                                            {Product.map(item =>
                                                                                <tr>
                                                                                    <td>{item.name}</td>
                                                                                    <td>{item.quantity}</td>
                                                                                    <td>{item.price}</td>
                                                                                    <td><img src="{item.cover}" width="50px" height="50px" alt="" class="img-orderDetail"></img></td>
                                                                                </tr>
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;