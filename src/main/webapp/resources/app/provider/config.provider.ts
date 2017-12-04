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

	getRestAPIURL(ignoreContextPath){
		var rest = this.config['restapi'];
		var restURL = '';
		
		if(rest){
			restURL += rest.protocol ? rest.protocol + '://' : '';
			restURL += rest.host ? rest.host : '';
			restURL += rest.port ? ':' + rest.port  : '';
			restURL += restURL ? '/' : '';
			
			restURL = rest.offline ? "offline/" : restURL;
			if(!ignoreContextPath){
				restURL += rest.contextPath ?  rest.contextPath  : '';
			}
			
		}
		
		return restURL;
	}
	
	/**
	Form the request urls base on input params
	@method get
	**/

	getURL(page, entityType, params, ignoreContextPath){
		page = page ? page.toLowerCase() : page;
		
		var restURL = this.getRestAPIURL(ignoreContextPath);
		var rest = this.config['restapi'];
		var apiURLS = this.config['api'] || {};
		var basePage = apiURLS[page];
		var levelName = params['apiType'];
		var path = basePage[levelName] ? basePage[levelName][entityType] : null;
		if(!levelName){
			path = basePage[entityType];
		}
		try {
			path = path.replace(/\$/g, '');
		}
		catch(err) {
			return false;
		}
		let keys = Object.keys(params);
		if(typeof(params) !== undefined && params) {
		  for(let i = 0; i < keys.length; i++){
			  var id;
			  if(params[keys[i]] && typeof(params[keys[i]]) == 'object'){
				  id = ((params[keys[i]]['type'] == "REGION") || (params[keys[i]]['type'] == "SUBSTATION") || (params[keys[i]]['type'] == "FEEDER") || (params[keys[i]]['type'] == "SITE") || (params[keys[i]]['type'] == "LATERAL") || (params[keys[i]]['type'] == "LATERAL_SITE"))? params[keys[i]]["name"]:params[keys[i]]["id"];
			  }else{
				  id = params[keys[i]];	
			  }
			path = path.replace('{'+ keys[i] + '}', id);
		  }
		}
	
		if(rest && rest.offline){
			path = path.replace("?", "_");
			path = path.replace("=", "_");
			path += ".json";
		}
		return restURL  + path;
	}

};