# Recore template
## 修改模板步骤
1. 修改模板，可以先自己npm init recore, 生成一个工程, 在里面修改并且能够正确run起来
2. 将工程下修改完成的src目录代码复制覆盖到本工程/proj/src下. 其他tpl文件手动修改
3. 发布测试包 npm publish --tag beta
4. npm init recore -t @recore/recore-template@【你刚发布的version】
5. 测试没有问题后发布正式包
