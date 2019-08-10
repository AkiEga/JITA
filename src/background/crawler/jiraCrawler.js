import fs from 'fs'
import crypto from 'crypto'
import request from 'request'

export class JiraCrawler {
  constructor() {
    this.init()
  }
  init() {
    this.algorithm = 'aes-256-ctr'
    this.passphrase = '7IeZlmfz'
    this.user_config = JSON.parse(fs.readFileSync('user.json', 'utf8'))
    this.user_config.password_decrypted = this.decrypt(this.user_config.password)
  }
  search(jql) {
    return new Promise((resolve, reject) => {
      let queryUrl = this.user_config.baseUrl + '/rest/api/2/search?jql=' + jql
      queryUrl = this.addIdPassToUrl(queryUrl)
      request.get(queryUrl, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let data = JSON.parse(body)
          console.log(data.issues)
          resolve(data.issues)
        } else {
          console.log("There isn't any result")
          console.log(error)
        }
      })
    })
  }

  // downloadAttachmentFile(result) {
  //   return new Promise((resolve, reject) => {
  //     request.get(this.addIdPassToUrl(result.content._links.self), (error, response, body) => {
  //       let data;
  //       if (!error && response.statusCode == 200) {
  //         data = JSON.parse(body);
  //         console.log(data.results);
  //       } else {
  //         console.log('There isn\'t any result');
  //         console.log(error);
  //       }

  //       let download_url =
  //         this.addIdPassToUrl(data._links.base) + data._links.download;
  //       console.log('download_url:' + download_url);

  //       let download_filename = this.user_config.downloadDir + result.title;

  //       request
  //         .get(download_url)
  //         .on('response', res => {
  //           console.log('statusCode:' + res.statusCode);
  //         })
  //         .pipe(fs.createWriteStream(download_filename));
  //     });
  //   });
  // }
  getConfig() {
    return this.user_config
  }
  // getBaseUrl() {
  //   return this.user_config.baseUrl;
  // }
  // getDownloadDir() {
  //   return this.user_config.downloadDir;
  // }
  updateSetting(user_config) {
    console.log(user_config)

    this.user_config.baseUrl = user_config.baseUrl
    this.user_config.username = user_config.username
    this.user_config.password = this.encrypt(user_config.password_decrypted)
    this.user_config.auto_sync_time = user_config.auto_sync_time
    this.user_config.downloadDir = user_config.downloadDir
    let save_config = this.user_config
    delete save_config.password_decrypted

    fs.writeFileSync('user.json', JSON.stringify(save_config, null, '    '))

    this.init()
    return
  }
  encrypt(text) {
    let cipher = crypto.createCipher(this.algorithm, this.passphrase)
    let crypted = cipher.update(text, 'utf8', 'base64')
    crypted += cipher.final('base64')
    return crypted
  }

  decrypt(text) {
    let decipher = crypto.createDecipher(this.algorithm, this.passphrase)
    let dec = decipher.update(text, 'base64', 'utf8')
    dec += decipher.final('utf8')

    return dec
  }

  addIdPassToUrl(Url) {
    let newUrl = encodeURI(Url.replace(/^https:\/\//, 'http://' + this.user_config.username + ':' + this.user_config.password_decrypted + '@'))
    return newUrl
  }
}
