#!/bin/bash
set -e

# 設置環境變數
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export NEXT_TYPESCRIPT_CHECK=false
export NODE_OPTIONS="--max-old-space-size=4096"

echo "=== 開始構建流程 ==="

# 安裝依賴項
echo "安裝依賴項..."
npm install

# 確保安裝了 TypeScript 和相關類型
echo "確保安裝 TypeScript 相關依賴..."
npm install typescript @types/react @types/node @types/react-dom --no-save

# 確保數據目錄存在
echo "確保數據目錄存在..."
mkdir -p data

# 初始化空數據文件（如果不存在）
[ -f data/users.json ] || echo "[]" > data/users.json
[ -f data/flights.json ] || echo "[]" > data/flights.json
[ -f data/miles.json ] || echo "[]" > data/miles.json
[ -f data/sessions.json ] || echo "[]" > data/sessions.json

# 嘗試生成數據
echo "嘗試生成初始數據..."
node scripts/generateFlightData.js || echo "無法生成初始數據，將使用空數據文件"

# 構建應用程序
echo "構建應用程序..."
npm run build

# 複製 server.js 到 standalone 目錄（如果存在）
if [ -d .next/standalone ]; then
  echo "複製服務器文件到獨立部署目錄..."
  cp server.js .next/standalone/
fi

echo "=== 構建完成 ===" 