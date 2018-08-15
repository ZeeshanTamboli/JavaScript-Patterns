const Singleton = (() => {
  let instance;

  function createInstance() {
    const obj = { name: 'Brad' };
    return obj;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceA === instanceB); //Cannot create more than one instance in singleton pattern
