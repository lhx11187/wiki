# bootstrap

## modal

```javascript
$('#myModal').map(function() {
    $(this).modal('hide');  // 关闭
});
$('#myModal').modal({
    backdrop: 'static', keyboard: true  // 开启
});
$("#myModal").modal("hide"); // 关闭
```

button

```html
<button type="button" class="close" data-dismiss="modal" aria-label="Close"> x </button>
```

