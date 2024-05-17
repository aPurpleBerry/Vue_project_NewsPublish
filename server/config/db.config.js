const mongoose = require('mongoose')

//协议名称+IP地址+mongodb默认端口号+数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/company-system')