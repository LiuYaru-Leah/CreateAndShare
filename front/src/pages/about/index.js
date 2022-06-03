import React, { PureComponent } from 'react';
import { AboutContent, AboutFirstLineContent, AboutTitle, AboutWrapper } from './style';


class About extends PureComponent {
	render() {
		return(
			<AboutWrapper>
				<AboutTitle>
					About our WebApp
				</AboutTitle>
				<AboutFirstLineContent>
				Hello, my friends, this is our website design, our initial goal is to design a multi-function blog sites,in this website, you can create blogs, provides new ideas,and share with others, at the same time can also read a lot of books for free, so we named it as C&S, hope this is a place to gain knowledge.
				</AboutFirstLineContent>
				<AboutFirstLineContent>
				In our imagination, this website is a pure place to share knowledge. We specially choose blue and green website design style, hoping to make the whole space become quiet, which is convenient for your creation and reading. We hope this is helpful.Our team are both new to the front-end field and are all doing 
				the team tasks with GitHub for the first time, which will undoubtedly be a challenge to us, but we do make a lot of effort to overcome this challenge in the hope 
				of designing our desired sites in planning, but there are still many regret.
				</AboutFirstLineContent>
				<AboutFirstLineContent>
				We learned and implemented as we completed the project, summarizing some experience on the blog.If you want to communicate with us about the learning experience and structure of the project, I think our blog may be helpful for that.Below is the QR code of our Chinese blog. After scanning, a link will pop up.
				Due to the busy schedule of courses and personal schedule, our blog will be updated gradually, hope to see you in the comments section.We also hope that you can 
				like our design,thank you for your encouragement, and hope that we can gradually grow into more professional coders.
				</AboutFirstLineContent>
				<img className='QRcode' src='https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fblog.csdn.net%2Fqq_34414054%3Fspm%3D1000.2115.3001.5343&size=220x220&margin=0' alt=''></img>
				
			</AboutWrapper>
		)
		
	}
}

export default About;