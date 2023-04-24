//配置 axios 的默认请求
import axios from "axios";
export let servece = axios.create({
	baseURL: "http://localhost:3007/", //默认是git请求
	// baseURL: "http://43.142.189.60:3007/", //默认是git请求
	timeout: 3000, //请求时间限制
	headers: {
		// "Content-Type": "application/x-www-form-urlencoded",
		"Content-Type": "application/json",
	},
	// `transformRequest` 允许在向服务器发送前，修改请求数据
	// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
	// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
	transformRequest: [
		function (data, headers) {
			// 对 data 进行任意转换处理
			data = JSON.stringify(data);
			return data;
		},
	],

	// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
	transformResponse: [
		function (data) {
			// 对 data 进行任意转换处理
			// data.data = JSON.parse(data.data);
			data = JSON.parse(data);
			return data;
		},
	],
});
//
// 添加请求拦截器  下面的都未使用
export let request = axios.interceptors.request.use(
	function (config) {
		console.log("axios 请求拦截");
		// 在发送请求之前做些什么
		console.log(config);
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		console.log("axios 错误拦截");
		console.log(error);
		return Promise.reject(error);
	}
);

// 添加响应拦截器
export let response = axios.interceptors.response.use(
	function (response) {
		console.log("axios 正常 响应");
		// 对响应数据做点什么
		console.log(response);
		return response;
	},
	function (error) {
		// 对响应错误做点什么
		console.log("axios 错误响应");
		console.log(error);
		return Promise.reject(error);
	}
);
// axios.interceptors.request.eject(myInterceptor);.//删除拦截器
//错误处理  catch 错误捕捉
// axios
//     .get("/user/12345", {
//         //定义一个错误http请求代码的返回范围
//         validateStatus: function (status) {
//             return status < 500; // Reject only if the status code is greater than or equal to 500
//         },
//     })
//     .catch(function (error) {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //请求已发出，服务器以状态代码响应
//             //超出2xx范围
//             console.log(error.response.data);
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             // http.ClientRequest in node.js
//             //已发出请求，但未收到响应
//             //“错误。request`是浏览器中XMLHttpRequest的实例和
//             //网址：http。node.js中的ClientRequest
//             console.log(error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             //设置触发错误的请求时发生了一些事情
//             console.log("Error", error.message);
//         }
//         console.log(error.config);
//     });
// export default { servece, request, response };
// export default servece;
