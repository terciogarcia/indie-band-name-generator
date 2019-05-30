class FirebaseService {
  constructor(){
    this.db = firebase.database()
  };

  getPrefixes() {
    return new Promise((resolve, reject) => {
      this.db.ref('/prefixes').once('value').then((snapshot) => {
        resolve(snapshot.val());
      }, error => {
        reject(error);
      });
    });
  };

  getFirsts(){
    return new Promise((resolve, reject) => {
      this.db.ref('/firsts').once('value').then((snapshot) => {
        resolve(snapshot.val())
      }, error => {
        reject(error)
      })
    })
  };

  getMiddle(){
    return new Promise((resolve, reject) => {
      this.db.ref('/middle').once('value').then((snapshot) => {
        resolve(snapshot.val())
      }, error => {
        reject(error)
      })
    })
  };

  getSuffixes(){
    return new Promise((resolve, reject) => {
      this.db.ref('/suffixes').once('value').then((snapshot) => {
        resolve(snapshot.val())
      }, error => {
        reject(error)
      })
    })
  };
}