import { Component } from "react";

class Register extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        return (
            
           <div className="login">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sign In</h5>
            <form>
             
            <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="usernameHelp"
                placeholder="Enter Username"
                />
                                        </div>
                                         <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
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