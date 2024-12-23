# ベースイメージとしてNode.jsを使用
FROM node:22-slim AS base

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# 開発用のステージ
FROM base AS dev

# ソースコードをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "run", "dev"]

# ビルド用のステージ
FROM base AS build

# ソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# 実行用のステージ
FROM node:22-slim AS production

# 作業ディレクトリを設定
WORKDIR /app

# ビルド成果物をコピー
COPY --from=build /app/dist ./dist

# アプリケーションを起動
CMD ["npm", "run", "start"]