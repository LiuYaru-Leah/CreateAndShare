import React, { PureComponent } from 'react';
// import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  LikeOutlined,MessageOutlined, LikeFilled,StarOutlined } from '@ant-design/icons'
import {List as AntdList,Space,Empty} from 'antd';
import { Typography } from 'antd';

const { Title} = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
class List extends PureComponent {

	render() {
		const { articlesList } = this.props;
		console.log(articlesList);
		if(articlesList && articlesList.length){
			return (
				<AntdList
					itemLayout="vertical"
					size="large"
					dataSource={articlesList}
					renderItem={item => (
						<Link key={item.content} to={'/detail' + item.userID}>
						<AntdList.Item
							key={item.title}
							actions={[
								<IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
								<IconText icon={MessageOutlined} text={item.comment} key="list-vertical-message" />,
							]}
							extra={
								item.imgUrl?<img
									width={272}
									alt="logo"
									src={item.imgUrl}
									// src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>:null
							}
						>
							<AntdList.Item.Meta
								title={<Title level={3}>{item.title}</Title>}
							/>
							<p style={{fontSize:'16px'}} dangerouslySetInnerHTML={{__html:item.content}} />
						</AntdList.Item>
						</Link>
					)}
				/>
			)
		}else{
			return (
				<Empty
				image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
				imageStyle={{
					height: 160,
				}}
				description={
					<span style={{fontSize:'20px'}}>
						You have not published an article yet, <a href="/write">please do so</a>
					</span>
				}
			/>
			)
		}
		
	}
}

const mapState = (state) => ({
	list: state.getIn(['center', 'articleList'])
});


export default connect(mapState, null)(List);


// {
// 	articlesList.map((item,index) => {

// 		return (
// 			<Link key={index} to={'/detail' + item.userID}>
// 				<ListItem >
// 				{item.imgUrl && 	<img alt='' className='pic' src={item.imgUrl} />}
// 					<ListInfo>
// 						<h3 className='title'>{item.title}</h3>
// 						<p className='desc' dangerouslySetInnerHTML={{__html:item.content}}></p>
// 					</ListInfo>
					
// 				</ListItem>

// </Link>)
// 	})
// }