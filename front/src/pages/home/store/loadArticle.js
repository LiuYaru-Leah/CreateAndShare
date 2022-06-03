import { addNewArticle } from "../../../api/articles";
import { register } from "../../../api/user";


export default function loadArticle(){
   

    let user =[
        {username:'123',
         password:"123" ,
          }
         ,{username:'223',
         password:"223" ,
       },
         {username:'323',
         password:"323" ,
        },
         {username:'423',
         password:"423" ,
          },
    ]
    
    let data = [
    
    {
    "id":'5',
    "title": "Sometimes a movie has a sequel that's so bad it taints the memory of the original. So, what movies do you wish never received a sequel?",
    "content": "I love everything about this movie. Immortals hiding among us, fighting with swords, respecting holy ground, coming at last to the Gathering. Men in kilts—a lot. Magnificent. Stirring, mysterious, romantic, and just a weeeee bit camp. Satisfying ending ties everything up nicely. ",
    "imgUrl": "https://qph.cf2.quoracdn.net/main-qimg-09245a610753ed856631e394d03b31ce-lq",
    "userID": "1"
    }, {
    "id":'6',
    "title": "Why do car owners often open the engine hood after long trips?",
    "content": "Original Question: “Why do car owners often open the engine hood after long trips?”",
    "imgUrl": "https://qph.cf2.quoracdn.net/main-qimg-6632f81ae1e566f30016ee92eabcca40-lq",
    "userID":"2"
    }, {
    "id": '7',
    "title": "What's the best way to find a designer online?",
    "content": "If you are looking for freelance UX, UI or digital product designers, and understand best way as the fastest way with a guaranteed positive outcome, I suggest you check out ",
    "imgUrl": "https://qph.fs.quoracdn.net/main-qimg-85566a2ea4fdf206f467dfa2166d81cd-lq",
    "userID":'3'
    }, {
    "id": '8',
    "title": "What is the biggest culture shock you have ever faced?",
    "content": "The trains = so quiet! Other than the occasional quiet conversation, everyone is either on their phones or just minding their own business. This is in huge contrast to the NYC subway where you have people having loud conversations, talking on their cell phones, playing instruments, and being as loud as Americans are. Now that I’ve been in Japan a few months, I can even tell who’s new to Japan based on how loud they are on the train.",
    "imgUrl": "https://qph.cf2.quoracdn.net/main-qimg-f51ba01fc63ed0e69a7184eadfdbdc7b-lq",
    "userID": "4"
    }
    ]
    
   
    user.forEach((element,index)=>{
        register(element).then((res)=>{
            data[index].userID =res.data._id
            addNewArticle(data[index]).then((res)=>{
             
                data[index].id=res._id
            })
        })
    })
return(
    data
)
  



}