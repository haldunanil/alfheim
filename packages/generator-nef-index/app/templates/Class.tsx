import React, { Component } from "react";
import Styled<%= name %> from "./<%= name %>.styles";

export interface <%= name %>Props extends React.HTMLAttributes<HTMLElement> {} 

class <%= name %> extends Component<<%= name %>Props> {
  public render() {
    return <div {...this.props} />;
  }
}

export default <%= name %>;
