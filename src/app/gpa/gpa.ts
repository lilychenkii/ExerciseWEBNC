import { Component } from '@angular/core';

@Component({
  selector: 'app-gpa',
  standalone: false,
  templateUrl: './gpa.html',
  styleUrl: './gpa.css',
})
export class Gpa {
  gpaResult: string = '';
  classification: string = '';

  calculate_gpa(qt: number, gk: number, ck: number): number {
    return (qt * 0.2) + (gk * 0.3) + (ck * 0.5);
  }

  get_classification(gpa: number): string {
    if (gpa >= 9.0) {
      return 'Xuất sắc';
    } else if (gpa >= 8.0) {
      return 'Giỏi';
    } else if (gpa >= 7.0) {
      return 'Khá';
    } else if (gpa >= 5.5) {
      return 'Trung bình khá';
    } else if (gpa >= 4.0) {
      return 'Trung bình';
    } else {
      return 'Yếu';
    }
  }

  get_gpa(qt: string, gk: string, ck: string): void {
    const qt_number = parseFloat(qt);
    const gk_number = parseFloat(gk);
    const ck_number = parseFloat(ck);

    if (isNaN(qt_number) || isNaN(gk_number) || isNaN(ck_number)) {
      this.gpaResult = 'Vui lòng nhập điểm hợp lệ!';
      this.classification = '';
      return;
    }

    if (qt_number < 0 || qt_number > 10 || 
        gk_number < 0 || gk_number > 10 || 
        ck_number < 0 || ck_number > 10) {
      this.gpaResult = 'Điểm phải trong khoảng 0-10!';
      this.classification = '';
      return;
    }

    const gpa = this.calculate_gpa(qt_number, gk_number, ck_number);
    this.gpaResult = `${gpa.toFixed(2)}`;
    this.classification = `${this.get_classification(gpa)}`;
  }

  reset(): void {
    this.gpaResult = '';
    this.classification = '';
  }
}