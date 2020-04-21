# JavaScript Best Practices

This Post is a place for me to gather tips for writing better Javascript.

** Don't use a constructor function**

"JavaScript built-ins started out using constructors because Brendan Eich was told to make it look like Java."

**Don't use the new keyword.**

** Don't use instanceof.**

** Don't use ES6 'class' keyword.**

"That's like driving your Tesla Model S to a car dealership and trading it in for a rusted out 1983 Ford Pinto."

If you want to add functionality to an object while reusing that code, use a **Object.create**. The result of .create() is called a delegate prototype.
Here a doctor needs to draw blood so we are adding him this ability. We can also add it to a nurse etc.. 
```js
// example for code reuse using Object.create()

let drawBlood = {
  access: 'waitingRoom',
  draw () {
    return `${this.name}, ${this.specialty}, draws blood.`;
  }
};

let doctor = {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist',

  // a short-hand way to declare a function within an object literal
  prescribe (drug) {
    return `${this.name}, ${this.specialty}, prescribes ${drug}.`;
  }
};

doctor = Object.assign(Object.create(drawBlood), doctor);

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.

```

I also created a [Docker container](https://github.com/oren/js-best-practices) for running the code samples.

## References

* https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
