# select 2

在 bootstrap modal 中，无法输入， 参考 [Select2 doesn't work when embedded in a bootstrap modal](https://stackoverflow.com/questions/18487056/select2-doesnt-work-when-embedded-in-a-bootstrap-modal)

```javascript
$.fn.modal.Constructor.prototype.enforceFocus = function () { };
```

常用片段

```javascript
$("#processrouteversion").val(null).trigger("change"); // 重置
```



 

