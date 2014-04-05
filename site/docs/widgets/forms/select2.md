## Select2下拉选项

### 描述

`{{select2}}`组件是基于[Select2](http://ivaynberg.github.io/select2/)实现的下拉选项组件。组件提供了单选和多选两种选择模式，另外还支持分组选择的方式来组织待选项。

```handlebars
{{select2 multiple=true content=regions optionGroupPath='city' optionLabelPath='content.label' optionValuePath='content.value' selection=selectedRegions value=selectedRegionValues}}
```

### 参数

* `@param multiple Boolean`，设置是否启用多选，缺省值为false，即单选模式。
* `@param content Array`，设置下拉选项。选项数据分为两种类型，其一是原生数据类型的数组，例如：

  ```javascript
  ['北京市', '上海市', '广州市']
  ```

  其二是对象类型的数组，例如：

  ```javascript
  [
    { label: '东城区', value: 'BJ-DC', city: '北京市' }
    { label: '西城区', value: 'BJ-XC', city: '北京市' }
    { label: '朝阳区', value: 'BJ-CY', city: '北京市' }
    { label: '丰台区', value: 'BJ-FT', city: '北京市' }
    { label: '石景山区', value: 'BJ-SJS', city: '北京市' }
    { label: '海淀区', value: 'BJ-HD', selected: 'true', city: '北京市' }
    { label: '门头沟区', value: 'BJ-MTG', city: '北京市' }
    { label: '房山区', value: 'BJ-FS', city: '北京市' }
    { label: '通州区', value: 'BJ-TZ', city: '北京市' }
    { label: '顺义区', value: 'BJ-SY', city: '北京市' }
    { label: '昌平区', value: 'BJ-CP', city: '北京市' }
    { label: '大兴区', value: 'BJ-DX', city: '北京市' }
    { label: '怀柔区', value: 'BJ-HR', city: '北京市' }
    { label: '平谷区', value: 'BJ-PG', city: '北京市' }
    { label: '密云县', value: 'BJ-MY', city: '北京市' }
    { label: '延庆县', value: 'BJ-YQ', disabled: 'true', city: '北京市' }
    { label: '黄浦区', value: 'SH-HP', city: '上海市' }
    { label: '徐汇区', value: 'SH-XH', city: '上海市' }
    { label: '长宁区', value: 'SH-CN', city: '上海市' }
    { label: '静安区', value: 'SH-JA', city: '上海市' }
    { label: '普陀区', value: 'SH-PT', city: '上海市' }
    { label: '闸北区', value: 'SH-ZB', city: '上海市' }
    { label: '虹口区', value: 'SH-HK', city: '上海市' }
    { label: '杨浦区', value: 'SH-YB', city: '上海市' }
    { label: '荔湾区', value: 'GZ-LW', city: '广州市' }
    { label: '越秀区', value: 'GZ-YX', city: '广州市' }
    { label: '海珠区', value: 'GZ-HZ', city: '广州市' }
    { label: '天河区', value: 'GZ-TH', city: '广州市' }
  ]
  ```

  当选项数据类型为对象数组时，需要通过选项相关参数来对选项进行设置。

* `@param optionGroupPath String`，设置对象类型选项的分组属性路径。
* `@param optionValuePath String`，设置对象类型选项的值属性路径。
* `@param optionLabelPath String`，设置对象类型选项的标签属性路径。
* `@param selection String`，设置缺省被选中的选项。
* `@param value String`，设置缺省被选中的选项。

## Select2标签输入框

### 描述

`{{tagging-select2}}`组件是基于[Select2](http://ivaynberg.github.io/select2/)实现的标签输入组件。组件提供了单一标签和多标签两种输入模式。标签值可以从备选的集合中选取，也可以手动输入新的标签值。

```handlebars
{{tagging-select2 tags=cities maximumSelectionSize=1 value=selectedCities}}
```

### 参数

* `@param tags Array`，设置备选标签列表。例如：

  ```javascript
  ['北京市', '上海市', '广州市']
  ```

* `@param maximumSelectionSize Integer`，设置最多可接受的标签数量，缺省值为`0`，即不限制标签数量。
* `@param value String`，设置初始输入的标签。
