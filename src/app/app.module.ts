import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { DataEntryComponent } from './figures/data-entry/data-entry.component';
import { DataSelectorComponent } from './figures/data-selector/data-selector.component';
import { FiguresService } from './figures/figures.service';
import { FiguresModule } from './figures/figures.module';
import { routerModule } from './app.routing';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FiguresModule,
    routerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
})
  ],
  exports: [TranslateModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
