import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ExamplesModule } from './examples/examples.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ExamplesModule,
        TranslateModule.forRoot({
            loader: provideTranslateHttpLoader({
                prefix: './assets/i18n/',
                suffix: '.json'
            })
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
