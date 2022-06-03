import request from '../util/request';

export function addNewArticle(data){
    return request({
        url:'/api/article/addNewArticle',
        method:'post',
        data,
    })
}

export function detail(data){
    return request({
        url:'/api/article/detail?id='+data,
        method:'get',
       
    })
}

export function getAllArticle(data){
    return request({
        url:'/api/article/getAll',
        method:'post',
        data
    })
}

export function articleLikes(data){
    return request({
        url:'/api/article/like',
        method:'post',
        data
    })
}

export function articleDisikes(data){
    return request({
        url:'/api/article/dislike',
        method:'post',
        data
    })
}

export const getPersonList = (params)=>{
    return request({
        url:'/api/article/person-list',
        method:'get',
        params
    })
}