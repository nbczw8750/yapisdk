import axios, { AxiosInstance } from 'axios'
export interface YapiSdkOptions {
    baseURL?: string
    timeout?: number
    token?: string
    path?: string
}

// 获取接口列表数据
export interface YapiSdkInterfaceListParams {
    project_id?: number
    token?: string
    page?: number // 当前页数
    limit?: number // 每页数量，默认为10，如果不想要分页数据，可将 limit 设置为比较大的数字，比如 1000
}
// 获取某个分类下接口列表
export interface YapiSdkInterfaceListCatParams {
    catid?: number
    token?: string
    page?: number // 当前页数
    limit?: number // 每页数量，默认为10，如果不想要分页数据，可将 limit 设置为比较大的数字，比如 1000
}

// 新增接口分类
export interface YapiSdkAddInterfaceCatParams {
    desc?: string
    name: string
    project_id: number
    token?: string
}

// 服务端数据导入
export interface YapiSdkImportDataParams {
    type: string // 导入方式 swagger
    json?: string // json 数据，类型为序列化后的字符串，请勿传递 object
    merge: string // 数据同步方式 normal"(普通模式) , "good"(智能合并), "merge"(完全覆盖) 三种模式
    token?: string
    url?: string //导入数据url，如果存在该参数，将会通过 url 方式获取数据
}

// 新增接口
export interface YapiSdkAddInterfaceParams {
    req_query?: Array<any>
    req_headers?: Array<any>
    req_body_form?: Array<any>
    title: string
    catid?: string | number
    path: string
    status?: string
    res_body_type?: string
    res_body?: string
    switch_notice?: boolean
    message?: string
    desc?: string
    method: string
    req_params?: Array<any>
    token?: string
}
// 新增或者更新接口
export interface YapiSdkSaveInterfaceParams {
    req_query?: Array<any>
    req_headers?: Array<any>
    req_body_form?: Array<any>
    title: string
    catid: string | number
    path: string
    status?: string
    res_body_type?: string
    res_body?: string
    switch_notice?: boolean
    message?: string
    desc?: string
    method: string
    req_params?: Array<any>
    token?: string
    id?: string | number
}

export class YapiSdk {
    protected baseURL: string = 'http://192.168.2.18:3000'
    protected timeout: number | undefined
    protected token: string = ''
    protected error: string = ''
    protected message: string = ''
    protected request: AxiosInstance

    constructor(options?: YapiSdkOptions) {
        if (options) {
            if (options.baseURL) {
                this.baseURL = options.baseURL
            }
            if (options.token) {
                this.token = options.token
            }
            if (options.timeout) {
                this.timeout = options.timeout
            }
        }
        this.request = axios.create({
            // API 请求的默认前缀
            baseURL: this.baseURL,
            timeout: this.timeout, // 请求超时时间
        })
    }
    getError() {
        return this.error
    }
    getMessage() {
        return this.message
    }
    /**
     * 获取项目基本信息
     */
    async getProject() {
        const url: string = '/api/project/get'
        const response = await this.request({
            url,
            method: 'get',
            params: {
                token: this.token,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }
    /**
     * 获取接口列表数据
     * @param params
     */
    async getInterfaceList(params?: YapiSdkInterfaceListParams) {
        const url: string = '/api/interface/list'
        const response = await this.request.get(url, {
            params: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 获取接口数据（有详细接口数据定义文档）
     * @param id
     */
    async getInterface(id: number) {
        const url: string = '/api/interface/get'
        const response = await this.request.get(url, {
            params: {
                token: this.token,
                id: id,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 获取菜单列表
     */
    async getInterfaceCatMenu(params?: object) {
        const url: string = '/api/interface/getCatMenu'
        const response = await this.request.get(url, {
            params: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 获取接口菜单列表
     */
    async getInterfaceListMenu(params?: object) {
        const url: string = '/api/interface/list_menu'
        const response = await this.request.get(url, {
            params: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 获取某个分类下接口列表
     */
    async getInterfaceListCat(catId: number, params?: YapiSdkInterfaceListCatParams) {
        const url: string = '/api/interface/list_cat'
        const response = await this.request.get(url, {
            params: {
                token: this.token,
                catid: catId,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 新增接口分类
     * @param params
     */
    async addInterfaceCat(params: YapiSdkAddInterfaceCatParams) {
        const url: string = '/api/interface/add_cat'
        const response = await this.request({
            url,
            method: 'post',
            data: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 服务端数据导入
     * @param params
     */
    async importData(params: YapiSdkImportDataParams) {
        const url: string = '/api/open/import_data'
        const response = await this.request({
            url,
            method: 'post',
            data: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }

    /**
     * 新增接口
     * @param params
     */
    async addInterface(params: YapiSdkAddInterfaceParams) {
        const url: string = '/api/interface/add'
        const response = await this.request({
            url,
            method: 'post',
            data: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }
    /**
     * 新增或者更新接口
     * @param params
     */
    async saveInterface(params: YapiSdkSaveInterfaceParams) {
        const url: string = '/api/interface/save'
        const response = await this.request({
            url,
            method: 'post',
            data: {
                token: this.token,
                ...params,
            },
        })
        if (response.data.errcode == 0) {
            this.message = response.data.errmsg
            return response.data.data
        } else {
            this.error = response.data.errmsg
            return false
        }
    }
}
