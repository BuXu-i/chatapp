import { io } from "socket.io-client";

export const socket = io(
	"http://127.0.0.1:3005", //#'ws://127.0.0.1:3000'
	// "http://43.142.189.60:3005", //#'ws://127.0.0.1:3000'
	{
		path: "", //# socket.io 库默认服务端path为/socket.io
		transports: ["websocket", "xhr-polling", "jsonp-polling"], //#此配置在我的代码中表现为必须项，官方示例未列出，请指教
	}
);
// socket.on("connect", (res) => {
//     console.log("#connect: ", res);
// });
// socket.on("message", (res) => {
//     console.log("#message: ", res);
// });
// socket.on("disconnect", () => {
//     console.log("断开连接");
// });
