参考文档;https://segmentfault.com/a/1190000010974426

一、什么是node.js?
 * 是一个基于Chrome V8引擎的 javaScript运行环境。
   
二、NodeJs和JavaScript区别
 * 一个是平台，另一个是语言。人与舞台的区别
 * node.js是一个JS的运行环境，与浏览器的JS执行功能是一样的。

三、下载安装
 * 官方网站下载：http://nodejs.cn/download/
 * 安装一直选择下一步记得加入环境变量
 
四、检测是否安装成功
 * cmd进入命令行模式。输入node -v
 
五、使用node.js
 * a.REPL模式（了解）read-evaluate-print-loop----输入-求值-打印-循环
 * b.运行js文件 
 
 
### Node.js Error: Cannot find module express
1.全局安装express框架,cmd打开命令行,输入如下命令:

        npm install -g express

   express 4.x版本中将命令工具分出来,安装一个命令工具,执行命令:

        npm install -g express-generator

     输入express --version验证

2.如果在执行js文件仍报Error: Cannot find module express错误。
解决办法：
    在自己的工程目录下再次执行:
        npm  install express
       