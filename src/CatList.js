// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  render() {
    const imgTags = this.props.catPics.map(pic => <img src={pic.url} alt="another cat pic"/>)
    return (
      <div>
        {imgTags}
      </div>
    )
  }
}

export default CatList;
