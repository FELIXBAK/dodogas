
var SITE = {
  name: "dodogas",

  sample: true,

  contacts: { discord: "https://discord.gg/FXWPyAvRCh" }
};




var SERVICES = [
  { name: "Discord", short: "Community · real-time chat", icon: "../img/sv/discord.png", tag: "Community", access: "", desc: "Just sign up to view all Basic-tier materials. Complete your membership sign-up and explore the boards and materials as much as you like.", link: "https://discord.gg/FXWPyAvRCh" },
  { name: "YouTube", short: "dodogas video channel", icon: "youtube", tag: "Video", access: "", desc: "Complete your membership sign-up and explore the boards and materials as much as you like.", link: "https://www.youtube.com/@dodogas" },
  { name: "Naver Cafe", short: "Community · resource archive", icon: "cafe", tag: "Community", access: "", desc: "Just sign up to view all Basic-tier materials. Complete your membership sign-up and explore the boards and materials as much as you like.", link: "https://cafe.naver.com/liquidation" },
  { name: "Boomboom Lite", short: "Telegram · Open to all", icon: "telegram", tag: "Telegram", access: "Open to all", desc: "Boomboom Lite, provided on a Telegram channel. Anyone can view it for free.", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "KingFisher", short: "20% off when paying", icon: "../img/sv/kingfisher.png", tag: "Analysis service", access: "20% off when paying", desc: "The KingFisher service. Paying through the link below gives you a 20% discount.", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];


var EXCHANGES = [
  { id: "binance", icon: "../img/ex/binance.png", name: "Binance", benefit: "20% fee discount", code: "361097924", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx", icon: "../img/ex/okx.png",     name: "OKX",     benefit: "20% fee payback", code: "67654160", link: "https://okx.com/join/67654160" },
  { id: "bybit", icon: "../img/ex/bybit.png",   name: "Bybit",   benefit: "20% fee discount", code: "37560", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget", icon: "../img/ex/bitget.png",  name: "Bitget",  benefit: "50% fee discount", code: "wfx8", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", icon: "../img/ex/tethermax.png", name: "TetherMax", benefit: "Up to 90%+ refund (see homepage)", code: "3032", link: "https://tethermax.io/en/signup?inviteCode=3032" }
];


var EVENTS = [

];



var GUIDES = [
  { "id": "binance", "name": "Binance", "sections": [
    { "id":"signup","title":"Sign up","time":"About 3 minutes", "steps": [
      {"title":"Open via sign-up link","do":["Open the exchange with the [Open sign-up link] button above.","Tap [Sign Up]."],"tip":"Make sure you are on the official Binance app or website address.","screen":{"k":"tap","title":"Welcome to Binance!","btn":"Sign Up","alt":"Log In"}},
      {"title":"Account info + referral code","do":["Enter your email (or phone number) and a password.","Check that {CODE} is in the referral code field. If it is empty, enter it yourself.","Tick the terms and tap [Next]."],"warn":"It is hard to add a referral code after signing up. Be sure to check at this step.","screen":{"title":"Create account","rows":[{"l":"Email","v":"example@email.com"},{"l":"Password","v":"••••••••"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"Email verification","do":["Enter the 6-digit code from the email and tap [Submit]."],"tip":"If you don't see the email, check your spam folder or request the code again.","screen":{"k":"otp","title":"Email verification","btn":"Submit"}},
      {"title":"Turn on 2-step verification (2FA)","do":["In security settings, connect an OTP app such as Google Authenticator."],"warn":"Keep your OTP backup key safe in a separate place so you don't lose it.","screen":{"k":"menu","title":"Security settings","items":["Google Authenticator","SMS verification","Email verification"],"hl":0}}
    ]},
    { "id":"kyc","title":"KYC identity verification","time":"About 5 minutes", "steps": [
      {"title":"Start verification","do":["Tap [Verify Now] on the main screen."],"tip":"KYC verification is required to trade and to deposit or withdraw.","screen":{"k":"tap","title":"Verify Identity","btn":"Verify Now"}},
      {"title":"Enter personal information","do":["Country of residence / issuing country: your country","ID: driver's license or passport recommended","Enter your name in English exactly as on your ID, including spelling and order"],"warn":"Check that the last name and first name fields are not swapped.","screen":{"title":"Personal Information","rows":[{"l":"Country/Region of Residence","v":"South Korea"},{"l":"ID Type","v":"Driver's License"},{"l":"First Name / Last Name","v":"GILDONG / HONG","hl":true}],"btn":"Continue"}},
      {"title":"Face verification","do":["Stay in a bright place and avoid backlight.","Remove hat, glasses and mask, and fit your whole face in the frame.","Turn your head or blink as the screen instructs."],"screen":{"k":"face","title":"Face Verification"}},
      {"title":"Approved","do":["Once approved you can trade and deposit or withdraw."],"screen":{"k":"done","title":"Verification complete"}}
    ]}
  ]},
  { "id": "okx", "name": "OKX", "sections": [
    { "id":"signup","title":"Sign up","time":"About 3 minutes", "steps": [
      {"title":"Email + referral code","do":["Open the sign-up link and enter your email.","Check that {CODE} is entered in the Referral code field.","Tap [Sign up]."],"warn":"Sign-ups through Google, Apple or Telegram do not get the referral perks. Be sure to sign up with email.","screen":{"title":"What's your email?","rows":[{"l":"Email address","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Sign up"}},
      {"title":"Email verification","do":["Enter the 6-digit code sent to the email you signed up with."],"screen":{"k":"otp","title":"Enter the 6-digit code"}},
      {"title":"Phone verification","do":["Enter your phone number and tap [Verify now].","Enter the 6-digit code sent by SMS."],"screen":{"k":"form","title":"What's your phone number?","rows":[{"l":"Phone number","v":"+82  010-0000-0000","hl":true}],"btn":"Verify now"}},
      {"title":"Set password","do":["8–32 characters, with at least one lowercase letter, uppercase letter, number and special character.","Tap [Confirm] to finish signing up."],"screen":{"k":"pw","title":"Create password","btn":"Confirm"}}
    ]},
    { "id":"check","title":"Before KYC: check your referral", "steps": [
      {"title":"Open menu","do":["Tap the 9-dot menu at the top left of the app's main screen."],"screen":{"k":"tap","title":"Home screen","btn":"⋮⋮⋮  Menu (top left)"}},
      {"title":"Account settings","do":["Go to [Account settings]."],"screen":{"k":"tap","title":"My profile","btn":"Account settings"}},
      {"title":"Invite perks","do":["Under Account information, tap [Invite perks]."],"screen":{"k":"menu","title":"User Center","items":["UID","Identity verification","Trading fee tier","Invite perks"],"hl":3}},
      {"title":"Check code","do":["If Invite code shows {CODE}, it is applied correctly."],"tip":"Menu names or positions may differ slightly depending on the app version.","screen":{"title":"Your invite perks","rows":[{"l":"Invite code","v":"{CODE}","hl":true}]}}
    ]},
    { "id":"kyc","title":"KYC identity verification","time":"About 5 minutes", "steps": [
      {"title":"Start verification","do":["Log in to the app with the email you signed up with.","Tap [Get verified] in your profile."],"screen":{"k":"tap","title":"Verify your identity","btn":"Get verified"}},
      {"title":"Choose region and ID","do":["Region of residence: your country","Choose one of driver's license, ID card or passport, then [Next]"],"screen":{"title":"Select ID type","rows":[{"l":"Country/region of residence","v":"South Korea"},{"l":"ID type","v":"Driver's license","hl":true}],"btn":"Next"}},
      {"title":"Photograph ID","do":["Photograph the front, then the back."],"tip":"Avoid glare and shadows so every character is clearly visible.","screen":{"k":"id","title":"Check the photo"}},
      {"title":"Selfie verification","do":["Remove mask, glasses and hat and face forward.","Verify your face as instructed."],"screen":{"k":"face","title":"Take a selfie"}},
      {"title":"Review complete","do":["Review usually takes about 2 minutes, and you get a notification when it is done.","Verification is complete when you see 'Identity verified'."],"screen":{"k":"done","title":"Identity verified"}}
    ]},
    { "id":"refchange","title":"Already signed up: request a referral code change","warn":"This lets you change only the referral code without deleting your account. Meeting any one of the conditions below allows the change, so check it before deleting your account.", "steps": [
      {"title":"Check eligibility","do":["Within 7 days of signing up","7–30 days after signing up, total volume ≤ 400,000","30–90 days after signing up, total volume ≤ 500,000","Over 90 days after signing up, volume in the last 90 days ≤ 5,000,000"],"tip":"Meeting any one of the 4 is enough. If none apply, proceed with 'Delete account and sign up again' below."},
      {"title":"Open the change request page","do":["While logged in to OKX, open the request page with the button below. The code is not filled in automatically, and the request is approved after OKX reviews it."],"link":{"label":"Open the OKX invite code change page","href":"https://www.okx.com/bind-channel"}},
      {"title":"Enter invite code and reason","do":["Enter {CODE} in the Invite Code field.","In the Reason for joining field, write the reason for the change in English."],"copy":"Change referral code","screen":{"k":"form","title":"Change invite code","rows":[{"l":"Invite Code","v":"{CODE}","hl":true},{"l":"Reason for joining","v":"Change referral code"}],"btn":"Submit"}},
      {"title":"Verify it applied","do":["When processing is done, follow the 'Check referral applied' steps above and confirm {CODE} appears in Invite perks."],"tip":"Before moving assets, closing an account or changing KYC, check the exchange's latest policy again."}
    ]},
    { "id":"change","title":"If it can't be changed: delete account and sign up again","warn":"Deleting an account is permanent and cannot be undone. Move all your balance first. Check first whether a referral code change request is possible.", "steps": [
      {"title":"Check balance","do":["Make sure total assets are 0 and no coins remain."],"screen":{"k":"form","title":"Total assets","rows":[{"l":"Total assets","v":"0 USDT","hl":true}]}},
      {"title":"Delete menu","do":["Person icon → [Security] → [Close Account]"],"screen":{"k":"menu","title":"Assets","items":["Overview","Security","Verification","Close Account"],"hl":3}},
      {"title":"Set up OTP","do":["If 'Complete the following before closing account' appears, set up the Authenticator app (OTP) first."],"screen":{"k":"tap","title":"Complete the following before closing account","btn":"Turn on authenticator app"}},
      {"title":"Proceed with deletion","do":["Choose a reason","Enter the OTP and email verification codes","Choose [Continue to close]"],"warn":"Tap [Continue to close], not [Freeze instead].","screen":{"k":"tap","title":"Are you sure?","btn":"Continue to close","alt":"Freeze instead"}},
      {"title":"Sign up for a new account","do":["After deletion, sign up again following the 'Sign up' steps above.","Be sure to check the referral code {CODE}."],"screen":{"k":"form","title":"Sign up","rows":[{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Sign up"}}
    ]}
  ]},
  { "id": "bybit", "name": "Bybit", "sections": [
    { "id":"signup","title":"Sign up","time":"About 3 minutes", "steps": [
      {"title":"Start sign-up","do":["Open the sign-up link and tap [Sign Up].","Select your country of residence accurately."],"screen":{"k":"tap","title":"Welcome to Bybit!","btn":"Sign Up","alt":"Log In"}},
      {"title":"Enter account info","do":["Enter an email or phone number you'll keep using.","Agree to the terms and tap [Next]"],"screen":{"k":"form","title":"Create Account","rows":[{"l":"Email","v":"example@email.com"}],"btn":"Next"}},
      {"title":"Check referral code","do":["Enter {CODE} in the Referral Code field."],"warn":"The referral code cannot be changed after signing up.","screen":{"title":"Referral Code (Optional)","rows":[{"l":"Enter referral code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"Enter verification code","do":["Enter the 6-digit code received by email or SMS."],"tip":"If you don't see the email, check your spam folder too.","screen":{"k":"otp","title":"Email Verification"}},
      {"title":"Set password","do":["8–30 characters, with at least one uppercase letter, lowercase letter and number"],"tip":"We recommend a unique password that you don't use on other sites.","screen":{"k":"pw","title":"Set Your Password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC identity verification","time":"About 5 minutes", "steps": [
      {"title":"Verification menu","do":["Profile → [Identity Verification] → [Verify Now]","Start with Standard verification."],"screen":{"k":"menu","title":"Account & Security","items":["Account & Security","Identity Verification","Payment","My Rewards"],"hl":1}},
      {"title":"Choose country and ID","do":["Issuing country: your country","Choose one of ID Card, Driver's License or Passport"],"screen":{"k":"menu","title":"Select ID type","items":["ID Card","Driver's License","Passport"],"hl":0}},
      {"title":"Photograph ID","do":["Place the original on a plain background and photograph it in a bright place."],"tip":"Name, date of birth and photo must be clear, with no glare, blur or cropping.","screen":{"k":"id","title":"Proof of Identity"}},
      {"title":"Face verification","do":["Fit your whole face in the frame and remove your hat and mask."],"screen":{"k":"face","title":"Facial Recognition"}},
      {"title":"Review complete","do":["Verification is complete when Identity Verification status changes to Verified."],"screen":{"k":"done","title":"Verified"}}
    ]},
    { "id":"check","title":"Already signed up: request referral registration","warn":"You can apply only if your current account has no referrer registered.", "steps": [
      {"title":"Write the email","do":["To: support@bybit.com","Subject: Bybit referral change request"],"screen":{"k":"mail","to":"support@bybit.com","subj":"Bybit referral change request"}},
      {"title":"Paste the text","do":["Copy and paste the text below, then fill in the blanks."],"copy":"I agree to register the referral code.\nSign-up email or phone number: \nUID: \nReferral code to be assigned: {CODE}"},
      {"title":"Check and send","do":["Check that the email, phone number, UID and referral code are correct, then send."],"screen":{"k":"tap","title":"New email","btn":"Send"}}
    ]},
    { "id":"change","title":"Already signed up: move KYC to a new account", "steps": [
      {"title":"Create a new account","do":["Create a new account with an email and phone number you haven't used before.","Enter referral code {CODE}."],"screen":{"k":"form","title":"Sign up for a new account","rows":[{"l":"Referral Code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"Existing account menu","do":["In the existing account: person icon → [Account & Security]"],"screen":{"k":"menu","title":"My account","items":["Account & Security","My Fee Rates","My Rewards"],"hl":0}},
      {"title":"Start KYC transfer","do":["Under Identity Verification, tap [Verify Now]","[Identity Transfer] → [Facial Verification]"],"screen":{"k":"tap","title":"Identity Verification","btn":"Identity Transfer"}},
      {"title":"Face verification","do":["Turn your face as instructed to verify, then tap [Continue]"],"screen":{"k":"face","title":"Facial Verification"}},
      {"title":"Enter new account","do":["Enter the new account's email or phone number and tap [Continue]"],"screen":{"k":"form","title":"KYC transfer","rows":[{"l":"New account email or phone number","v":"new@email.com","hl":true}],"btn":"Continue"}}
    ]}
  ]},
  { "id": "bitget", "name": "Bitget", "sections": [
    { "id":"signup","title":"Sign up","time":"About 3 minutes", "steps": [
      {"title":"Sign-up info + referral code","do":["Open the sign-up link and enter your email or phone number.","Check that {CODE} is in the Referral code field.","Tick the 18-or-older box and tap [Next]"],"screen":{"title":"Welcome to Bitget","rows":[{"l":"Email/Mobile","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"Enter verification code","do":["Email sign-up → code sent by email; phone sign-up → code sent by SMS. Enter it and tap [Confirm]"],"screen":{"k":"otp","title":"Security verification","btn":"Confirm"}},
      {"title":"Set password","do":["8–32 characters, with at least one number, uppercase letter and special character"],"screen":{"k":"pw","title":"Set password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC identity verification","time":"About 5 minutes", "steps": [
      {"title":"Start verification","do":["Top-left person icon → [Verify] → [Verify now]"],"screen":{"k":"tap","title":"Complete identity verification","btn":"Verify now"}},
      {"title":"Choose ID type","do":["Country of residence / issuing country: your country","ID type: ID card recommended (driver's license or passport also OK)"],"screen":{"k":"menu","title":"Select ID type","items":["ID card","Driver's license","Passport"],"hl":0}},
      {"title":"Photograph ID","do":["Photograph the front, then the back."],"tip":"Show the whole ID, without shake or glare.","screen":{"k":"id","title":"Verify ID card"}},
      {"title":"Face verification","do":["In a bright place, remove hat, mask and sunglasses and face forward.","Move slowly as instructed."],"screen":{"k":"face","title":"Face verification"}},
      {"title":"Approved","do":["Your account is activated once the review is done."],"screen":{"k":"done","title":"KYC verification complete"}}
    ]},
    { "id":"change","title":"Already signed up: release KYC and make a new account","warn":"Phone-number sign-ups are limited to 1 account in your own name.", "steps": [
      {"title":"Prepare information","do":["Existing account UID, registered email, registered phone number, original ID"],"screen":{"k":"check","title":"What to prepare","items":["Existing account UID","Registered email","Registered phone number","Original ID"]}},
      {"title":"Photograph proof","do":["Photograph your ID together with a paper reading “KYC removal request” in a single frame","Capture a screenshot of your coin holdings and your account assets"],"screen":{"k":"id","title":"ID + request paper","paper":"KYC removal request"}},
      {"title":"Send the email","do":["Attach the prepared information and photos and send them to support@bitget.com."],"tip":"It is usually released within 3 days.","screen":{"k":"mail","to":"support@bitget.com","subj":"KYC removal request","attach":true}},
      {"title":"Confirm release","do":["Log in to your existing account and tap the person icon.","unverified = released / verified = still processing"],"screen":{"k":"form","title":"My info","rows":[{"l":"Verification status","v":"unverified","hl":true}]}},
      {"title":"Create new account","do":["Create a new account with a different email and enter referral code {CODE}.","Complete KYC identity verification on the new account."],"screen":{"k":"form","title":"Sign up for a new account","rows":[{"l":"Email","v":"new@email.com"},{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Next"}}
    ]}
  ]}
];



var REFCHECK = [
  { id: "okx", summary: "You can check it yourself in the app in a minute.",
    steps: ["Open the 9-dot menu at the top left of the OKX app home screen.", "Tap Account settings.", "In the Account information list, tap Invite perks.", "Look at the code in the Invite code field."],
    ok: "If the Invite code is {CODE}, the account is correctly registered through the dodogas referral.",
    note: "Menu names or positions may change slightly with app updates." },
  { id: "bybit", summary: "You can see the linked referral code on your account information screen.",
    steps: ["Log in to Bybit.", "Go to Profile → Account.", "On the Account Info tab, open Affiliate Code.", "Check the linked Affiliate ID."],
    note: "Depending on the referrer's privacy setting, the ID may appear hidden. If you're unsure, send us your UID and we'll check for you." },
  { id: "binance", summary: "It's hard to check directly on screen. Just send your UID and dodogas will check for you.",
    ask: ["Exchange name (Binance)", "My UID (copy from the profile screen)", "Sign-up date (approximate is fine)"] },
  { id: "bitget", summary: "It's hard to check directly on screen. Just send your UID and dodogas will check for you.",
    ask: ["Exchange name (Bitget)", "My UID (copy from the top-left person icon)", "Sign-up date (approximate is fine)"] }
];


var FAQ = [
  { q: "When does the payback arrive?", a: "Payout timing differs by exchange.",
    list: ["OKX: paid roughly hourly", "TetherMax: see homepage"],
    note: "※ Actual payout time may vary depending on the exchange's processing and each member's conditions." },
  { q: "Can accounts I already have get the perks?", a: "Yes. Even an existing account can be switched to one with the dodogas referral code, depending on the exchange's method. Methods differ by exchange, so choose your exchange below and follow the steps in order.",
    links: [
      { label: "OKX · Request referral code change", href: "guides.html#okx-refchange" },
      { label: "OKX · Delete account and sign up again", href: "guides.html#okx-change" },
      { label: "Bitget · Release KYC and make a new account", href: "guides.html#bitget-change" },
      { label: "Bybit · Move KYC to a new account", href: "guides.html#bybit-change" }
    ] },
  { q: "How does my membership tier change?", a: "Membership tiers depend on your subscription level and trading volume criteria. See the VIP level-up criteria below for details.",
    links: [
      { label: "View VIP level-up criteria", href: "vip.html" },
      { label: "View boards by membership", href: "membership.html" }
    ] }
];



var HIDDEN_EXCHANGES = [];

var EXCHANGE_ORDER = ["binance", "okx", "bitget", "bybit", "tethermax"];
var ALL_EXCHANGES = EXCHANGES, ALL_GUIDES = GUIDES, ALL_REFCHECK = REFCHECK;
(function () {
  function keep(x) { return HIDDEN_EXCHANGES.indexOf(x.id) < 0; }
  function byOrder(a, b) {
    var i = EXCHANGE_ORDER.indexOf(a.id), j = EXCHANGE_ORDER.indexOf(b.id);
    return (i < 0 ? 99 : i) - (j < 0 ? 99 : j);
  }
  EXCHANGES = EXCHANGES.filter(keep).sort(byOrder);
  GUIDES = GUIDES.filter(keep).sort(byOrder);
  REFCHECK = REFCHECK.filter(keep).sort(byOrder);
})();
