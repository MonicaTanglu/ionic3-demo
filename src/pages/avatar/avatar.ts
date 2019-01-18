import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'

/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'avatar',
	name: 'avatar'
})
@Component({
	selector: 'page-avatar',
	templateUrl: 'avatar.html'
})
export class AvatarPage {
	avatarUrl = 'assets/imgs/avatar.jpg'
	constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {}

	selectPicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
		}
		this.camera.getPicture(options).then(
			(imageData) => {
				// 这里处理图片并上传
				// 相关接口和处理不写了
				this.avatarUrl = 'data:image/jpeg;base64,' + imageData
			},
			(err) => {
				console.log(err)
			}
		)
	}
	takePhoto() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.NATIVE_URI,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: this.camera.PictureSourceType.CAMERA
		}
		this.camera.getPicture(options).then(
			(imageData) => {
				// 这里处理图片并上传
				// 相关接口和处理不写了
				this.avatarUrl = imageData
			},
			(err) => {
				console.log(err)
			}
		)
	}
}
