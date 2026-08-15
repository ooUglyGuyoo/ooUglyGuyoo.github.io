# 幸运大抽奖页面 (/raffle)

HKUSTMSSS 2026迎新晚会 · 幸运大抽奖。单文件自包含页面(含背景图、样式、逻辑),断网也能在投影电脑本地打开。

## 现场操作
1. 打开 https://www.lyceric.com/raffle/ (或本地文件)
2. 输入密码解锁(代码顶部 `PASSWORD_HASH`)
3. 空格/回车 = 下一屏;三轮流程自动推进
4. 谢幕页可导出中奖名单 .txt / .csv(浏览器本地下载)

## 如何修改数据
- 密码 / 奖品 / 轮次: 编辑 `index.html` 顶部 `PASSWORD_HASH` 与 `ROUNDS` 常量
- 号码池: 编辑 `buildPool()` 中的号段(S/H/V)
- 正式号码表(Excel 一列)由脚本转成 JSON 覆盖 `buildPool()` 即可
- 奖品图/品牌 logo: 已以 base64 内嵌在 `index.html` 的 `PRIZE_IMG` / `LOGO_IMG` 常量中;
  换图请把新图发给助手,用 `embed_images.py`(本地源码目录)重新生成并推送
