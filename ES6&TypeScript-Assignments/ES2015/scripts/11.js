"use strict";
class fibona {
    constructor(first, second) {
        this.first = 0;
        this.second = 0;
        this.res = 0;
        this.next = () => {
            this.res = this.first + this.second;
            this.first = this.second;
            this.second = this.res;
            console.log(this.res);
        };
        this.first = first;
        this.second = second;
        this.res = this.res;
    }
}
let p = new fibona(1, 1);
p.next();
p.next();
p.next();
p.next();
