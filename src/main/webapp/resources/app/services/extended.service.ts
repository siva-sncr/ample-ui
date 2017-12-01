import { Injectable } from '@angular/core';
import { Config } from '../provider/config.provider';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ExtendedService {
  
  constructor(private http: Http,private _config:Config) { }

  /**
			Form the request urls base on input params
			@method get
			**/

	public getURL(page, entityType, params, ignoreContextPath) : any {
        page = page ? page.toLowerCase() : page;
        let config = this._config['config'];
    	var restURL = this.getRestAPIURL(ignoreContextPath);
		var rest = config['restapi'];
        var apiURLS = config['api'] || {};
        var basePage = apiURLS[page];
        var levelName = params['apiType'];
      	var path = basePage[levelName] ? basePage[levelName][entityType] : null;
		if (!levelName) {
			path = basePage[entityType];
		}
		try {
			path = path.replace(/\$/g, '');
		}
		catch (err) {
			return false;
		}
		let keys = Object.keys(params);
		if (typeof (params) !== undefined && params) {
			for (let i = 0; i < keys.length; i++) {
				var id;
				if (params[keys[i]] && typeof (params[keys[i]]) == 'object') {
					id = ((params[keys[i]]['type'] == "REGION") || (params[keys[i]]['type'] == "SUBSTATION") || (params[keys[i]]['type'] == "FEEDER") || (params[keys[i]]['type'] == "SITE") || (params[keys[i]]['type'] == "LATERAL") || (params[keys[i]]['type'] == "LATERAL_SITE")) ? params[keys[i]]["name"] : params[keys[i]]["id"];
				} else {
					id = params[keys[i]];
				}
				path = path.replace('{' + keys[i] + '}', id);
			}
		}

		if (rest && rest.offline) {
			path = path.replace("?", "_");
			path = path.replace("=", "_");
			path += ".json";
		}
		return restURL + path;
	}
	public getRestAPIURL(ignoreContextPath) {
        let config = this._config['config'];
		var rest = config['restapi'];
		var restURL = '';

		if (rest) {
			restURL += rest.protocol ? rest.protocol + '://' : '';
			restURL += rest.host ? rest.host : '';
			restURL += rest.port ? ':' + rest.port : '';
			restURL += restURL ? '/' : '';

			restURL = rest.offline ? "offline/" : restURL;
			if (!ignoreContextPath) {
				restURL += rest.contextPath ? rest.contextPath : '';
			}

		}

		return restURL;
	}

	/**
				Make an api request POST
				@method request
				@param viewName {String} relative path of view html
				**/
	public requestPOST(url, params, reqConfig) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(url, params);
		this.http.post(url, params).map(res => {
			console.log("response", res);
			return res;

		})
	}

}