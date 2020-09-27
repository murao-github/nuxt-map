# nuxt-map

## ビルド手順

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## branch命名ルール

以下のルールに従ってbranchの命名を行う。

| 種類 | branchのネーミングルール |
| ---- | ---- |
|機能追加系|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|ホットフィックス系|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|