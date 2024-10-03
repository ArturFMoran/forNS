import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
})
export class AppModule {}
