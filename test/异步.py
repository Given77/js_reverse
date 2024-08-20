import asyncio


async def my_coroutine():
    print("Coroutine started")
    await asyncio.sleep(1)  # 模拟一个耗时的操作
    print("Coroutine finished")


async def main():
    await my_coroutine()

# 运行事件循环
asyncio.run(main())
