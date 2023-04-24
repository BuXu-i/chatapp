const plusExtends = (fn) => {
    console.log("0.0");
    if (window.plus) {
        console.log(this);
        // setTimeout(fn, 0);
        this.plusReady();
    } else {
        document.addEventListener("plusready", fn, false);
    }
};
export default plusExtends;
