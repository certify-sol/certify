// import Arweave from 'arweave';
const Arweave = require('arweave');

const ar = Arweave.init({ host: 'arweave.net' });

const arKey = {
  kty: 'RSA',
  n: 'm5DCI4u6r9MU5E0dLyY_k-gX1LEVv1KtQMcWkp0gNs2_tLIDJdWmctW5XjkWKnaQGuF4Akr61VzQIIFNuelcJ4ieecRhWAg2NiL15yeAamY8v068iQTVFn2PXAJqFTHrcpaGTld-3BBC2QrWlelC1IeIaL5abk-wCoMpwUh9U5xgwB_56gQDJZtaZJlTdqXMlZYkfz1fmgC4FrGUmUkQcCSpBpL6HqsIOOZjSJWRmbsAKe9K-jq6OwU-AFB6Iqefyl519TcF2aEN0vWdL4QOVbCQ-l5N3Av_4wUIAgAbPMZ-YC5MgZUwQS7G7BViWCpnpJqxNB5zHCgmq0srL1I7VLjxcFtf009fQsN_ck5pBUlaSoxM4Y3R4L2bM9nD1GmHvLbRIlsdMUXGZOdiI9mwMkBtKf4F2UoMqaucuMG5UJPWzg8B9U_FXDuS5pWdOBT9VJCjcCtiFwdOLVJPiFd6hj5szYg7LhRRCGNQUpjf5RhSvmJ0M_9K0XNsHV8NtegDepyNbAPnLW166WF961pqA7bXwjF7soIJ6d9Sb4AS1zQCxj4cmOV4Bwg9v-Hctl_EELMvCGxp9a5prt8x9DHyUyW6g-ambW_iMEy6ZDa23fEiE-zmM_XYa8tWevvgQFnNFso78V1icMFBsQ28Odv2_gLGTKUNU-L9flJItJe0Ho0',
  e: 'AQAB',
  d: 'DyCrkFNVKyXmoTDShrQ8eICYWKmDyOAcUvFJQ6ad7FZjrwmkfrhhAEfCR-RbQHPZHZQRXH-4Fql438BTM6H6wSlq58JuCOZ7hxYtPXY86ZvZimz4roZWxmIdX8AoWrlJARKcKuAdSP8X0Q1Zwqg1RH-Nh0oDdziukMcid1Y6QbgyPFyfq98KA00xJBk44Y_L7jv0fp8UPeCWBjbskV9mhtE50pbWVcch_I6C1xscVou1v14yt1SgqX6gAd3Rkq8kPcSjyd245unfc0VJLMa1siWCY6ZqAdz03DmwBqnF_En9HhNCg1NjpuMKmwiVUKeG_p3AX6YaYYGSCRQ9NdPUSwkEtNXxPvvgy2361NW3DUEQaiYRYTnJ4DWfH0ioj2SHJ74IMMYkm032EJjHQEqzAJE_H2FoMv0LhF4VUX40ahulKLHC3p0h5N6u2MMvh1fUXhqQCPQPq0xu2Agt2Y_e-E0_teglBa1ty_SpER_CUoyLzKXL9NtO_Z89IOGIXRkom4Nzv1EuAp_su5D8btGxH8H2tnhJ-3troOxpfSSXGJwo78ZSyI-3IwgtBT_4ucyyofB_UoXZ6rg5O-7Dm5M-nMi_Cw5-_W6PmwTbyG-uextRhjP7XxD_stks4bb_WoEgorpJIhhsQoIa5Frz-8yoC_DajqL15EljjoJNqRQ-vyE',
  p: 'yUFbd91e4nSJEtg7h6GIWmzv3h0j4h6eXorIwuptJ6H-c5ZX8guny4k0IcPI_m7IxZJZeXHpcEJf--q5GoNt4HMo1xWuj_DVI-ZlPWkHp8_1jgaKjyGQj1q6V7b3rYZ51C1hbry4TfbLtCk_m8AGarMrpgEXTO4933Bs4CyQTwKdRzxF1H_E-5gSnV0LYWjp-W4j8DUBrCb3jZmQYJrJxRi8bNBEL1s8tP73ruvCLXGhyRF5rDfLZXpaiOpZe6jzALGP_actS5Qjg4B0kHoX6HhlkmOaExytyJ59FkxD2VNYwdV-W_xQ_cq4zP3LcfeeQ9ISiPZTbLkyxo_7mOa0RQ',
  q: 'xeG8podwUrw8ps0Z6bDp_R7LVh0hceRtQJo0EN7ItHqZs2z4WdQ4btDpURfTFe5pROEi2BEhFrT7QFuxBUA8mPy3sxmc1Rl_o1B1iI5jd6xPL61tDtSdmiEksAvSWifHotiVCcAapwBShJy9O-Q0r7K56ubGHvIhU66PKygPkFauAuD3Eb7nqgdVT61a93CiEk_aJcg00PDzrvBdDQ_N_tHHU6ArURkva039ORaPy8rLqRxaCpzAg1fYF8tjAMDWoVOD5WFEVmULM2b0SlU-ypNdto41SVXrNNIlgjx6IfOAdMhyipA5dRP5Q2vu4_VOwht-N2JE-tUR6IGYQtD5qQ',
  dp: 'tssTDhLV7K9WFPSrVSyFUURitYYYIngW9d3uLQOJsxayqz-hj2nAtOBgpk5Sj64F01VyyRiKo3jV_1SZXZiEQvm13W2HCJwAq0PHLnjoCCadbKtKTGh7CYmpeKPp4AUlQG8bcN4eNEn1iSRx7sAB1AX6niOdizVUo05UxWQUin7gZWQ8NJ78RlxAhAePn6EP6op8P9-VLkySSl1xQh01KDyoX9jmJXEj-W0fgBQIYQg1nw-tSJvAtOHluzfHoMa6OCYOl5-xR1U80GLq_JK4hmBcORMYTUWeHnq9OHR6p7jJA_0qcNgCpBDtutrFXzU93XG_fgDlkvm_QZRjO-RHVQ',
  dq: 'raCEhxoP1IiWL0WHlyVEKnT6tXSaA_UKZ8TmKmdQdAufEXBr-WXcnl9wWVcuP_ARLf7dM_jTr7jdPHs3uAPFJ_eWt--hTNoyxHm0pz1IyZjHYm4pYvnrz3GFX3L__1soMBsZqpSEzkPaI8HjyMlT8VZBC3uyGzUZSPPBa3ybK2rjBGOgZlG7s9T7Zg4V40dQ7gBiyQQCU9MX_kepXeygMxaebyH64A3ZLa4gohbJ1Wb7jEb0OpuPz68kTLyJAgAyUxuUf4_5BlVinpeXgiGKFvV3JNdiqhZZat95Se0GvQOLkuzOlAY4ZCJCdIYf9qUnlenJtY7kN7L9I6WSlA4JAQ',
  qi: 'fJ83knI5U0DXJKcBZ2m3hUz3hKdrhYANDOI3y0SAIGvnknKsU1BEv6NIaysmehZ-dOjkLv74H8mAQMb7vKoXcnPawjZ4xW8IiZAl72wAUerCQQ0BwIj1HmOPZ_atP0ge9cLE9keWFqdxdmm0I7wLE-_lpPOl8O2zJuCLg2wX6ZkxKxNeB-Ur9zvfrmrX-_r_JmxAu5-cMlE18RRaNPXP2I5x0V4ctoTzgok_B4xqTfOh5iDzvxncoq5DAGIg2Hp3vhSDCFMmWvwzf8EpiXjLoKB9ykrXMlREtrrS5vvrGoguZUUSyrm9SVGIlT0ZFUvUH4ViYX5HBMoCWRyHb1qWog',
};

// ar.wallets.generate().then((key) => console.log(key));

ar.wallets.jwkToAddress(arKey).then((addr) => {
  console.log({ addr });

  ar.wallets.getBalance(addr).then((bal) => console.log({ bal }));
});

ar.createTransaction(
  {
    data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>',
  },
  arKey
).then(console.log);
