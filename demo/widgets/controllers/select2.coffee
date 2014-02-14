App.Select2Controller = Ember.Controller.extend
  options: [
    { label: '北京市', value: 'BJ', selected: 'true' }
    { label: '上海市', value: 'SH' }
    { label: '广州市', value: 'GZ', disabled: 'true' }
  ]

  groupedOptions: [{
    group: '北京市'
    options: [
      { label: '东城区', value: 'BJ-DC' }
      { label: '西城区', value: 'BJ-XC' }
      { label: '朝阳区', value: 'BJ-CY' }
      { label: '丰台区', value: 'BJ-FT' }
      { label: '石景山区', value: 'BJ-SJS' }
      { label: '海淀区', value: 'BJ-HD', selected: 'true' }
      { label: '门头沟区', value: 'BJ-MTG' }
      { label: '房山区', value: 'BJ-FS' }
      { label: '通州区', value: 'BJ-TZ' }
      { label: '顺义区', value: 'BJ-SY' }
      { label: '昌平区', value: 'BJ-CP' }
      { label: '大兴区', value: 'BJ-DX' }
      { label: '怀柔区', value: 'BJ-HR' }
      { label: '平谷区', value: 'BJ-PG' }
      { label: '密云县', value: 'BJ-MY' }
      { label: '延庆县', value: 'BJ-YQ', disabled: 'true' }
    ]
  }, {
    group: '上海市'
    options: [
      { label: '黄浦区', value: 'SH-HP' }
      { label: '徐汇区', value: 'SH-XH' }
      { label: '长宁区', value: 'SH-CN' }
      { label: '静安区', value: 'SH-JA' }
      { label: '普陀区', value: 'SH-PT' }
      { label: '闸北区', value: 'SH-ZB' }
      { label: '虹口区', value: 'SH-HK' }
      { label: '杨浦区', value: 'SH-YB' }
    ]
  }, {
    group: '广州市'
    options: [
      { label: '荔湾区', value: 'GZ-LW' }
      { label: '越秀区', value: 'GZ-YX' }
      { label: '海珠区', value: 'GZ-HZ' }
      { label: '天河区', value: 'GZ-TH' }
    ]
  }]
