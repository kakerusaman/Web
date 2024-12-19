# ベースイメージとしてNode.jsを使用
FROM node:22-slim

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

COPY . ./
# アプリケーションのビルド
RUN npm run build

# build stage
FROM dev AS build
RUN npm run build

# 開発用サーバの起動
CMD ["npm", "start"]