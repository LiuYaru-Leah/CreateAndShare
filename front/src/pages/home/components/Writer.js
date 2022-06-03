import React, { PureComponent } from 'react';
import { WriterWrapper,WriterItem } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
	render() {
	  const { writerList } = this.props;
	  return (
		<WriterWrapper>
			Recommended writers
		  {writerList.map((item) => (
			<WriterItem key={item.get("id")}>
			  <img className="pic" src={item.get("imgUrl")} alt="" />
			  <div className="follow">Follow</div>
			  <div className='name'>{item.get("name")}</div>
			  <p>
				has written  <div className='wordcount'>{item.get("wordCount")}k </div> words
			  </p>
			  <p>
			  	<div className='wordcount'>{item.get("likeCount")}k </div> stars
			  </p>
			  
			</WriterItem>
		  ))}
		</WriterWrapper>
	  );
	}
  }
  const mapState = (state) => ({
	writerList: state.getIn(['home', 'writerList'])
})
  export default connect(mapState, null)(Writer);
