import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { safeLoad } from 'js-yaml';
import { TranslateService } from '@ngx-translate/core';

declare function unescape(s: string): string;

@Injectable()
export class Config {
	private config: Object;
	private translations: Object;

	constructor(private http: Http, private translate: TranslateService) { }

	private parseMessageBundleData(data) {
		let parsed = {};
		let parameters = data.split(/\n/);
		let regPlaceHolder = /(\{\d+\})/g;
		let regRepPlaceHolder = /\{(\d+)\}/g;
		let unicodeRE = /(\\u.{4})/ig;
		for (let i = 0; i < parameters.length; i++) {
			parameters[i] = parameters[i].replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim
			if (parameters[i].length > 0 && parameters[i].match("^#") !== "#") { // skip comments
				let pair = parameters[i].split('=');
				if (pair.length > 0) {
					/** Process key & value */
					let name = unescape(pair[0]).replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim
					let value = pair.length === 1 ? "" : pair[1];

					// process multi-line values
					while (value.match(/\\$/) === "\\") {
						value = value.substring(0, value.length - 1);
						value += parameters[++i].replace(/\s\s*$/, ''); // right trim
					}
					// Put values with embedded '='s back together
					for (var s = 2; s < pair.length; s++) { value += '=' + pair[s]; }
					value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim

					parsed[name] = value;

				} // END: if(pair.length > 0)
			} // END: skip comments
		}

		return parsed;
	};

	public getProp(key) {
		return this.config[key];
	}

	public loadConfig(): Observable<any> {
		return this.http.get('./config.yml').map(res => {
			this.config = safeLoad(res.text());
			return this.config;
		})
			.catch((error: any) => {
				console.log("Error while parsing config:", error);
				return error;
			});
	}

	public loadMessageBundle(localeCode): Observable<any> {
		let bundlePath = "resources/locale/messages." + localeCode + ".properties";
		return this.http.get(bundlePath).map(res => {
			this.translations = this.parseMessageBundleData(res.text());
			console.log("this.translations  ", this.translations);
			this.translate.setTranslation(localeCode, this.translations)
			this.translate.setDefaultLang(localeCode);
			this.translate.use(localeCode);
		})
			.catch((error: any) => {
				console.log("Failed to langauge strings", error);
				return error;
			});
	}

};