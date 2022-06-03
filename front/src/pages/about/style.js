import styled from 'styled-components';
import backgroundPic from '../../statics/pic/back.png';

export const AboutWrapper = styled.div`
	z-index: -1;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: url(${backgroundPic}) no-repeat 5px 10px;
	background-size:cover;
	.QRcode{
		width:100px;
		height:100px;
		display:block;
		float:Right;
		margin-right:100px;
	}
	.QRcode2{
		width:115px;
		height:115px;
		display:block;
		float:right;
		margin-right:0px;
		margin-bottom:10px;
	}
`;

export const AboutTitle = styled.div`
	line-height: 70px;
	padding: 0 15px;
	font-size: 30px;
	color: #FAF378;
	font-weight:bold;
	text-align:center;
	-webkit-text-stroke: 1px #01898e;
`;
export const AboutFirstLineContent = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 20px;
	color: #000000;
	font-weight:bold;
	-webkit-text-stroke: 1px #ffffff;
	text-indent: 30px;
`;
export const AboutContent = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 20px;
	color: #000000;
	font-weight:bold;
	-webkit-text-stroke: 1px #ffffff;

`;