class Img {
  constructor(idImg, userName, urlImg, likes, date) {
    this.idImg = idImg;
    this.userName = userName;
    this.urlImg = urlImg;
    this.likes = likes;
    this.date = date;
  }

  getIdImg() {
    return this.idImg;
  }

  setIdImg(idImg) {
    this.idImg = idImg;
  }

  getUserName() {
    return this.userName;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  getUrlImg() {
    return this.urlImg;
  }

  setUrlImg(urlImg) {
    this.urlImg = urlImg;
  }

  getLikes() {
    return this.likes;
  }

  setLikes(likes) {
    this.likes = likes
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }


}

module.exports = Img;