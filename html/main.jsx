const Router = window.ReactRouter.Router;
const Route = window.ReactRouter.Route;
const hashHistory = window.ReactRouter.hashHistory;
const Link = window.ReactRouter.Link;

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e) {
        this.setState({password:e.target.value})
    }
    signIn(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
        axios.post('/signin', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    render() {
        return (
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label for="inputEmail" className="sr-only"> Email address </label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only"> Password</label>
                    <input type="passwprd" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in </button>
                </form>
                <div>
                    <Link to="/signup">{'Signup'}</Link>
                </div>
            </div>
        )
    }
}

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            name:'',
            email:'',
            password:''
        };
    }
    handleNameChange(e) {
        this.setState({name:e.target.value})
    }
    handleEmailChange(e) {
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e) {
        this.setState({password:e.target.value})
    }

    signUp() {
        axios.post('/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign up</h2>
                    <label for="inputName" className="sr-only">Name</label>
                    <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign Up</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render( 
    <Signin /> ,
    document.getElementById('app')
);

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Signin} path="/"></Route>
        <Route component={Signup} path="/signup"></Route>
    </Router>,
    document.getElementById('app')
);