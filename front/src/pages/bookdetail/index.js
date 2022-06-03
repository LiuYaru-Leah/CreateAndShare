import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookDetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';
import { useEffect } from 'react';

function BookDetail(props) {
	const { title, content, getbookDetail } = props;
	const { id } = useParams();
  
	useEffect(() => {
	  getbookDetail(id);
	});
  
	return (
	  <BookDetailWrapper>
		<Header>{title}</Header>
		<Content dangerouslySetInnerHTML={{ __html: content }} />
	  </BookDetailWrapper>
	);
  }
  
  const mapState = (state) => ({
	title: state.getIn(["bookdetail", "title"]),
	content: state.getIn(["bookdetail", "content"]),
  });
  
  const mapDispatch = (dispatch) => ({
	getbookDetail(id) {
	  dispatch(actionCreators.getbookDetail(id));
	},
  });
  
  export default connect(mapState, mapDispatch)(BookDetail);
  
  
