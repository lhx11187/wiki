# ajax

## jquery

```javascript
$.ajax({
    type: "get",
    url: "https://api.ipify.org/",
    data: {
        format: "json"
    },
    async: true,
    dataType: "json",
    success: function(data) {
        console.log("success");
        console.log(data);
    },
    error: function(error) {
        console.log("error");
        console.log(error);
    }
});
```

## jQuery Form

- [jQuery-Form 表单插件](https://juejin.im/post/5d5210906fb9a06af372ac7d)

导入所需 JS

```javascript
function importJs(url){
    var js = document.createElement('script');
    js.setAttribute("type","text/javascript");
    js.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(js);
}
importJs("https://cdn.bootcss.com/jquery/2.0.1/jquery.js");
importJs("https://cdn.bootcss.com/jquery.form/4.2.2/jquery.form.js");
```

发送 ajax

```javascript
//提交表单时使用ajax校验用户名
var options = {
     url: "https://api.ipify.org/",
     target:"#output"
};
$("#form").ajaxForm(options);
```

## jQuery Validation

导入所需 JS

```javascript
function importJs(url){
    var js = document.createElement('script');
    js.setAttribute("type","text/javascript");
    js.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(js);
}
importJs("https://cdn.bootcss.com/jquery/2.0.1/jquery.js");
importJs("https://cdn.staticfile.org/jquery-validate/1.19.2/jquery.validate.min.js");
importJs("https://cdn.staticfile.org/jquery-validate/1.19.2/localization/messages_zh.min.js");
```

发送 ajax

```javascript
$("#registerForm").validate({
     debug:true,
     rules:{
        username:{
             //使用remote进行单个元素的ajax验证
            remote:{
                  url:"user_validateUsername.action",
                  type:"post",
                  dataType:"text",
                  data:{
                      username: function(){
                          return $("#username").val();
                      }
                  },
                  dataFilter:function(data,type){
                      if(data == "true"){
                          return true;
                      }else{
                          return false;
                      }
                  }
             }
        }
     }
});
```

## JavaScript

```javascript
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function()
{
    if (xhr.readyState == 4 && xhr.status == 200)
    {
        alert(xhr.responseText);
        document.write(xhr.responseText);
    }
}
xhr.open('GET','https://api.ipify.org/',true);
xhr.send();
```



