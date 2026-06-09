import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TripService } from '../../../../core/services/trip.service';

function endAfterStart(group: AbstractControl): ValidationErrors | null {
  const start = group.get('startDate')?.value;
  const end = group.get('endDate')?.value;
  return start && end && end < start ? { endBeforeStart: true } : null;
}

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrl: './create-trip.component.css',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class CreateTripComponent {
  private fb = inject(FormBuilder);
  private tripService = inject(TripService);

  submitting = signal(false);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    destination: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  }, { validators: endAfterStart });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { title, destination, startDate, endDate } = this.form.getRawValue();
    this.submitting.set(true);
    this.tripService.createTrip({
      title: title!,
      destination: destination!,
      startDate: startDate!,
      endDate: endDate!,
    }).subscribe({
      next: () => { this.form.reset(); this.submitting.set(false); },
      error: (err) => { console.error('Create trip error:', err); this.submitting.set(false); },
    });
  }
}
