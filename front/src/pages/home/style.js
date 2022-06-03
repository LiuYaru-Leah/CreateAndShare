import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #008f95;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #008f95;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #008f95;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 65px;
	padding: 20px 0 0 0;
	background: url(${(props) => props.imgUrl}) no-repeat;
	background-size: cover;
	font-size:20px;
	font-weight:bold;
	text-align:center;
	line-height: 24px;
	color:white;
	-webkit-text-stroke: 1px black;
`;

export const WriterWrapper = styled.div`
	box-sizing:border-box;
	color:rgb(51,51,51)
	display:block;
	font-size:20px;
	line-height:20px;
	magin-bottom:20px;
	padding-top:0;
	text-align:center;
	background:#f8edeb;
	border-radius:20px;
`;

export const WriterItem = styled.div`
	box-sizing:border-box;
	color:rgb(51,51,51);
	display:block;
	font-size:13px;
	line-height:20px;
	lisy-style-position:outside;
	margin-top:15px;
	text-align:left;
	text-size-adjust:100%;
	background:#f4f3ee;
	.pic{
		height:48px;
		width:48px;
		vertical-align:middle;
		border-top-left-radius:50%;
		border-top-right-radius:50%;
		border-bottom-right-radius:50%;
		border-bottom-left-radius:50%;
	}
	.follow{
		float:right;
		cursor:pointer;
		font-weight:400;
		line-height:normal;
		color:rgb(66,192,46);
		text-size-adjust:100%;
	}
	.name{
		background:rgba(0,0,0,0)
		box-sizing:border-box;
		line-height:20px;
		margin-right:60px;
		padding-top:5px;
		color:black;
		font-size:20px;
		color: #000000;
		display:block;
		list-style-position:outside;
		text-decoration-color:rgb(51,51,51);
		text-decoration-style:solid;
		text-decoration-thickness:auto;
		text-size-adjust:100%
		-webkit-text-stroke: 1px #cae9ff;
	}
	.wordcount{
		display: inline-block;
		color:red;
		font-size:16px;
		-webkit-text-stroke: 1px #000000;
	}
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`