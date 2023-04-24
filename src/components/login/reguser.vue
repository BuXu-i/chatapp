<template>

    <div>
        <!-- 头像后期上传 -->
        <span>昵称</span>
        <input type="text" ref="nickname" placeholder="必填">
        <br>
        <span>学校</span>
        <input type="text" ref="school" placeholder="非必填">
        <br>
        <span>电话</span>
        <input type="text" ref="telephone" placeholder="必填">
        <br>
        <span>密码</span>
        <input type="password" ref="password" placeholder="必填">
        <br>
        <div class="sex">
            <span>性别</span>
            <input type="radio" ref="sex" value="1" id="a" name="sex" checked>
            <label for="a" id="sex_1">男</label>
            <input type="radio" ref="sex" value="0" id="b" name="sex">
            <label for="b">女</label>
        </div>
    </div>

</template>

<script>
export default {
    // for 循环来进行渲染
};
</script>

<style lang="less" scoped>
.sex {
    #a,
    #b {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: bottom;
    }
    label {
        margin-left: 0.2rem;
    }
    #sex_1 {
        margin-right: 0.4rem;
    }
}
</style>