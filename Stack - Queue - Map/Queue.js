/**
 * Created by NCCSoft on 11/24/2016.
 */

function Queue() {
    this.list = [];
}

Queue.prototype.push = function(item) {
    this.list.push(item);
};

Queue.prototype.pop = function () {
    this.list.shift();
};

Queue.prototype.count = function () {
    return this.list.length;
};

Queue.prototype.empty = function () {
    this.list.splice(0, this.list.length);
};

(function () {
    var st = new Queue();
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    console.log(st);
    st.pop();
    console.log(st, st.count());
    st.empty();
    console.log(st, st.count());
})();