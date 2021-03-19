import React from "react";

class RegForm extends React.Component {
  state = {    fName: "", midInit: "", lName: "", stName: "", stNo: "", apartNo: "", city: "", state: "",    ZIP: "", phoneNo: "", email: "", courseCode: "" };

  inputUpdate = (event) => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({ [key]: val });
    // this.setState({fName: event.target.value});
    // this.setState({midInit: event.target.value});
    // this.setState({lName: event.target.value});
  };

  render() {
    return (
      
      <form class="ui form" style ={{padding:'50px'}}>

      <div class="two fields">  
        <div class= "six wide field" >
          <label> Student Number:</label>
          <input type="text" name="stNo" value = {this.state.stNo} onChange = {(ev) => this.setState({stNo: ev.target.value}) } />                      
        
        </div>

        <p>(TESTING - {this.state.fName} )  </p> {/*TEST*/}
        
      </div>

    <div class="three fields">
      <div class="field">        
        <label> First Name:</label> 
        <input type="text"  value = {this.state.fName} onChange = {(ev) => this.setState({fName: ev.target.value.toUpperCase() }) } name="fName" placeholder="USE CAPITAL LETTERS" />
      
      </div>
      <div class="field">   
        <label> Middle Initias:</label>
        <input type="text" name="midInit" value = {this.state.midInit} onChange = {(ev) => this.setState({midInit: ev.target.value.toUpperCase()}) } />
      
      </div>  
      <div class="field">     
        <label> Last Name:</label>
        <input type="text" name="lName" value = {this.state.lName} onChange = {(ev) => this.setState({lName: ev.target.value.toUpperCase()}) } />                      
      
      </div>      
    </div>

    <div class="fields">
        <div class="twelve wide field">
          <label> Street Name & Number :</label> 
          <input type="text" name="stName" onChange={this.inputUpdate} /> 
        </div>
        <div class="four wide field">
            <label> Apartment# :</label> 
            <input type="text" name="apartNo" onChange={this.inputUpdate} />
        </div> 
        
    </div>
        <div class="field">
        <label> City:</label>
        <input type="text" name="city" onChange={this.inputUpdate} />
        </div>
        <div class="field">
        <label> State:</label>
        <input type="text" name="state" onChange={this.inputUpdate} />
        </div>
        <div class="field">
        <label> Zip Code:</label>
        <input type="text" name="ZIP" onChange={this.inputUpdate} />
        </div>
        <div class="field">
        <label> Phone Number:</label>
        <input type="text" name="phoneNo" onChange={this.inputUpdate} />
        </div>
        <div class="field">
        <label> Email Address:</label>
        <input type="email" name="email" onChange={this.inputUpdate} />
        </div>
        <div class="field">
        <label>Course Code:</label>      
        <input type="text" name="courseCode" onChange={this.inputUpdate} />
        </div>
        <div class="field">      
        <input type='submit' class="ui button"/>
        </div>  
      </form>
      
    );
  }
}
export default RegForm;
