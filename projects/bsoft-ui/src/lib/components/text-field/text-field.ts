import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ necesario para ngModel

@Component({
  selector: 'lib-text-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css'
})
export class TextField {
  // ✅ Inputs (equivalentes a props en Vue)
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() visible: boolean = true;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  // ✅ Outputs (equivalentes a $emit)
  @Output() valueChange = new EventEmitter<string>();

  // Estado interno
  focused = signal(false);
  innerValue = signal(this.value);

  constructor() {
    // Reacciona si cambia el valor desde fuera
    effect(() => {
      this.innerValue.set(this.value);
    });
  }

  // ✅ Emite cambios al escribir
  onInput(value: string) {
    this.innerValue.set(value);
    this.valueChange.emit(value);
  }
}
