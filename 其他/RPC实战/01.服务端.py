import asyncio
import websockets


# 处理WebSocket连接的回调函数
async def handler(websocket, path):
    try:
        async for message in websocket:
            print(f"Received message: {message}")
            await websocket.send(f"Echo: {message}")
    except websockets.ConnectionClosedError:
        print("Connection closed unexpectedly")
    except websockets.ConnectionClosedOK:
        print("Connection closed gracefully")


# 启动WebSocket服务器
async def main():
    async with websockets.serve(handler, "localhost", 8080):
        print("WebSocket server started at ws://localhost:8080")
        await asyncio.Future()  # run forever


# 运行事件循环
if __name__ == "__main__":
    asyncio.run(main())
