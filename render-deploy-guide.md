# Render 部署指南：Yellow Airlines 網站

本指南將引導您完成在 [Render.com](https://render.com) 上部署 Yellow Airlines 網站的步驟。

## 前提條件

- GitHub 帳戶
- Render.com 帳戶
- 已上傳到 GitHub 的 YellowAir 項目代碼

## 步驟 1：登錄 Render.com

訪問 [Render.com](https://render.com) 並使用您的帳戶登錄。

## 步驟 2：創建新的 Web Service

1. 點擊 Render 儀表板右上角的 **New +** 按鈕
2. 從下拉菜單中選擇 **Web Service**

![新建 Web Service](https://render.com/static/docs/web-service.png)

## 步驟 3：連接 GitHub 倉庫

1. 選擇 **Connect GitHub** 選項
2. 若尚未連接您的 GitHub 帳戶，請按照提示進行授權
3. 在搜索欄中輸入 **yellowair** 查找您的倉庫
4. 選擇 **marecop/yellowair** 倉庫

## 步驟 4：配置服務設置

填寫以下服務設置：

| 設置項 | 值 |
|-------|-----|
| **Name** | `yellowair` 或您喜歡的名稱 |
| **Region** | 選擇離您用戶最近的地區 |
| **Branch** | `main` |
| **Root Directory** | _(留空)_ |
| **Runtime** | `Node` |
| **Build Command** | `chmod +x build.sh && ./build.sh` |
| **Start Command** | `cd .next/standalone && node server.js` |

## 步驟 5：設置環境變量

點擊 **Advanced** 展開高級選項，添加以下環境變量：

| 環境變量 | 值 |
|---------|-----|
| `NODE_ENV` | `production` |
| `NEXT_TELEMETRY_DISABLED` | `1` |
| `NEXT_TYPESCRIPT_CHECK` | `false` |
| `PORT` | `10000` |

## 步驟 6：選擇計劃

1. 選擇適合您需求的計劃（對於測試目的，可以使用免費計劃）
2. 免費計劃提供每月 750 小時的運行時間，但會在閒置 15 分鐘後休眠

## 步驟 7：創建 Web Service

點擊頁面底部的 **Create Web Service** 按鈕開始部署過程。

## 步驟 8：監控部署進度

Render 將開始構建和部署您的應用程序。您可以在部署日誌中查看進度：

1. 安裝依賴項（npm install）
2. 運行構建流程（./build.sh）
3. 啟動應用程序

整個過程可能需要 5-10 分鐘完成。

## 步驟 9：訪問您的網站

部署成功後，Render 將提供一個 URL（格式為 `https://yellowair.onrender.com` 或您自定義的名稱）。

點擊此 URL 訪問您部署的網站。

## 故障排除

如果部署過程中遇到問題，請檢查：

1. **構建失敗**：查看構建日誌中的錯誤信息
   - 檢查 `build.sh` 文件是否有執行權限
   - 確保所有依賴項都在 `package.json` 中正確列出

2. **啟動失敗**：檢查應用程序日誌
   - 確認 `server.js` 文件是否正確複製到 `.next/standalone` 目錄
   - 確認環境變量設置是否正確

3. **TypeScript 錯誤**：
   - 環境變量 `NEXT_TYPESCRIPT_CHECK=false` 應該已經忽略 TypeScript 錯誤
   - 如果仍有問題，可以嘗試在 Render 儀表板中手動重新部署，並選擇 "Clear build cache & deploy"

## 自動部署

默認情況下，每當您推送更改到 GitHub 倉庫的 `main` 分支時，Render 會自動重新部署您的網站。

## 自定義域名（可選）

如果您擁有自定義域名並希望將其用於您的網站：

1. 在 Render 儀表板中選擇您的服務
2. 點擊 **Settings** 選項卡
3. 向下滾動到 **Custom Domains** 部分
4. 點擊 **Add Custom Domain** 並按照說明進行操作

---

祝您部署順利！如有任何問題，請查閱 [Render 官方文檔](https://render.com/docs) 或聯繫支持團隊。 