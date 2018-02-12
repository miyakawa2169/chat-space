# README

# DB設計
## usersテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

## user_groupsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## groupsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## tweetsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|comment|string|null: false|
|photo|string|------|

# TODO
## Ruby version
WindowsPCで開発をしているが、仮想環境のCentOSのcurlコマンドのバージョンの古いため、ruby2.3.1へのバージョンアップでエラー発生。対応にやや時間がかかりそうなので、カリキュラムを進めつつ対応予定。

