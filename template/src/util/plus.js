import Vue from 'vue'
export function Http () {
  return {
    install () {
      Vue.prototype.$http = function (options) {
        var url = options.url,
        fetchOption = {
          method: options.type || 'GET',
          credentials: 'same-origin'
        }

        if(fetchOption.method === 'GET'){
          let params = "?"
          for(let key in options.params){
            params += key + '=' + options.params[key] + '&'
          }
          url = url + params
          url = url.substring(0, url.length-1)
        }else if(options.type === 'POST'){
          fetchOption.body = JSON.stringify(options.params)
        }

        return window.fetch(url, fetchOption)
        .then(function (rawResponse) {
          return rawResponse.json()
        })
      }

      window.$http = Vue.prototype.$http;
    }
  }
}