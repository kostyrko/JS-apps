import { Component, OnInit } from '@angular/core';

// zaimportowanie modułu GurupyFormularza
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  // stworzenie instancji FormGroup wraz z wpisanym w nią modelem formularza
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // formularz zagnieżdżony
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  // onSubmit() przechwytuje dane z formularza
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  // metoda odpowiadająca za aktualizację wartości formularza wykorzystując patchValue()
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
