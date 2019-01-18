import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { HttpClientModule } from '@angular/common/http'
import { InterSerProvider } from '../providers/inter-ser/inter-ser'
import { PopSerProvider } from '../providers/pop-ser/pop-ser'
import { Camera } from '@ionic-native/camera'

@NgModule({
	declarations: [ MyApp, HomePage ],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp, { backButtonText: '', tabsHideOnSubPages: 'true' })
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage ],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		InterSerProvider,
		PopSerProvider,
		Camera
	]
})
export class AppModule {}
