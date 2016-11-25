/**
 * Created by NCCSoft on 11/24/2016.
 */

function Stack() {
    this.list = [];
}

Stack.prototype.push = function(item) {
    this.list.push(item);
};

Stack.prototype.pop = function () {
    this.list.pop();
};

Stack.prototype.count = function () {
    return this.list.length;
};

Stack.prototype.empty = function () {
    this.list.splice(0, this.list.length);
};

(function () {
    var st = new Stack();
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    console.log(st, st.count());
    st.pop();
    console.log(st, st.count());
    st.empty();
    console.log(st, st.count());
})();

