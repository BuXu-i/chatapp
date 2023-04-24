<template>
    <div>
        <div class="onOff">
            <!-- <van-switch v-model="checked" size="40px" active-color="#dcdee0" inactive-color="#dcdee0" /> -->
            <div class="befor" ref="left" @click="onOff"></div>
            <div class="after" @click="onOff"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onOff() {
            this.is_onOff = !this.is_onOff; //判断方向
            clearInterval(this.onOffTiem);
            this.onOffTiem = setInterval(() => {
                if (this.is_onOff && this.left < 50) {
                    //向右走
                    this.left++;
                    if (this.left == 50) {
                        clearInterval(this.onOffTiem);
                    }
                } else if (!this.is_onOff && this.left > 36) {
                    //向左走
                    this.left--;
                    if (this.left == 36) {
                        clearInterval(this.onOffTiem);
                    }
                }
                this.$refs.left.style.left = this.left + "%";
            }, 20);
        },
    },
};
</script>

<style>
</style>