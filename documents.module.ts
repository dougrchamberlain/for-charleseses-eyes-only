import { AppRootComponent } from './src/app/app-root/app-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DocumentContainerComponent } from './src/app/document-container/document-container.component';
import { DocumentDetailComponent } from './src/app/document-detail/document-detail.component';
import { DocumentListComponent } from './src/app/document-list/document-list.component';
import { DocumentReviewComponent } from './src/app/document-review/document-review.component';
import { GroupByPipe } from './groupby.pipe';
import { DocumentMaterialModule } from './src/material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PatientDocumentsService } from './src/app/documents-service/documents-api.service';
import { TelemetryService } from './src/app/telemetry.service';

@NgModule({
  declarations: [
    AppRootComponent,
    DocumentContainerComponent,
    DocumentDetailComponent,
    DocumentListComponent,
    DocumentReviewComponent,
    GroupByPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DocumentMaterialModule,
    HttpClientModule,
    NgxDocViewerModule,
    AppRoutingModule
  ],
  entryComponents: [AppRootComponent],
  bootstrap: [AppRootComponent],
  providers: [GroupByPipe, PatientDocumentsService, TelemetryService]
})
export class DocumentsModule {}

platformBrowserDynamic()
  .bootstrapModule(DocumentsModule)
  .catch(err => console.error(err));
