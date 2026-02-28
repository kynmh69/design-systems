# Contributing

このリポジトリへのコントリビューションを歓迎します。

## ブランチ戦略

| ブランチ名 | 用途 |
|-----------|------|
| `main` | 本番リリース |
| `feat/*` | 新機能・新パターン |
| `fix/*` | バグ修正 |
| `docs/*` | ドキュメント更新 |

## 新しいパターンを追加する

### 1. ブランチを作成する

```bash
git checkout main
git pull
git checkout -b feat/your-pattern-name
```

### 2. パターンページを作成する

`src/app/patterns/[pattern-id]/page.tsx` を作成します。

```tsx
// src/app/patterns/your-pattern/page.tsx
export default function YourPatternPage() {
  return (
    <div>
      {/* パターンの実装 */}
    </div>
  );
}
```

### 3. パターンをレジストリに登録する

`src/lib/patterns.ts` の `patterns` 配列にエントリーを追加します。

```ts
{
  id: "your-pattern",
  title: "Your Pattern",
  description: "パターンの説明",
  category: "components", // components | layouts | forms | navigation
  tags: ["tag1", "tag2"],
  path: "/patterns/your-pattern",
}
```

### 4. 動作確認

```bash
npm run dev
# http://localhost:3000 でホームに新パターンが表示されることを確認
# http://localhost:3000/patterns/your-pattern でページが表示されることを確認
```

### 5. ビルドを通す

```bash
npm run build
```

### 6. PR を作成する

```bash
git add .
git commit -m "feat: add your-pattern"
git push -u origin feat/your-pattern-name
gh pr create
```

## 新しい shadcn/ui コンポーネントを追加する

このプロジェクトでは shadcn/ui を手動でセットアップしています。
新しいコンポーネントを追加する場合は [shadcn/ui のドキュメント](https://ui.shadcn.com/docs/components) を参照し、`src/components/ui/` 以下に手動で追加してください。

## コードスタイル

- ESLint の設定に従ってください (`npm run lint`)
- コンポーネントは TypeScript で記述してください
- スタイリングは Tailwind CSS クラスを使用してください
