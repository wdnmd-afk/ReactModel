import axios,{InternalAxiosRequestConfig} from 'axios'
// @ts-ignore
import {HttpMethod} from '@/Emun/httpEmun.ts';

// baseURL设置/超时时间设置
const instance = axios.create({
    baseURL: '127.0.0.1', // 配置请求基地址
    timeout: 5000 // 配置等待时间
})

instance.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
// 操作请求

    return config
},()=>{})

class Http {
    public static get(url: string, params?: any): Promise<any> {
        return instance.request({
            url,
            method: HttpMethod.GET,
            params
        })
    }

    public static post(url: string, params?: any): Promise<any> {
        return instance.request({
            url,
            method: HttpMethod.POST,
            data: params
        }
        )
    }
}
export {Http}