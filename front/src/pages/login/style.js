import styled from 'styled-components';
import backgroundPic from '../../statics/pic/back.png';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: url(${backgroundPic}) no-repeat 5px 10px;
	background-size:cover;
`;

export const LoginBox = styled.div`
	width: 400px;
	margin: 100px auto;
	padding: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

export const ButtonGroup = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;