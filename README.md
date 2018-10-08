# 学习开发一系列vue的组件
[![Build Status](https://www.travis-ci.org/jiaen188/test-demo.svg?branch=master)](https://www.travis-ci.org/jiaen188/test-demo)

## 介绍

学习以 vue 为基础，学习开发一些组件，目前有 button，grid，input，layout，popover，tabs，toast等组件，[预览地址](https://jiaen188.github.io/test-demo/components/button.html)

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 css 中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持此样式

    同时需要设置默认颜色等变量
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器支持此样式

2. 安装 
    ```
    npm i -S jiaen-test-one-demo
    ```

3. 引入
    ```
    <template>
        <div>
            <g-button></g-button>
        </div>
    </template>
    <script>
    import { Button } from 'jiaen-test-one-demo'
    export default {
        name: 'App',
        components: {
            'g-button': Button
        }
    }
    </script>

    <style>
    @import 'jiaen-test-one-demo/dist/index.css';
    </style>
    ```

4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_823323_hg1rhzn74ec.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
