<template>
    <div class="box">
        <div>
            <span>账号</span>
            <input type="text" ref="id" value="00100011">
            <svg class="icon" aria-hidden="true" v-show="id">
                <use xlink:href=" #icon-chenggong"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-show="!id">
                <use xlink:href=" #icon-cuowu"></use>
            </svg>
            <br>
            <span>密码</span>
            <input type="password" ref="password" value="00100011">
            <svg class="icon" aria-hidden="true" v-show="password" @click="ji">
                <use xlink:href=" #icon-cuowu"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-show="!password">
                <use xlink:href=" #icon-chenggong"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: true, //显示正确与否 是否为空
            id: true,
        };
    },
    emits: [""],
    methods: {},
};
</script>

<style lang="less" >
</style>