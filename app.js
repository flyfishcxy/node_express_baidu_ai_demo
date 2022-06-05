//可能是全网最容易上手的，也许是可读性最前的百度AI识别文字工具
// b 分支 添加 world +  a 分支 add hello
//合并 b分支和a分支的内容 hello world

const express = require('express');

var multiparty = require('multiparty');
const client = require('./module/BaiduAi');
var fs = require('fs');
const app=express();
app.get("/",(req,res)=>{
    res.send("你好 express");
})
// app.get("/ocr",(req,res)=>{
//     // res.send("你好 express");    
//     var image = fs.readFileSync("./public/images/aaa.jpg").toString("base64");
    
//     var options = {};
//     options["detect_direction"] = "true";  

//     // 调用通用文字识别（高精度版）
//     client.accurateBasic(image,options).then(function(result) {
//         console.log(JSON.stringify(result));
//         // res.send(JSON.stringify(result));

//         var tempStr = "";
//         for(let i=0; i<result.words_result.length; i++){
//             tempStr += result.words_result[i].words;

//         }
//         console.log(tempStr);
//         res.json({"success":"true","result":tempStr})
// ;
//     }).catch(function(err) {
//         // 如果发生网络错误
//         console.log(err);
//     });
//     // var form = new multiparty.Form();
//     // form.uploadDir = 'public/upload';
//     // form.parse(req,function(err,fields.files))
// })

app.post('/ocr',function(req,res){
    var form = new multiparty.Form();
    form.uploadDir = 'public/upload'
    form.parse(req,function(err,fields,files){
        var path = './' + files.file[0].path;
        var image = fs.readFileSync(path).toString("base64");
        var options = {};
        options["detect_direction"] = "true";
        client.generalBasic(image,options).then(function(result){
            console.log(JSON.stringify(result));
            var tempStr = "";
            for(let i=0; i<result.words_result.length; i++){
                tempStr += result.words_result[i].words;
    
            }
            console.log(tempStr);
            res.json({"success":"true","result":tempStr})

        }).catch(function(err) {
            // 如果发生网络错误
            console.log(err);
        });
    })
})
app.listen(3000)