# YAPI sdk
封装了YAPI接口的sdk包

# 安装
使用 npm:

`$ npm install -D yapisdk`

使用 yarn:

`$ yarn add -D yapisdk`

更新:

`$ yarn upgrade yapisdk --latest`


## 配置

```JavaScript
import { YapiSdk } from 'yapisdk'

const sdk = new YapiSdk({ token: '9a444ebafbea360eab663677865aacc949c156a67b1d9f7152b42541b3840a33' })
let res = await sdk.getProject() // 获取项目基本信息
```