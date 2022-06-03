import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { getAllArticle } from '../../../api/articles';


class List extends PureComponent {

componentDidMount(){

	getAllArticle().then((res)=>{
		
		this.props.addHomeList(res,1)
	
})
}

	render() {
		const { list, getMoreList, page } = this.props;
		
		return (
			<div>
				{
					list.map((item,index) => {
				
						return (
							<Link key={index} to={'/detail' + item.get('_id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc' dangerouslySetInnerHTML={{__html: item.get('content')}} ></p >
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>More articles</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	},
	addHomeList(list,page){
		dispatch(actionCreators.addHomeList(list,page))
	}

})

export default connect(mapState, mapDispatch)(List);