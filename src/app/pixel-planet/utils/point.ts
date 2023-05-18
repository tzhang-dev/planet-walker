export interface PointData {
  value: number;
  date?: Date;
}

export class Point implements PointData {
  value: number;
  date?: Date;

  constructor(scoreData: PointData) {
    this.value = scoreData.value;
    this.date = scoreData.date;
  }
}
