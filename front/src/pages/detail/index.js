import React, {  useState,createElement,useEffect } from 'react';
import { connect } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { DetailWrapper, Header, Content} from './style';
import { actionCreators } from './store';
import {detail} from '../../api/articles';
import ArticleComment from './component/ArticleComment';
import {Tooltip, Divider } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { articleLikes,articleDisikes } from '../../api/articles';


function Detail(props) {
	
    const [title,setTitle] = useState();
    const [content,setContent] = useState();
	const [commentNum,setCommentNum ] =useState('');
	const [commentList,setCommentList] = useState('');
	const { id } = useParams();

	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [action, setAction] = useState(null);
	const [likeList,setLikeList] = useState('');
	const [liked,setLiked] =useState(0);
	
  
	const like = () => {
		if(liked ==1){
			return
		}
		setLikes(likes+1)
	 if(liked==-1){
		setDislikes(dislikes-1);	
	 }
	 setLiked(1);
	  setAction('liked');		
	};
  
	const dislike = () => {
		if(liked == -1){
			return
		}
		setDislikes(dislikes+1);
		if(liked == 1){
			setLikes(likes-1);
			// likeArticle({articleID:id,likes:likes})
		}
	   setLiked(-1);
	  setAction('disliked');
	};

	
	 useEffect(() => {

		detail(id).then((res)=>{
		 setTitle(res.title);
		 setContent(res.content)
		 setCommentNum(res.comment);
		 setCommentList(res.commentList);
		 setLikes(res.likes);
		 setLikeList(res.likeList);
		 setDislikes(res.dislikes);	

		if(res.liked ===1){
			setAction('liked');
			setLiked(1)
		}else if(res.liked === -1){
			setAction('disliked');
			setLiked(-1)
		}
	})
	},[]);
	useEffect(()=>{
		articleLikes({articleID:id,likes:likes,dislikes:dislikes,liekd:liked}).then((res)=>{
		
		})
	},[likes])
	useEffect(()=>{
		articleDisikes({articleID:id,likes:likes,dislikes:dislikes,liekd:liked}).then((res)=>{
		
		})
	},[dislikes])
	
	


	return (
	

	 	 <DetailWrapper>
			<Header>{title}</Header>
			<Content dangerouslySetInnerHTML={{ __html: content }} />
			<Divider/>
			<Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>
			<ArticleComment></ArticleComment>
			{/* <UserComponent></UserComponent> */}
		  </DetailWrapper>

	);
  }
  

  const mapState = (state) => ({
	title: state.getIn(["detail", "title"]),
	content: state.getIn(["detail", "content"]),
	likes: state.getIn(['detail','likes'])
  });
  
  const mapDispatch = (dispatch) => ({
	getDetail(id) {
	  dispatch(actionCreators.getDetail(id));
	},
  });
  
  export default connect(mapState, mapDispatch)(Detail);