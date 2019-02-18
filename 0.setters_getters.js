const user = {
  _name: 'Frank',
  _lastname: 'Washosky',
  get fullname() {
    if(this._name && this._lastname) {
      console.log(`${this._name} ${this._lastname}`);
    } else {
      console.log('Name or Lastname are empty please set values');
    }
  },
  set name(name) {
    if(typeof name === 'string') {
      this._name = name;
    } else {
      console.log('value passed is not a string');
    }
  },
  set lastname(lastname) {
    if(typeof lastname === 'string') {
      this._lastname = lastname;
    } else {
      console.log('value passed is not a string');
    }
  }
}

console.log(user)
console.log(user.fullname)
user.name = 'Robert'
console.log(user.fullname)
user.name = ''
console.log(user.fullname)
console.log(user._name)
console.log(user._lastname)
