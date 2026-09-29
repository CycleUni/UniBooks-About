# 隱私權聲明

> 最後更新日期：2026 年 9 月 30 日

UniBooks（以下簡稱「本平台」）重視你的隱私。本聲明說明我們蒐集哪些資料、為何蒐集、如何使用與保護，以及你可以行使哪些權利。本聲明依中華民國《個人資料保護法》（以下簡稱「個資法」）及相關法規訂定。

使用本平台，即表示你已閱讀並瞭解本聲明。若你不同意，請停止使用本平台。

---

## English Summary

**UniBooks** ([unibooks.app](https://unibooks.app)) is a second-hand textbook search and matching platform for university students in Taiwan. This page is the privacy policy of the UniBooks app. The complete English policy is at [Privacy Policy (English)](/en/about/privacy); the full Traditional Chinese policy follows below.

**Data we collect**
- *Account data*: email address, name or nickname, avatar, language preferences.
- *Google user data* (only if you choose "Sign in with Google", scopes `openid`, `email`, `profile`): Google account ID (`sub`), email address and whether Google verified it, given and family name, profile picture URL, and the other basic claims in the ID token (such as locale and issue/expiry time). We do not access Gmail, Google Drive, contacts, calendar or any other Google data.
- *Student verification data*: school, `.edu.tw` school email, verification records.
- *Content you create*: book listings, condition photos, orders, in-app chat messages, restock alerts, reports.
- *Technical data*: IP address, browser and device type, pages visited, cookies, and anonymous usage statistics (Google Analytics).

**How we use it**: to create and secure your account, verify student status, show listings, match buyers and sellers, deliver chat and notification emails, prevent fraud and abuse, and improve the service. Google user data is used only for sign-in and your account profile. It is never used for advertising (including targeted ads), never sold, never sent to Google Analytics, and never used to train AI/ML models.

**How we share it**: we do not sell, rent or transfer personal data. We share it only with the service providers needed to operate the service (cloud hosting and storage, email delivery, analytics), where required by law, or with your consent. Other users see only your nickname, avatar, school and listings; your email is never shown publicly.

**Retention and deletion**: data is kept while your account exists. Deleting your account in Account Settings immediately deletes your Google link record (all Google user data above) and clears your email, name and avatar. You can also email [services@unibooks.app](mailto:services@unibooks.app); you can also revoke access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

**Google API Services User Data Policy (Limited Use)**: UniBooks' use and transfer of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. We do not use Google user data to develop, improve or train generalized AI or machine-learning models. If we ever want to use Google user data in a new way, we will update this policy and ask for your consent first.

**Security and your rights**: HTTPS everywhere, hashed passwords, least-privilege access. Under Taiwan's Personal Data Protection Act you may request access, copies, correction, deletion, or that we stop processing your data; we respond within 15 days.

**Contact**: [services@unibooks.app](mailto:services@unibooks.app)

---

## 一、資料控制者與聯絡方式

本平台由 UniBooks 開發團隊營運。關於個人資料的任何問題或請求，請來信：[services@unibooks.app](mailto:services@unibooks.app)。

---

## 二、我們蒐集哪些資料

### 2.1 你主動提供的資料

| 類別 | 內容 | 時機 |
|---|---|---|
| 帳號資料 | 電子郵件、姓名或暱稱、頭像、語言偏好 | 註冊、編輯個人資料 |
| 登入資料 | 密碼（僅保存單向雜湊值）；若使用 Google 登入，則為 Google 提供的帳號識別碼、電子郵件、姓名與頭像 | 註冊、登入 |
| 學生身分驗證資料 | 學校名稱、`.edu.tw` 學校信箱、驗證時間、每學期重新驗證紀錄；若申請人工審核，則包含你提交的佐證資料與申請說明 | 身分驗證、重新驗證 |
| 刊登資料 | 書名、ISBN、價格、書況分級與說明、書況照片 | 刊登書籍 |
| 交易資料 | 訂單、訂單狀態、取消紀錄、交易完成確認 | 下單、面交、取消 |
| 通訊資料 | 站內聊天訊息與相關時間戳記 | 與其他使用者溝通 |
| 到貨通知 | 你加入通知或願望清單的書籍 | 使用到貨通知 |
| 檢舉與申訴 | 檢舉對象、理由、附件與處理紀錄 | 提出檢舉或申訴 |
| 客服往來 | 你寄給我們的信件內容 | 聯絡客服 |

### 2.2 自動蒐集的資料

- **裝置與連線資料**：IP 位址、瀏覽器與作業系統類型、螢幕與語言設定、來源與造訪頁面、造訪時間。
- **登入狀態**：為維持登入與防範盜用，我們會保存登入憑證（refresh token）與其到期時間。
- **Cookie 與類似技術**：見第七節。
- **使用統計**：以 Google Analytics 4 蒐集匿名化的使用統計（頁面瀏覽、功能使用趨勢）。

### 2.3 來自第三方的資料

- **Google 登入**：你選擇以 Google 帳號登入時，我們會從 Google 取得基本帳號資料。
- **書目資料**：ISBN 書目資訊由 Google Books 等公開來源取得，不含使用者個資。

我們**不會**要求或儲存你的信用卡、銀行帳號或其他金融資料；本平台不經手任何買賣款項。

---

## 二之一、Google 使用者資料

UniBooks 提供「使用 Google 登入」功能（Google Identity Services）。本節說明我們如何存取、使用、分享、保護、保存與刪除 Google 使用者資料。若你不使用 Google 登入，我們不會取得任何 Google 使用者資料。

### 我們存取哪些 Google 資料

我們僅請求基本登入範圍：`openid`、`email`、`profile`。你同意後，Google 會提供一份登入憑證（ID token），我們從中取得並儲存：

| 資料 | 用途 |
|---|---|
| Google 帳號識別碼（`sub`） | 把你的 Google 帳號連結到 UniBooks 帳號，讓你下次能以 Google 登入 |
| 電子郵件地址及其是否已經 Google 驗證（`email`、`email_verified`） | 建立與識別帳號；只接受 Google 已驗證的信箱，防止冒用；寄送與帳號有關的通知信 |
| 名字與姓氏（`given_name`、`family_name`） | 預設為你的顯示名稱，可在帳號設定中修改 |
| 大頭貼網址（`picture`） | 預設為你的頭像；每次以 Google 登入時會同步更新 |
| 登入憑證中的其他基本欄位（如語系 `locale`、Google Workspace 網域 `hd`、憑證核發與到期時間） | 與上述資料一併保存在帳號連結紀錄中，僅作為連結紀錄的一部分，不作其他用途 |

我們**不會**存取你的 Gmail、Google 雲端硬碟、聯絡人、日曆、YouTube 或任何其他 Google 服務的資料，也不會取得你的 Google 密碼。

### 我們如何使用

Google 使用者資料**僅**用於上表所列、提供登入與帳號功能的目的。我們**不會**：

- 將 Google 使用者資料用於廣告，包括個人化或指定對象廣告（本平台依學校顯示的校園內容，依據的是你的 `.edu.tw` 學生身分驗證資料，與 Google 資料無關）；
- 出售 Google 使用者資料，或提供給資料仲介、廣告平台或資訊轉售商；
- 用以建立使用者輪廓、判斷信用或放貸資格；
- 用於開發、改善或訓練通用型人工智慧或機器學習模型。

### 我們如何分享

我們不會出售、出租或轉讓 Google 使用者資料。僅在下列情形分享：

- **服務供應商**：代我們提供雲端主機、資料庫主機與電子郵件寄送的供應商，僅為運作本服務而處理，並受契約保密義務約束；
- **其他使用者**：你的顯示名稱與頭像會顯示在你的個人資料與刊登頁面上；你的電子郵件地址與 Google 帳號識別碼不會公開；
- **依法令要求**，或**經你明確同意**。

Google 使用者資料**不會**傳送給 Google Analytics，也不會提供給任何廣告主。

### 我們如何保護

- 全程以 HTTPS 加密傳輸；
- ID token 由伺服器以 Google 公開金鑰驗證簽章後才接受；
- 資料儲存於受存取控管的資料庫，依最小權限原則僅限授權人員存取；
- 詳見第六節。

### 保存期間與刪除

- Google 使用者資料於你的 UniBooks 帳號存續期間保存。
- **刪除帳號**：你可以在「帳號設定」中直接刪除帳號。刪除時我們會**立即**刪除你的 Google 帳號連結紀錄（包含上表所有 Google 資料），並清除帳號上的電子郵件、姓名與頭像，同時撤銷所有登入憑證。
- **只撤銷 Google 存取權**：你可以隨時到 [Google 帳戶權限頁面](https://myaccount.google.com/permissions)移除 UniBooks。之後我們無法再以 Google 登入你的帳號，也不會再收到你的任何 Google 資料；若要一併刪除已儲存的資料，請刪除帳號或來信 [services@unibooks.app](mailto:services@unibooks.app)，我們會於 15 日內處理。

### Limited Use 聲明

UniBooks 使用與傳輸從 Google API 取得的資訊，將遵守 [Google API 服務使用者資料政策](https://developers.google.com/terms/api-services-user-data-policy)，包括其中的 Limited Use（有限使用）規定。我們不允許人員閱讀 Google 使用者資料，除非取得你的明確同意、為安全目的（如調查濫用）所必要、為遵守法令，或資料已彙總並去識別化且僅用於內部營運。

### 用途變更

若我們日後要以本節未載明的方式使用 Google 使用者資料，會先更新本聲明並通知你，並在使用前**取得你的同意**。

---

## 三、蒐集與使用目的

我們僅在下列特定目的範圍內使用你的資料：

1. **提供與維護服務**：帳號建立與驗證、學生身分確認與學期重新驗證、書籍搜尋與刊登、買賣雙方媒合與聊天、訂單流程、到貨通知。
2. **通知**：寄送驗證信、密碼重設、訂單狀態、到貨通知，以及你已開啟的新訊息通知信（可於設定中關閉）。
3. **安全與防詐**：偵測冒用帳號、重複註冊、垃圾訊息、濫用與違反條款的行為，處理檢舉與申訴。
4. **產品改善與統計**：以匿名化或彙總資料分析功能使用情形，改善搜尋與使用體驗。
5. **法令遵循**：回應主管機關或司法機關依法提出的要求，以及保護本平台與使用者的合法權益。
6. **校園內容與廣告版位（如有）**：依你的學校或地區顯示與校園生活相關的內容，所依據的是學生身分驗證資料。我們不會將可識別你身分的資料提供給廣告主，也**不會**將 Google 使用者資料用於任何廣告。

我們不會將你的資料用於上述以外的目的；若日後有新目的，會先取得你的同意或依法通知。

---

## 四、資料保存期間

- **帳號與刊登資料**：於帳號存續期間保存。
- **帳號刪除**：你刪除帳號後，我們會立即下架你的刊登、刪除 Google 帳號連結紀錄、學生身分驗證紀錄與到貨通知，並清除帳號上的電子郵件、姓名與頭像；為處理爭議、防止濫用及遵守法令，部分交易與檢舉紀錄會在必要期間內以去識別化或受限制存取的方式保留，期滿後刪除或匿名化。
- **聊天訊息**：於對話存續期間保存；帳號刪除後依前項處理。
- **登入憑證**：至到期或登出為止。
- **伺服器紀錄**：僅在資安與除錯所需的合理期間內保存。
- **Google Analytics 資料**：依 Google Analytics 設定之保存期間，且不與你的帳號資料串接。

---

## 五、資料分享與揭露

我們**不會出售或出租**你的個人資料。除下列情形外，不會將你的資料提供給第三方：

1. **其他使用者**：為完成交易，你的暱稱、頭像、學校與刊登內容、書況照片會對其他使用者可見；聊天內容僅有對話雙方（及在處理檢舉時必要的管理人員）可見。你的電子郵件不會公開顯示。
2. **服務供應商（受託處理者）**：我們委託下列類型的供應商代為處理資料，並要求其僅為本平台服務目的使用並採取適當保護措施：
   - 雲端與網路服務：網站託管、內容傳遞、檔案儲存與即時聊天服務（Cloudflare），以及後端主機與資料庫主機服務。
   - 電子郵件寄送服務。
   - Google：登入驗證、Google Analytics（僅匿名使用統計，不含 Google 使用者資料或帳號資料）、Google Books（書目查詢，不含使用者資料）。
3. **經你同意**。
4. **法令要求**：依法院命令、主管機關依法之要求，或為保護他人生命、身體、財產安全所必要。
5. **去識別化統計**：無法識別特定個人的彙總資料（不包含 Google 使用者資料）。

### 跨境傳輸

上述服務供應商的伺服器可能位於台灣境外（例如美國或其他地區）。你的資料可能因此被傳輸至境外處理；我們會選擇具備適當資料保護措施的供應商，並依個資法規定辦理。

---

## 六、資料安全

我們採取合理的技術與管理措施保護你的資料，包括：

- 全站強制使用 HTTPS 加密傳輸；
- 密碼僅以單向雜湊方式儲存，我們無法得知你的原始密碼；
- 登入憑證採短效存取權杖搭配可輪替的更新憑證；
- 資料庫與後台採最小權限原則，僅限授權人員存取；
- 使用者上傳圖片存放於受管理的物件儲存空間。

網際網路傳輸與電子儲存無法保證絕對安全。請妥善保管你的密碼，勿與他人共用帳號。若發現帳號遭盜用或資料外洩疑慮，請立即聯絡我們。

---

## 七、Cookie 與類似技術

| 類型 | 用途 | 是否可關閉 |
|---|---|---|
| 必要性儲存 | 維持登入狀態、語言與外觀偏好、安全防護 | 關閉後部分功能將無法使用 |
| 分析 | Google Analytics 匿名使用統計 | 可透過瀏覽器設定或 Google 提供的退出外掛停用 |

你可以透過瀏覽器設定刪除或阻擋 Cookie 與本機儲存（localStorage）。本平台不使用 Cookie 進行跨網站追蹤或個人化廣告。

---

## 八、你的權利

依據個資法，你就自己的個人資料得行使下列權利：

- 查詢或請求閱覽；
- 請求製給複製本；
- 請求補充或更正；
- 請求停止蒐集、處理或利用；
- 請求刪除。

**行使方式**：多數資料可直接於「帳號設定」查看與修改，包含通知偏好與帳號刪除。其他請求請寄信至 [services@unibooks.app](mailto:services@unibooks.app)，並附上註冊信箱以便核對身分。我們將於 **15 日內**回覆，必要時得延長，並會告知理由。

依法我們得因法令要求或執行業務所必須而拒絕部分請求（例如為處理爭議所必要之紀錄），屆時會說明原因。你不提供必要資料，或要求刪除、停止使用必要資料時，我們可能無法繼續提供全部或部分服務。

---

## 九、兒童及青少年

本平台限大專院校在學學生及校友使用。我們不會刻意蒐集未滿 18 歲者的個人資料；若你為未成年人，請在法定代理人同意下使用本平台。若發現我們在未經法定代理人同意下蒐集了未成年人的資料，請聯絡我們，我們將儘速處理。

---

## 十、第三方連結

本平台可能包含指向第三方網站的連結。這些網站有其自身的隱私政策，我們無法控制其內容與作法，請自行閱讀。

---

## 十一、聲明修訂

我們可能因法令、服務或營運調整而修訂本聲明。修訂後的內容公布於本頁，並更新頂端的「最後更新日期」；若有重大變更，我們會透過平台公告或註冊信箱通知你。修訂後你繼續使用本平台，視為同意修訂內容。

---

## 十二、聯絡我們

對本聲明有任何疑問、意見或申訴，請寄信至 [services@unibooks.app](mailto:services@unibooks.app)。相關條件亦請參閱[服務條款](/about/terms)。
