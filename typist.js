import { from, empty, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators'

export class Typist {
  constructor(container, options = {}) {
    this.el = document.getElementById(container);
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
        concatMap((str, index) => {
          const source$ = index
            ? of({ type: 'insert', content: str })
            : of({ type: 'insert', content: str, placeholder: placeholder || '<span>' }) // first
          return source$.pipe(delay(this.waitTime * index))
        }),
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
          next: (res) => {
            this.handleResult(res)
            console.log(res);
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
  handleResult(res) {
    switch(res.type) {
      case 'insert':
        if (res.placeholder) { // first
          // create a empty node
          const holder = document.createElement('div');
          holder.innerHTML = res.placeholder;
          const newNode = holder.firstChild;
          newNode.innerHTML = res.content;
          this.el.appendChild(newNode);
        } else {
          this.el.lastChild.innerHTML += res.content;
        }
        break;
    }
  }
}

