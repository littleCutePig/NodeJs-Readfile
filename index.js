var fs = require("fs");
var path = require("path");

//源文件路径
var sourcePath = path.join(__dirname,"source");
//目标路径
var targePath = path.join(__dirname,"target")

function Copy(sourcePath,targePath) {
    this.sourcePath = sourcePath;
    this.targePath = targePath;
    this.init()
}
Copy.prototype.init = function() {
    var that = this;
    this.readdir(function(error,files) {
        if(error) return console.error(error)
        files.forEach(function(item) {
            var pathname = path.join(that.sourcePath,item);
            var filename = item;
            that.isDirectory(pathname,function(error,isDirectory,isLarger) {
                if(error) return console.error(error)
                if(isDirectory) {

                } else {
                    if (isLarger) {
                        that.readFileLarger(filename)
                    } else {
                        that.readFile(pathname,function(error,result) {
                            if(error) return console.error(error)
                            that.writeFile(filename,result)
                        })
                    }
                }
            })
        })
    })
}
//写
Copy.prototype.writeFile = function(filename,data) {
    var pathname = path.join(this.targePath,filename)
    fs.writeFile(pathname,data,function(error) {
        if(error) return console.error(error)
        console.log("write finished")
    })
} 

//小文件读取，使用数据块的来进行读取
Copy.prototype.readFile = function(pathname,callback) {
    fs.readFile(pathname,function(error,buffer) {
        if(error) {
            callback(error)
        } else {
            callback(null,buffer)
        }
    })
}
//大文件读取，使用由多个数据块组成的数据流的进行读取
Copy.prototype.readFileLarger = function(filename,callback) {
    var source = path.join(this.sourcePath,filename);
    var target = path.join(this.targePath,filename);
    var readStream = fs.createReadStream(source)
    var writeStream = fs.createWriteStream(target)
    readStream.pipe(writeStream)
}

Copy.prototype.isDirectory = function(pathname,callback) {
    fs.stat(pathname,function(error,state) {
        if(error) {
            callback(error)
        } else {
            var flag = state.isDirectory();
            var byte2M = state.size / 1024 /1024;
            //将读取出来的文件转发M,判断文件是否大于50M
            //大于 true 用流的方式去读写文件
            //小于 false readFile
            var isLarger = byte2M > 100;
            callback(null,flag,isLarger)
        }
    })
}

Copy.prototype.readdir = function(callback) {
    fs.readdir(this.sourcePath,function(error,files) {
        if (error) {
            callback(error)
        } else {
            callback(null,files)
        }
    })
}
new Copy(sourcePath,targePath)