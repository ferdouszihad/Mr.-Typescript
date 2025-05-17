"use strict";
{
    class Counter {
        get current() {
            return Counter.count;
        }
        static get increment() {
            Counter.count += 1;
            return Counter.count;
        }
        static get decrement() {
            Counter.count += 1;
            return Counter.count;
        }
    }
    Counter.count = 0;
    const sp1 = new Counter();
    const sp2 = new Counter();
    //   console.log(sp1.current);
    Counter.increment;
    Counter.increment;
    Counter.increment;
    Counter.increment;
    Counter.decrement;
    console.log(sp1.current);
    console.log(sp2.current);
}
