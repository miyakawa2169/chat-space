# README

# DB設計
## usersテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :user_groups, dependent: :destroy
- has_many :groups, through: :user_groups
- accepts_nested_attributes_for :user_groups, allow_destroy: true
- has_many :tweets, dependent: :destroy

## user_groupsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|

### Association
- belongs_to :users
- belongs_to :groups

## groupsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :user_groups, dependent: :destroy
- has_many :users, through: :user_groups
- accepts_nested_attributes_for :user_groups, allow_destroy: true
- has_many :tweets, dependent: :destroy

## tweetsテーブル
### テーブル定義
|Column|Type|Options|
|------|----|-------|
|(id)※自動生成|integer|index: true ※自動生成されるカラムにindexのみ追加|
|group_id|integer|null: false, foreign_key: true, index: true|
|user_id|integer|null: false, foreign_key: true, index: true|
|comment|string|null: false|
|photo|string|------|

### Association
- belongs_to :users
- belongs_to :groups

# TODO
## Ruby version
WindowsPCで開発をしているが、仮想環境のCentOSのcurlコマンドのバージョンの古いため、ruby2.3.1へのバージョンアップでエラー発生。対応にやや時間がかかりそうなので、カリキュラムを進めつつ対応予定。

