import React, { useState } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
    const history = useHistory();

    const [loginInput, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`api/login`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("ログイン成功", res.data.message, "success");
                    history.push("/");
                    location.reload();
                } else if (res.data.status === 401) {
                    swal("注意", res.data.message, "warning");
                } else {
                    setLogin({
                        ...loginInput,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
                                <div className="form-group mb-3">
                                    <label>Mail Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInput}
                                        value={loginInput.email}
                                        className="form-control"
                                    />
                                    <span>{loginInput.error_list.email}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleInput}
                                        value={loginInput.password}
                                        className="form-control"
                                    />
                                    <span>
                                        {loginInput.error_list.password}
                                    </span>
                                </div>
                                <div className="form-group mb-3">
                                    {/* <button
                                        type="submit"
                                        className="btn btn-primary"
                                        ontouchend={loginSubmit}
                                    >
                                        Login
                                    </button> */}
                                    <input
                                        type="button"
                                        className="btn btn-primary"
                                        value="Login"
                                        onClick={loginSubmit}
                                    ></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
