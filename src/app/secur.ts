// ngOnInit(): void {
//   console.log('Loaded Data: ', this.data);
//   const dateList = this.data.time;
//   const valueAnalogList = this.data.analogChannels[0].values.map((value) =>
//     value * this.data.analogChannels[0].multiplier
//   );
//   const valueStatusList = this.data.statusChannels[0].values;
//
//
//   this.chartOption = {
//     visualMap: [
//       {
//         show: false,
//         type: 'continuous',
//         seriesIndex: 0,
//         min: 0,
//         max: dateList.length - 1
//       },
//       {
//         show: false,
//         type: 'continuous',
//         seriesIndex: 1,
//         dimension: 0,
//         min: 0,
//         max: dateList.length - 1
//       }
//     ],
//     title: [
//       {
//         top: '5%',
//         left: 'center',
//         text: this.data.analogChannels[0].name
//       },
//       {
//         top: '50%',
//         left: 'center',
//         text: this.data.statusChannels[0].name
//       }
//     ],
//     tooltip: {
//       trigger: 'axis'
//     },
//     xAxis: [
//       {
//         type: 'category',
//         data: dateList
//       },
//       {
//         type: 'category',
//         data: dateList,
//         gridIndex: 1
//       }
//     ],
//     yAxis: [
//       {
//         type: 'value'
//       },
//       {
//         type: 'value',
//         gridIndex: 1
//       }
//     ],
//     grid: [
//       {
//         bottom: '60%'
//       },
//       {
//         top: '60%'
//       }
//     ],
//     series: [
//       {
//         name: 'Analog Channel 1',
//         type: 'line',
//         showSymbol: false,
//         data: valueAnalogList,
//         lineStyle: {
//           color: 'green'
//         }// Значения для первого графика
//       },
//       {
//         name: 'Status Channel 1',
//         type: 'line',
//         showSymbol: false,
//         data: valueStatusList, // Данные для второго графика
//         xAxisIndex: 1,
//         yAxisIndex: 1,
//         lineStyle: {
//           color: 'green' // Устанавливаем цвет линии в зелёный
//         }
//       }
//     ]
//   }
// }
