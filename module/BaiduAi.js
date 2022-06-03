 var AipOcrClient = require("baidu-aip-sdk").ocr;

// 设置APPID/AK/SK
var APP_ID = "23592787";
var API_KEY = "bbffeSZXXt6aPvPtkyMBBBhf";
var SECRET_KEY = "C4gRL3qLEXNIAO6IBVPDH6xZXCEFbYkb";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

module.exports=client;