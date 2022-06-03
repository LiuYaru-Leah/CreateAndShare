//Use jsx statements, so need to use React to compile
import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem } from '@mui/material';
//Connect the store
import {connect} from 'react-redux'; 
//find actionCreator in index.js of store 
import {actionCreator} from './store' 
import { actionCreators as loginActionCreators } from '../../pages/login/store'

//Import HeaderWrapper component, this way can avoid the css conflits
import{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

//no state component because the redux, which can improve the efficiency.
//UI component
class Header extends Component{
  constructor(props){
    super(props)
    this.state ={
      userInfor:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null,
    }
  }
  state = {
    anchor: null,
  };

  getListArea(){
    //structural assignment statement
    const {focused, list, page,totalPage, mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage} = this.props;
    //change the immutable array to a normal js array
    const newList = list.toJS();
    const pageList = [];

    if(newList.length){
      for (let index = (page-1) * 5; index < page*5 ; index++) {
      pageList.push(
        <SearchInfoItem key={newList[index]}> {newList[index]} </SearchInfoItem>
      )     
     }
    }
    
    if (focused || mouseIn) {
      return(
      <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          Hot Research
          <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
            {/* ref: can acquire the DOM node rendered by react, we need to use the DOM node to change the css style*/}
            <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
            Change Batch
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
            {/* loop <SearchInfoItem> */}
            {pageList}  
        </SearchInfoList>
      </SearchInfo>
      )
    }else{
      return null;
    }
  }

  handleClick = (event) => {
    this.setState({ anchor: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchor: null });
  };

  render(){
    const {focused,handleInputFocus,handleInputBlur,list,login, logout, userInfo} = this.props;
    const { anchor ,userInfor} = this.state;
    return(
      <HeaderWrapper>
        <Link to='/'>
					<Logo/>
				</Link>
        <Nav>
          <Link to={'/home'}>
            <NavItem className='left active'>
            <span className='bigiconfont'>&#xe601;</span>HomePage</NavItem>
          </Link>
          <Link to={'/about'}>
          <NavItem className='left'><span className='bigiconfont'>&#xe72d;</span>About</NavItem>
          </Link>
          <Link to='/buy'>
          <NavItem className='left'>
            <span className='bigiconfont'>&#xe620;</span>
            Free book
            </NavItem>
          </Link>
          {/* {
						login ? 
							<NavItem onClick={logout} className='right'><span className='bigbigiconfont'>&#xeb45;</span>LogOut</NavItem> : 
							<Link to='/login'><NavItem className='right'><span className='bigbigiconfont'>&#xe67c;</span>LogIn</NavItem></Link>
					} */}
          {login || userInfor ? (
            // <NavItem onClick={logout} className="right">
            //   LogOut
            // </NavItem>
            <>
              <NavItem className="right">
                <Avatar
                  alt="avatar"
                  src={userInfo.avatar || userInfor && userInfor.avatar}
                  onClick={this.handleClick}
                  style={{ marginTop: 8, cursor: 'pointer' }}
                />
              </NavItem>
              <Menu
                id="basic-menu"
                anchorEl={anchor}
                open={!!anchor}
                onClose={this.handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Link to="/center">
                  <MenuItem onClick={this.handleClose}>Center</MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    this.handleClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login">
              <NavItem className="right">LogIn</NavItem>
            </Link>
          )}
          <NavItem className='right'>
            {/* <span className="bigiconfont">&#xe636;&nbsp;&nbsp;&nbsp;</span> */}
            <span className="iconfont">&#xe62d;</span>
          </NavItem>
          <NavItem className='right'>
          </NavItem>
          <SearchWrapper>
              <CSSTransition
                in={focused}
                //transition time
                timeout={200}
                //object
                classNames="slide"
              >
                  <NavSearch
                    className={focused ? 'focused': ''}
                    onFocus={()=>handleInputFocus(list)}
                    onBlur={handleInputBlur}
                  ></NavSearch>
              </CSSTransition>
              {/* <svg className={focused ? 'focused icon': 'icon'}>
                <use xlinkHref="#icon-fangdajing"></use>
              </svg> */}
              <span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe617;</span>
              {/* invoke getListArea method, if focus, show; if blur, do not show, return null */}
              {this.getListArea()}
          </SearchWrapper>
          </Nav>
        <Addition>
          <Link to={'/write'}>
            <Button className='writing'>
              <span className="iconfont">&#xe600;</span>
                Write Article</Button>
          </Link>
          {login || userInfor ? null : (
            <Link to={'/register'}>
              <Button className="reg">Sign up</Button>
            </Link>
          )}
        </Addition>
      </HeaderWrapper>  
   );
 }
}

//how to map the data from store to props of header
//state: the data in store
const mapStateToProps = (state) =>{
  return{
    //the right focused is the focused in store
    //mapping the focused in store to that in Header(props)
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login', 'login']),
    userInfo: state.getIn(['login', 'userInfo'])
   // state.get('header').get('focused')
  }
}
//store.dispatch change the data in store
//dispatch: store.dispatch, store can use the changed data
const mapDispathToProps =(dispatch)=>{
  return{
    handleInputFocus(list){
      if(list.size===0){
        dispatch(actionCreator.getList());
      }
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle=0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if(page<totalPage){
         dispatch(actionCreator.changePage(page + 1));
      }else{
        dispatch(actionCreator.changePage(1));
      }
    },
    logout() {
      localStorage.removeItem('userInfo');
			dispatch(loginActionCreators.logout());
      window.open('/','_self')

      
		}

  }
}

//capacity component : connect()  all the data in the reduce of the store
export default connect(mapStateToProps, mapDispathToProps)(Header);