<template>
    <!-- 子集路由 -->
    <div>
        <ul class="central">
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-faxian"></use>
                </svg><br />
                <router-link to="/home/group">圈子</router-link>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wenjian"></use>
                </svg><br>
                <router-link to="/home/friends_list">好友</router-link>
            </li>

            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg><br>
                <router-link to="/home/first">发布</router-link>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gerenziliao"></use>
                </svg><br />
                <router-link to="/home/my">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.central {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap; //默认值不会换行
    justify-content: space-around; //居中
    // align-items: flex-end; //项目在底部
    border-radius: 0.4rem 0.4rem 0 0;
    // padding-top: 0.1rem;
    background-color: rgb(237, 237, 237);
    // flex: 1;
    height: 100%;
    align-items: center;
}
</style>