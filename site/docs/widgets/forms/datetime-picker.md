## 日期时间选择器

### 描述

`{{datetime-picker}}`组件是基于[bootstrap-datetimepicker](http://www.malot.fr/bootstrap-datetimepicker/index.php)实现的日期时间选择器。

```handlebars
{{datetime-picker format='yyyy-mm-dd hh:ii' autoclose=true todayBtn=true
startDate='1949-10-01' minuteStep=10 minView=0 maxView=4}}
```

### 参数

* `@param format String`，设置日期时间格式，缺省值为`yyyy-mm-dd hh:ii`。

  日期格式由`p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy`联合组成。

  * p : 小写上下午（'am'或 'pm'） - 取决于本地化文件
  * P : 大写上下午（'AM'或 'PM'） - 取决于本地化文件
  * s : 秒，不带前导零
  * ss : 秒，两位数，不足时带前导零
  * i : 分钟，不带前导零
  * ii : 分钟，两位数，不足时带前导零
  * h : 小时，不带前导零 - 24小时制
  * hh : 小时，两位数，不足时带前导零 - 24小时制
  * H : 小时，不带前导零 - 12小时制
  * HH : 小时，两位数，不足时带前导零 - 12小时制
  * d : 数字日期，不带前导零
  * dd : 数字日期，两位数，不足时带前导零
  * m : 数字月份，不带前导零
  * mm : 数字月份，两位数，不足时带前导零
  * M : 缩写文字月份，三个字符
  * MM : 完整文字月份，如January或March
  * yy : 两位数字年份
  * yyyy : 四位数字两份

* `@param autoclose Boolean`，设置当选择一个日期之后是否立即关闭此日期时间选择器，缺省值为`true`。
* `@param todayBtn Boolean`，如果此值为`true`或`linked`，则在日期时间选择器组件的底部显示一个 `Today`按钮用以选择当前日期。如果是`true`的话，`Today`按钮仅仅将视图转到当天的日期，如果是`linked`，当天日期将会被选中。缺省值为`false`。
* `@param startDate String`，设置可供选择的最早日期，早于该日期的时间均不可选。缺省值为`1949-10-01`。
* `@param minuteStep Integer`，此数值被当做步进值用于构建小时视图。对于每个`minuteStep`都会生成一组预设时间（分钟）用于选择。缺省值为`10`。
* `@param minView Integer`，日期时间选择器所能够提供的最精确的时间选择视图。缺省值为`0`。
* `@param maxView Integer`，日期时间选择器最高能展示的选择范围视图。缺省值为`4`。
