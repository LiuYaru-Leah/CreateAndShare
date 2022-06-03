import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, page,star,changeStarState } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<Link key={index} to={'/bookdetail/' + item.get('id')}>
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
										<p className='cata'>{item.get('cata')}</p>
									</ListInfo>
									</Link>
								</ListItem>
							
							
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>More books</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['buy', 'bookList']),
	page: state.getIn(['buy', 'articlePage']),
	detail: state.getIn(['buy','bookdetail']),
	
});

const mapDispatch = (dispatch) => ({
	changeStarState(star){
		dispatch(actionCreators.changeStarState(star))
	},
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispatch)(List);