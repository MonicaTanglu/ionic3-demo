import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { InterSerProvider } from '../../providers/inter-ser/inter-ser'
import { LoadingController } from 'ionic-angular'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-index',
	templateUrl: 'index.html'
})
export class IndexPage {
	params = {
		pageSize: 20,
		pageNum: 1
	}
	list = []
	loaded = false
	infiniteScroll
	total = 0
	loading = false
	loader
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private inter: InterSerProvider,
		private loadingCtrl: LoadingController
	) {}

	ionViewWillEnter() {
		this.loaded = false
		this.list = []
		this.params.pageNum = 1
		this.setLoader()
		this.getData()
	}
	getData() {
		if (this.loading) return
		this.inter.getJokeList(this.params).subscribe((data) => {
			this.loaded = true
			this.list = this.list.concat(data['data'])
			this.total = data['total']
			if (this.params.pageNum === 1) this.loader.dismiss()
			if (this.params.pageNum > 1) this.infiniteScroll.complete()
		})
	}
	doInfinite(infiniteScroll) {
		if (this.list.length < this.total) {
			this.infiniteScroll = infiniteScroll
			this.params.pageNum++
			this.getData()
		} else {
			infiniteScroll.enable(false)
		}
	}

	/**
	 * 这种类型的方法建议写成全局方法
	 */
	setLoader() {
		this.loader = this.loadingCtrl.create({
			content: '加载中...',
			spinner: 'ios-small'
		})
		this.loader.present()
	}
}
