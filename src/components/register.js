import { Component } from "react";

class Register extends Component {
    state = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword:""
    }
    handleFullName = (e) => {
        this.setState({
            fullName: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }
    handleSubmit = (e) => {
        e.preventDefault();
        
     }
    
    render() {
        return (
            
           <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Sign Up</h5>
                          <form onSubmit={ this.handleSubmit }>
                              <div className="form-group">
                                <label htmlFor="ExampleInputFullName1">Full name</label>
                                  <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            onChange={ this.handleFullName }

                                />
                              </div>
                                          
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter email"
                                  onChange={this.handleEmail}
                                />
                              </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Password"
                                  onChange={this.handlePassword}
                                />
                              </div>
                      
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Confirm password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Password"
                                  onChange={this.handleConfirmPassword}
                                />
                              </div>
                      
                            <button type="submit" className="btn btn-success">
                            Submit
                            </button>                 
                            </form>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <pre>
                              State Data
                              <br />
                              <br />
                              {JSON.stringify(this.state, null, 2)}
                            </pre>
                          </div>
                        </div>
            </div>
</div>
        
    )
    }
}
export default Register;