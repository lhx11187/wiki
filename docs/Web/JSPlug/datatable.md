# datatable

- [upgrade](https://datatables.net/upgrade/1.10-convert)
- [Jquery DataTable基本使用](https://www.cnblogs.com/xiashengwang/p/8087181.html)

## api

获取第一条选中的数据

```javascript
var obj = $("#productionOrderTable").DataTable().rows('.row_selected').data()[0];
```

刷新表格

```javascript
$('#productionOrderTable').DataTable().ajax.reload();
```

getDataTableCheckIds

```js
function (checkBoxName) {
    var strId = "";
    $("input[name='" + checkBoxName + "']:checked").each(function() {
        strId += $(this).val();
        strId += ",";
    });
    return strId.slice(-1) == ',' ? strId.slice(0, -1) : strId;
}

function (checkBoxName) {
    var strId = new Array();
    $("input[name='" + checkBoxName + "']:checked").each(function() {
        strId.push($(this).val());
    });
    return strId.join(",");
}
```

隐藏列

```js
var column = table.column(0);
column.visible(!column.visible());
```

回调函数

```js
$('#table').DataTable({
    "initComplete": function(){
        var api = this.api();
        api.$("td").click(function(){
            api.search(this.innerHTML).draw();
        })
    }
});
```

显示行的附加信息

```js
$(document).ready(function(){
    var table = $('#table').DataTable({
        "ajax": {url:"arrays.txt",dataSrc: "data"},
        "columns":[{
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },{
            "data": "name"
        }, {
            "data": "position"
        }]
    });
});

$('#table tbody').on('click', 'td.details-control', function() {
    var tr = $(this).closest('tr');
    var row = table.row(tr);
    if(row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
    } else {
        row.child(JSON.stringify(row.data())).show();
        tr.addClass('shown');
    }
});
```

显示行序号

```js
$('#table').DataTable({
    "ajax": {url:"arrays.txt",dataSrc: "data"},
    "columns":
    [
        {
            title: "NO.",
            data: function(row, type, set, meta) {
                var c = meta.settings._iDisplayStart + meta.row + 1;
                return c;
            }
        }
    ]
});
```

## datasource

### dom

如果没有指定 data，ajax 选项，则 DataTable 会将当前 table 的 html 标签上内容转换成对应的数据（Array数据形式）。

```js
$(document).ready(function(){
    $('#table').DataTable();
});
```

### javascript (array / objects)

```js
$(document).ready(function(){
    $('#table').DataTable({
        data: array,
        columns: [
            { title: "Name"},
            { title: "Position" },
            { title: "Office" }
        ]
    });
});

$(document).ready(function(){
    $('#table').DataTable({
        data: object,
        columns: [
            { title: "Name", data: "name"},
            { title: "Position", data: "position"},
            { title: "Salary", data: "salary", visible: false}
        ]
    });
});
```

### ajax

```js
$(document).ready(function(){
    $('#table').DataTable({
        "ajax": "arrays.txt"
    });
});

$(document).ready(function(){
    $('#table').DataTable({
        "ajax": "objects.txt",
        "columns": [{
                "data": "name"
            }, {
                "data": "position"
            }, {
                "data": "office"
            }]
    });
});
```

指定数据源属性

- 作为一个字符串，如 "dataSrc": "data"
- 作为一个方法，如 "dataSrc": function (json) { }

```js
$(document).ready(function(){
    $('#table').DataTable({
        "ajax": {
            "url":"objects.txt",
            "dataSrc": "data"
        },
        "columns": [{
            "data": "name"
        }, {
            "data": "position"
        }, {
            "data": "office"
        }]
    });
});
```

## 分页

### 客户端

```js
$(document).ready(function(){
    $('#table').DataTable();
});
```

### 服务器端

