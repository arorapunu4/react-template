import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";

class Dashboard extends Component {

    render() {
      return (
        <div>
            puneet arora , shahank
        </div>
          
      );
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);