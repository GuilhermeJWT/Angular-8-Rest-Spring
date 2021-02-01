import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { UsuarioService } from '../service/usuario.service';
import { UserChart } from '../model/UserChart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  userChart = new UserChart();

  ngOnInit() {

    this.usuarioService.carregarGrafico().subscribe(data => {
      this.userChart = data;


      this.barChartLabels = this.userChart.nome.split(',');

      var arraySalario = JSON.parse('[' + this.userChart.salario + ']');
      this.barChartData =   [
        { data: arraySalario, label: 'Salario Usuarios' }
      ];

    });

  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0], label: 'Salario Usuários' }
  ];

}
