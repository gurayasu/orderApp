## セルフオーダーシステム
[Hack.BAR鳥取](https://note.com/23721740/n/nab52b7031400)というイベントを開催し、スマホからドリンクを注文するためのセルフオーダーシステムを作りました。  
### 成果物


https://user-images.githubusercontent.com/86140172/216852391-fb5c168d-5bbc-40b5-94c3-767c8b2dadf2.mp4


### 言語・環境
* React（フロント）
* Laravel（バックエンド）
* AWS EC2（インフラ）
* AWS RDS(データベース)
### 利用できる機能
* カテゴリ別でメニューを閲覧し注文
* メールでの認証機能（認証はLaravel Sanctum使用）
### 実装したかったけどできなかった機能
* SNS(TwitterやGoogleアカウント)での認証機能（Larave socialiteベース）  
  * Laravel単体では実装できたが、今回のSPAの環境でCSRFトークンエラーを解消できず実装に至らなかった
