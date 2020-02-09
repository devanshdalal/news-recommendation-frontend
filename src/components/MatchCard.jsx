import React from "react";

class MatchCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlToImage : ""
    }
  }

  componentDidMount() {
    const { item } = this.props;
    // console.log('item', item)
    if (item.urlToImage) {
      this.setState({ urlToImage: item.urlToImage })
    }
  }
  
  render() {
    const { description = "", url, title, content } = this.props.item
    const { urlToImage } = this.state
    
    return (
      <a
        rel="noopener noreferrer"
        href={url}
        target="_blank"
        key={this.props.keyValue}
        style={this.props.style}
        className="a-no-style"
      >
      <div className="MatchCard">
        <div className="MatchCard_detail">
          <div className="MatchCard_title"><strong>{title}</strong></div>
          <div className="MatchCard_content">
            <div className="MatchCard_desc"><em>{description? description: content}</em></div>
            { urlToImage ?<img className="MatchCard_img" src={urlToImage} alt="img" />: <div />}
          </div>
        </div>
      </div>
      </a>
    );
  }
  
}

export default MatchCard;
