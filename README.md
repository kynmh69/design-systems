# Design Systems

shadcn/ui を使ったUIパターンのコレクションです。Next.js 15 (App Router) + TypeScript + Tailwind CSS で構築されています。

## スタック

| 技術 | バージョン |
|------|-----------|
| Next.js | 15 (App Router) |
| TypeScript | ^5 |
| Tailwind CSS | ^3 |
| shadcn/ui | - |
| lucide-react | ^0.575 |

## 開発環境のセットアップ

### ローカル

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### Docker

```bash
# コンテナのビルドと起動
docker compose up --build

# バックグラウンド起動
docker compose up --build -d

# 停止
docker compose down
```

## パターン一覧

| ID | タイトル | カテゴリ |
|----|---------|---------|
| `button-variants` | Button Variants | components |

## プロジェクト構成

```
src/
├── app/
│   ├── page.tsx                        # ホーム（パターン一覧）
│   ├── layout.tsx
│   ├── globals.css
│   └── patterns/
│       └── [pattern-id]/
│           └── page.tsx                # 各パターンページ
├── components/
│   └── ui/                             # shadcn/ui コンポーネント
└── lib/
    ├── patterns.ts                     # パターンレジストリ
    └── utils.ts                        # cn() ユーティリティ
```

## Contributing

[CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。
