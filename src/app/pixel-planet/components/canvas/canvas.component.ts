import { Component, Input, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Canvas } from '../../utils/canvas';
@Component({
  selector: 'app-canvas[canvas]',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  standalone: true,
  imports: [NgForOf],
})
export class CanvasComponent implements OnInit {
  @Input() public canvas: Canvas;
  @Input() public show_grid: boolean = true;
  constructor() {}
  ngOnInit() {}
}
