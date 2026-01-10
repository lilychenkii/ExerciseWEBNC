import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  standalone: false,  // Đã đúng rồi, giữ nguyên
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  a_number: number = 5;
  b_number: number = 7;
  c_number: number = 2;
  result: string = "....";

  getResult(): void {
    if (this.a_number === 0) {
      // Phương trình bậc 1: bx + c = 0
      if (this.b_number === 0) {
        if (this.c_number === 0) {
          this.result = "Vô số nghiệm";
        } else {
          this.result = "Vô nghiệm";
        }
      } else {
        const x = -this.c_number / this.b_number;
        this.result = `x = ${x.toFixed(2)}`;
      }
    } else {
      // Phương trình bậc 2: ax² + bx + c = 0
      const delta = this.b_number ** 2 - 4 * this.a_number * this.c_number;
      
      if (delta < 0) {
        this.result = "Vô nghiệm";
      } else if (delta === 0) {
        const x = -this.b_number / (2 * this.a_number);
        this.result = `Nghiệm kép: x = ${x.toFixed(2)}`;
      } else {
        const x1 = (-this.b_number + Math.sqrt(delta)) / (2 * this.a_number);
        const x2 = (-this.b_number - Math.sqrt(delta)) / (2 * this.a_number);
        this.result = `x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
      }
    }
  }

  clear(): void {
    this.a_number = 0;
    this.b_number = 0;
    this.c_number = 0;
    this.result = "....";
  }
}