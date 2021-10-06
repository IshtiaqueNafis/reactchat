import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home/home.component"
import {toast, ToastContainer} from "react-toastify";
import SignIn from "./Components/signin/signin.component";
import SignUp from "./Components/signup/signup.component";
import SidePanel from "./Components/sidePanel/sidepanel.components";

class App extends Component {
    showToast = (type, message) => {
        switch (type) {
            case 0:
                toast.warning(message)
                break;
            case 1:
                toast.success(message);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Router>
                <ToastContainer
                    autoClose={2000}
                    hideProgressBar={true}
                    postion={toast.POSITION.TOP_CENTER}
                />
                <Switch>
                    <Route
                        exact path="/"
                        render={props => <Home {...props}/>}
                    />
                    <Route
                        path='/signin'
                        render={props => <SignIn showToast={this.showToast} {...props}/>}/>
                    <Route
                        path='/signup'
                        render={props => <SignUp showToast={this.showToast} {...props}/>}/>
                    <Route
                        path='/chat'
                        render={props => <SidePanel showToast={this.showToast} {...props}/>}/>

                </Switch>

            </Router>
        );
    }
}

export default App;