<template>
    <div>

        <div class="box">
            <p class=" ">注册和登录</p>
            <keep-alive>
                <loginVue v-if="is_loginvue" ref="loginVue" />
                <reguserVue v-else ref="reguserVue" />
            </keep-alive>
            <ul class="click">
                <li class="login" @click="login();">登录</li>
                <li class="reguser" @click="reguser();" style="margin-left: .4rem;">注册</li>
            </ul>
        </div>
    </div>
</template>

<script>
import loginVue from "@/components/login/login.vue";
import reguserVue from "@/components/login/reguser.vue";
import { mapActions } from "vuex";

export default {
    // name: "HomeView",
    data() {
        return {
            is_loginvue: true,
        };
    },
    methods: {
        //登录
        login() {
            if (this.is_loginvue === true) {
                console.log("检查id");
                console.log(this.$refs.loginVue.$refs.id.value + "");
                this.loginAis({
                    password: this.$refs.loginVue.$refs.password.value + "",
                    id: this.$refs.loginVue.$refs.id.value + "",
                });
                //登录完成  (登陆完成的函数会自动切换路由)
            } else {
                console.log("切换到注册页面 reguser");
                this.is_loginvue = true;
            }
        },
        //注册
        async reguser() {
            if (this.is_loginvue === false) {
                console.log("reguser 发出注册请求");
                let packgeRef = this.$refs.reguserVue.$refs;
                console.log("获取的注册信息");
                console.log({
                    nickname: packgeRef.nickname.value + "", //昵称
                    school: packgeRef.school.value + "", //学校
                    telephone: packgeRef.telephone.value + "", //电话
                    password: packgeRef.password.value + "", //密码
                    sex: packgeRef.sex.value, //性别
                });
                //判断注册信息是否合法  结构
                let { nickname, school, telephone, password, sex } = {
                    nickname: packgeRef.nickname.value + "", //昵称
                    school: packgeRef.school.value + "", //学校
                    telephone: packgeRef.telephone.value + "", //电话
                    password: packgeRef.password.value + "", //密码
                    sex: packgeRef.sex.value, //性别
                };
                if (nickname == "" || telephone == "" || password == "") {
                    console.log("数据不合法 已停止请求 请检查");
                    alert("数据不合法 已停止请求 请检查");
                    return;
                }
                let is = await this.reguserAis({
                    nickname, //昵称
                    school, //学校
                    telephone, //电话
                    password, //密码
                    sex, //性别
                });
                console.log("登录成功后返回参数 is");
                console.log(is);
                if (is) {
                    this.is_loginvue = true;
                }
            } else {
                console.log("切换到登录页面 login ");
                this.is_loginvue = false;
            }
        },
        //登录和注册 函数
        ...mapActions("login", ["loginAis", "reguserAis"]),
    },
    components: {
        loginVue,
        reguserVue,
    },
};
</script>
<style lang="less" scoped>
/deep/ .box {
    // line-height: 10vh;
    margin-top: 20%;
    text-align: center;
    font-size: 0.35rem;
    p {
        font: 900 0.8rem "宋体";
        margin-bottom: 0.6rem;
        margin-left: 0.3rem;
    }
    .click {
        display: flex;
        justify-content: center;
        margin-top: 0.3rem;
        .login,
        .reguser {
            border-radius: 0.1rem;
            background-color: gray;
            padding: 0.1rem 0.65rem;
            font: 900 0.55rem "宋体";
        }
    }
    // font-size: 1.33rem;
    span {
        margin-right: 0.15rem;
        font: 600 0.48rem "宋体";
    }
    input {
        border: 0 solid;
        padding: 0.1rem;
        height: 0.65rem;
        width: 70vw;
        font-size: 0.33rem;
        margin-top: 0.2rem;
        vertical-align: bottom;
    }
    .icon {
        // font-size: 0.5rem;
        height: 0.7rem;
        width: 0.7rem;
        vertical-align: bottom;
        margin-left: 0.2rem;
    }
}
</style>
