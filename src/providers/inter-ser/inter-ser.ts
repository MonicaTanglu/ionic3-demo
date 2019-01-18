import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

/*
  Generated class for the InterSerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterSerProvider {
	private baseUrl = 'https://www.easy-mock.com/mock/5ab5e9251a094046dab2cb6e/example'
	constructor(public http: HttpClient) {
		console.log('Hello InterSerProvider Provider')
	}
	getJokeList(params) {
		return this.http.get(this.baseUrl + '/jokes', { params: params })
	}
}
