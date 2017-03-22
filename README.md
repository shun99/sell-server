> 模仿饿了么项目的后台

# 第一版
koa 指定静态目录
```
app.use(serve(path.join(__dirname, '.', 'dist')));
```