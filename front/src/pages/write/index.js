import React, {PureComponent} from 'react';
import  { Navigate, NavLink}  from 'react-router-dom';
import { connect } from 'react-redux';
import {Editor} from '@tinymce/tinymce-react';
import axios from 'axios';
import withNavigate from '../../components/withNavigate';
import {Grid,TextField, Button} from '@mui/material';
import { addNewArticle } from '../../api/articles';
import {actionCreators } from './store';



class Write extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      title:'',
      content:'',
      userInfor:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null,
    }
  }
handleSubmit=(event)=>{
  event.preventDefault();
  const {title,content,userInfor} = this.state;
  const userInfo = this.props.userInfo ||userInfor;
  const userID = userInfo.id||userInfor && userInfor.id;
   
  const {newArticle,navigate} =this.props;




  addNewArticle({
    title,
    content,
    userID
  }).then((res)=>{
  
    newArticle(res.resArticle)
   
 navigate('/')
  })
}

	render() {
    const {userInfor} = this.state;
		const {loginStatus } = this.props;
		if (loginStatus || userInfor) {
			return (
				<form onSubmit={this.handleSubmit}> 
        
   

          <Grid container spacing={3} justify="space-between" >
      
        <TextField 
        autoFocus 
        margin='normal'
        id="new-article-title"
        label="Title"
        type='text'
        style={{width: '100%',marginLeft: 30,marginRight:30}}
        value={this.title}
        onChange={e=>this.setState({
          title:e.target.value,
        })}
        required
        />
          </Grid>
				<Grid>
				   <Editor
           onEditorChange={(e)=>this.setState({
             content:e
           })}
           init={{
             branding:false,
             height: 500,
             skin: 'borderless',
             menubar: false,
  
             plugins: [ 
  			 'image'
             ],
            
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | image',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
             paste_data_images:true,
             images_dataing_filter:function(img){
               return img.hasAttribute('internal-blob');
             },
             images_upload_handler: async function(blobInfo,succFun,failFun){
               let formData;
               let file;
               formData = new FormData();
               file = blobInfo.blob();
               formData.append('file',file,file.name);
               const imgUploadConfig ={
                  headers:{
                    'content-type': 'multipart/form-data'
                  }
               }
               
  
              const promise = await axios.post('api/images/upload',formData,imgUploadConfig);
               const imgUrl = promise.headers['location'];
  
               succFun(imgUrl);
             }
           }}
          
         />
          </Grid>
         <Button type='submit'>Submit</Button>  
             <NavLink style={{textDecoration: 'none'}} to='/'><Button>cancel</Button></NavLink>
         
      		</form>
				
			)
		}else {
			return <Navigate to='/login'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login']),
  userInfo: state.getIn(['login','userInfo']),
  article: state.getIn(['write','article'])
})
const mapDispatch=(dispatch) =>({
  newArticle(value){
    dispatch(actionCreators.newArticle(value));
  }
});

export default connect(mapState, mapDispatch)(withNavigate(Write));