import { YapiSdk } from '../index'
import axios from 'axios'
axios.defaults.adapter = require('axios/lib/adapters/http')

test('yapi sdk getProject', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getProject()
    // console.log('res', res)
    if (false === res) {
        console.log('getProject error', sdk.getError())
    } else {
        console.log('getProject message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk getInterfaceList', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getInterfaceList()
    if (false === res) {
        console.log('getInterfgetInterfaceListace error', sdk.getError())
    } else {
        console.log('getInterfaceList message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk getInterface', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getInterface(21179)
    if (false === res) {
        console.log('getInterface error', sdk.getError())
    } else {
        console.log('getInterface message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk getInterfaceCatMenu', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getInterfaceCatMenu()
    if (false === res) {
        console.log('getInterfaceCatMenu error', sdk.getError())
    } else {
        console.log('getInterfaceCatMenu message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk getInterfaceListMenu', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getInterfaceListMenu()
    if (false === res) {
        console.log('getInterfaceListMenu error', sdk.getError())
    } else {
        console.log('getInterfaceListMenu message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk getInterfaceListCat', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    let res = await sdk.getInterfaceListCat(1914)
    if (false === res) {
        console.log('getInterfaceListCat error', sdk.getError())
    } else {
        console.log('getInterfaceListCat message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk addInterfaceCat', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    const data = {
        desc: '测试',
        name: '测试',
        project_id: 149,
    }
    let res = await sdk.addInterfaceCat(data)
    // console.log('res', res)
    if (false === res) {
        console.log('addInterfaceCat error', sdk.getError())
    } else {
        console.log('addInterfaceCat message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk importData', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    const data = {
        type: 'swagger',
        merge: 'normal',
        json: 'https://petstore.swagger.io/v2/swagger.json',
    }
    let res = await sdk.importData(data)
    if (false === res) {
        console.log('importData error', sdk.getError())
    } else {
        console.log('importData message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk addInterface', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    const data = {
        title: '/api/group/list',
        catid: '1376',
        method: 'GET',
        path: '/api/group/list',
    }
    let res = await sdk.addInterface(data)
    if (false === res) {
        console.log('addInterface error', sdk.getError())
    } else {
        console.log('addInterface message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})

test('yapi sdk saveInterface', async () => {
    const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
    const data = {
        title: '/api/group/list',
        catid: '1538',
        method: 'GET',
        path: '/api/group/list',
    }
    let res = await sdk.saveInterface(data)
    if (false === res) {
        console.log('saveInterface error', sdk.getError())
    } else {
        console.log('saveInterface message', sdk.getMessage())
    }
    // expect(res).not.toBeFalsy()
})
