import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@mui/material';
import backgroundPic from '../../statics/pic/back.png';
import { getPersonList } from '../../api/articles';
import List from './components/List';
import { Typography,Row,Col } from 'antd';
import { 
	CenterWrapper,
	CenterLeft
} from './style';


const { Title } = Typography;
class Center extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      userInfor:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null,
      articlesList:[],
      totalLiked:0
    }
  }

  componentDidMount(){
    this.getPersonListFun()
}
async getPersonListFun(){
  const {userInfor} = this.state;
    let res = await getPersonList({userId:userInfor.id})
    if(res.success){
      let count= 0
      res.data.map(item=>{
        count += item.likes
      })
      
      this.setState({
        articlesList:res.data,
        totalLiked:count
      })
    }
}
	render() {
        const {userInfo} = this.props;
        const {userInfor,articlesList,totalLiked} = this.state;
		return (
			<CenterWrapper img={backgroundPic}>
          <Avatar
            alt="avatar"
            src={userInfo.avatar || userInfor && userInfor.avatar}
            style={{ marginTop: 8, cursor: 'pointer', width: 150, height: 150 }}
          />
          {/* username */}
          <Row>
            <Col span={6}><Title level={3}> UserName：{userInfo.username || userInfor && userInfor.username}</Title></Col>
            <Col span={6}><Title level={3}> likedCount：{totalLiked}</Title></Col>
          </Row>
				<CenterLeft>
					 
           <List articlesList={articlesList} /> 
				</CenterLeft> 
			</CenterWrapper>
           

		);
	}
}

const mapState = (state) => ({
	list: state.getIn(['center','list']),
    loginStatus: state.getIn(['login', 'login']),
    userInfo: state.getIn(['login','userInfo']),
})


export default connect(mapState, null)(Center);
