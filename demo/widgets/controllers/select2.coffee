App.Select2Controller = Ember.Controller.extend
  cities: ['北京市', '上海市', '广州市']

  regions: [
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
