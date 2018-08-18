const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send(message, to) {
    this.chatroom.send(message, this, to);
  },

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; //list of users

  return {
    register(user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send(message, from, to) {
      if (to) {
        //Single user message
        to.receive(message, from);
      } else {
        //Mass message
        for (key in users) {
          //check to not send it to himself
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const john = new User('John');
const kaladin = new User('Kaladin');
const shallan = new User('Shallan');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(kaladin);
chatroom.register(shallan);

kaladin.send('Hello Shallan!', shallan);
john.send('Hello Kaladin!', kaladin);
john.send('Hello the stromlight archive characters!');
