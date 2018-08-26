const { from, empty, of } = require('rxjs');
const { delay, concatMap } = require('rxjs/operators');

class Typist {
  constructor(container, options = {}) {
    this.el = null;// document.getElementById(container);
    this.queue = [];
    this.waitTime = options.waitTime || 100;
  }

  type(str, placeholder) {
    let inputArray;
    // format input string
    if (this.waitTime === 0) {
      inputArray = [str];
    } else {
      inputArray = [...str];
    }

    this.addToQueue(from(inputArray)
      .pipe(
        concatMap((str, index) => of(str).pipe(delay(this.waitTime * index))),
      )
    );
    return this;
  }

  wait(time) {
    this.addToQueue(
      empty().pipe(delay(time || this.waitTime))
    );
    return this;
  }

  addToQueue(observable) {
    console.log('Enter: ', this.queue.length)
    // if queue is empty, run observable
    if (this.queue.length === 0) {
      this.queue.push(observable);
      this.runObservable();
    } else {
      this.queue.push(observable);
    }
  }

  runObservable() {
    empty().pipe(
      delay(0)
    ).subscribe({
      complete: () => {
        const first = this.queue.shift();
        first.subscribe({
          next: (val) => {
            console.log(val);
          },
          complete: () => {
            if (this.queue.length) {
              this.runObservable();
            }
          }
        })
      }
    })
  }
}

new Typist().type('This').wait(1000).type('is').wait(1000).type('a').type('Test.')
