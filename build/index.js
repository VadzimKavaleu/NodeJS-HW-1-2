"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("ES6");

var User =
/*#__PURE__*/
function () {
  function User(name, age) {
    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
  }

  _createClass(User, [{
    key: "show",
    value: function show() {
      return "User: " + this.name + ", " + this.age;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(val) {
      this._name = val;
    }
  }, {
    key: "age",
    get: function get() {
      return this._age;
    },
    set: function set(age) {
      this._age = age;
    }
  }]);

  return User;
}();

var Worker =
/*#__PURE__*/
function (_User) {
  _inherits(Worker, _User);

  function Worker(name, description, experience) {
    var _this;

    _classCallCheck(this, Worker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Worker).call(this, name, description));
    _this.experience = experience;
    return _this;
  }

  _createClass(Worker, [{
    key: "show",
    value: function show() {
      return "Worker: " + this.name + ", " + this.age + ", " + this.experience;
    }
  }, {
    key: "experience",
    get: function get() {
      return this._experience;
    },
    set: function set(exp) {
      this._experience = exp;
    }
  }]);

  return Worker;
}(User);

var user6 = new User("Oleg", 44);
var worker6 = new Worker("Nick", 21, 2);
console.log(user6.show());
console.log(worker6.show());