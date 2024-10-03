import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {EChartsOption} from 'echarts';
import {NgxEchartsDirective, provideEcharts} from 'ngx-echarts';
import signalData from './data_2.json'
import {Channel, Root} from './interfaces'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideEcharts(),
  ]
})

export class AppComponent implements OnInit {
  chartOption: EChartsOption = {}
  data: Root = signalData as Root;

  ngOnInit(): void {
    console.log('Loaded Data: ', this.data);

    const dateList = this.data.time;
    const channels: Channel[] = [
      ...this.data.analogChannels.map((analogChannel) => ({
        name: analogChannel.name || 'Неизвестный канал',
        values: analogChannel.values.map(value => value * (analogChannel.multiplier || 1)),
        id: analogChannel.id
      })),
      ...this.data.statusChannels.map((statusChannel) => ({
        name: statusChannel.name || 'Неизвестный статус',
        values: statusChannel.values,
        id: statusChannel.id
      }))
    ];

    this.chartOption = {
      visualMap: channels.map((channel, index) => ({
        show: false,
        type: 'continuous',
        seriesIndex: index,
        min: 0,
        max: dateList.length - 1
      })),
      title: channels.map((channel, index) => ({
        top: `${5 + index * 45}%`,
        left: 'center',
        text: channel.name
      })),
      tooltip: {
        trigger: 'axis'
      },
      xAxis: channels.map((_, index) => ({
        type: 'category',
        data: dateList,
        gridIndex: index
      })),
      yAxis: channels.map((_, index) => ({
        type: 'value',
        gridIndex: index
      })),
      grid: channels.map((_, index) => ({
        top: `${15 + index * 45}%`,
        height: '30%',
        bottom: `${10}%`
      })),
      series: channels.map((channel, index) => ({
        name: channel.name,
        data: channel.values,
        type: 'line',
        showSymbol: false,
        xAxisIndex: index,
        yAxisIndex: index,
        lineStyle: {
          color: 'green'
        }
      }))
    };
  }
}
