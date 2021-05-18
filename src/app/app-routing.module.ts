import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentContainerComponent } from './document-container/document-container.component';
const routes: Routes = [
  {
    path: 'documents/:patientId',
    component: DocumentContainerComponent
  },
  {
    path: '',
    redirectTo: '/documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
