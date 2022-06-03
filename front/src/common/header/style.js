import styled from "styled-components";
import logoPic from '../../statics/logo.jpeg'

//create a HeaderWrapper component，it is a div component，export it
//so the index.js can import this div component
export const HeaderWrapper = styled.div`
 position: relative;
 height: 56px;
 //a line in the bottom of the header
 border-bottom: 1px solid #008f95;
 background: hsla(224, 73%, 83%, 1);

 background: radial-gradient(circle, hsla(224, 73%, 83%, 1) 0%, hsla(177, 93%, 84%, 1) 51%, hsla(178, 44%, 87%, 1) 100%);
 
 background: -moz-radial-gradient(circle, hsla(224, 73%, 83%, 1) 0%, hsla(177, 93%, 84%, 1) 51%, hsla(178, 44%, 87%, 1) 100%);
 
 background: -webkit-radial-gradient(circle, hsla(224, 73%, 83%, 1) 0%, hsla(177, 93%, 84%, 1) 51%, hsla(178, 44%, 87%, 1) 100%);
 
 filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#B2C3F3", endColorstr="#AFFCF8", GradientType=1 );
`;

//another way to define the href of <a>
// export const Logo = styled.a.attrs({
// href: '/'
//})`
export const Logo = styled.a`
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 width: 100px;
 height: 56px;
 background: url(${logoPic});
 background-size: contain;
`;

export const Nav = styled.div`
 width: 960px;
 height: 100%;
 padding-right: 70px;
 box-sizing: border-box; //border cannot be hold up large;
 margin: 0 auto;

`;


export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #008f95;
font-weight:bold;
//if the classname = left, float:left
&.left{
    float:left;
}
//if the classname = right, float:right
&.right{
    float:right;
    color: #008f95;
}
&.active{
    color: #008f95;
    margin-left: 50px: 
}
`;

export const NavSearch = styled.input.attrs({
    placeholder:"search"
})`
 width:160px;
 height: 38px;
 padding: 0 30px 0 20px;
 margin-top: 9px;
 margin-left: 20px;
 box-sizing: border-box;
 border: none;
 outline: none;
 border-radius: 19px;
 background: #eee;
 font-size: 14px;
 color: #666;
 &::placeholder{
     color: #999;
 }
 &.focused{
     width: 240px;
 }
 &.slide-enter{
    // timeout
    transition:all .2s ease-out;
}
&.slide-enter-active{
    width: 240px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
&.slide-exit-active{
    width: 160px;
}
`
export const SearchInfo=styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background: #fff;
`
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`
export const SearchInfoSwitch = styled.span`
float: right;
font-size: 12px;
cursor: pointer;
.spin{
    display: block;
    float: left;
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin: center center;
}
`
export const SearchInfoList = styled.div`
 overflow:hidden;
`
export const SearchInfoItem = styled.a`
display: block;
float: left;
padding: 5px;
line-height: 20px;
margin-right: 10px;
margin-bottom: 5px;
border: 1px solid #ddd;
font-size: 12px;
color: #787878;
border-radius: 3px;
`

export const Addition = styled.div`
 position: absolute;
 right: 0;
 top: 0;
 height: 56px;
`

export const Button = styled.div`
 float: right;
 margin-top: 9px;
 margin-right: 20px;
 padding: 0 20px;
 line-height: 38px;
 border-radius: 19px; 
 border: 1px solid #008f95;
 font-size:14px;
 &.reg{
     color: #008f95;
 }
 &.writing{
     color: #fff;
     background: #008f95;
 }
`
export const SearchWrapper = styled.div`
position: relative;
float: left;

.zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
        background: #008f95;
        color: #fff;
    }
}

`
