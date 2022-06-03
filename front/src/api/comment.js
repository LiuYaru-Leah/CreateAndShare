import request from '../util/request';

export function likeComment(data){
    return request({
        url:'/api/comment/likeComment',
        method:'post',
        data,
    })
}

export function dislikeComment(data){
    return request({
        url:'/api/comment/dislikeComment',
        method:'post',
        data,
    })
}

export function getComment(data){
    return request({
        url:'/api/comment/getCommentList',
        method:'post',
        data,
    })

}

export function addComment(data){
    return request({
        url:'/api/comment/addComment',
        method:'post',
        data
    })
}
