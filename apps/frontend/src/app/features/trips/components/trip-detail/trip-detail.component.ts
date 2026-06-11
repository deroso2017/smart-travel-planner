import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TripService } from '../../../../core/services/trip.service';

function endAfterStart(group: AbstractControl): ValidationErrors | null {
  const start = group.get('startDate')?.value;
  const end = group.get('endDate')?.value;
  return start && end && end < start ? { endBeforeStart: true } : null;
}

@Component({
  selector: 'app-trip-detail',
  styleUrl: './trip-detail.component.scss',
  templateUrl: './trip-detail.component.html',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
})
export class TripDetailComponent {
  private route = inject(ActivatedRoute);
  private tripService = inject(TripService);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  router = inject(Router);

  editing = signal(false);
  saving = signal(false);
  deleting = signal(false);

  trip$ = this.tripService.getTrip(this.route.snapshot.paramMap.get('id')!);

  form = this.fb.group(
    {
      title: ['', [Validators.required, Validators.minLength(3)]],
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    },
    { validators: endAfterStart },
  );

  // startEdit(trip: {
  //   title: string;
  //   destination: string;
  //   startDate: string;
  //   endDate: string;
  // }) {
  //   this.form.patchValue({
  //     title: trip.title,
  //     destination: trip.destination,
  //     startDate: trip.startDate?.slice(0, 10),
  //     endDate: trip.endDate?.slice(0, 10),
  //   });
  //   this.editing.set(true);
  // }
  startEdit(trip: any) {
    this.form.patchValue({
      title: trip.title,
      destination: trip.destination,
      startDate: trip.startDate?.slice(0, 10),
      endDate: trip.endDate?.slice(0, 10),
    });
    this.editing.set(true);
  }

  save(id: string) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const { title, destination, startDate, endDate } = this.form.getRawValue();
    this.tripService
      .updateTrip(id, {
        title: title!,
        destination: destination!,
        startDate: startDate!,
        endDate: endDate!,
      })
      .subscribe({
        next: () => {
          this.saving.set(false);
          this.editing.set(false);
          this.snackBar.open('Trip updated!', 'Close', {
            duration: 3000,
            panelClass: ['snack-success'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
        error: (err: Error) => {
          this.saving.set(false);
          this.snackBar.open(err.message ?? 'Update failed', 'Close', {
            duration: 4000,
            panelClass: ['snack-error'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
      });
  }

  confirmDelete(id: string) {
    if (!confirm('Delete this trip? This cannot be undone.')) return;
    this.deleting.set(true);
    this.tripService.deleteTrip(id).subscribe({
      next: () => {
        this.snackBar.open('Trip deleted', 'Close', {
          duration: 3000,
          panelClass: ['snack-success'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.router.navigate(['/my-trips']);
      },
      error: (err: Error) => {
        this.deleting.set(false);
        this.snackBar.open(err.message ?? 'Delete failed', 'Close', {
          duration: 4000,
          panelClass: ['snack-error'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      },
    });
  }
}
