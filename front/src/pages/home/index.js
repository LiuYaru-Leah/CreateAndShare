import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';
import backgroundPic from '../../statics/pic/back.png';
import loadArticle from './store/loadArticle';
import { getAllArticle } from '../../api/articles';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';



class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	

	render() {
		return (
			<HomeWrapper img={backgroundPic}>
				<HomeLeft>
					<img className='banner-img' alt='' src="https://qph.fs.quoracdn.net/main-qimg-3282f27a2121b0e5d5ea68259e0cb59b-lq" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
			</HomeWrapper>
		)
	}
	


	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
		 getAllArticle().then((res)=>{
			 console.log(res)
				if(res.length==0){
					loadArticle();
				}
		})
		
	
	
	  
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
	list: state.getIn(['home','list'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);
