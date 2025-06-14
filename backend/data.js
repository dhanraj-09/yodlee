data={
    "provider": [
        {
            "PRIORITY": "COBRAND",
            "id": 7634,
            "name": "Custom Bank",
            "loginUrl": "https://www.customsite.com",
            "baseUrl": "http://www.yodleecustom.com",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_Default.SVG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "lastModified": "2024-12-24T08:40:09Z",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "insurance",
                                "investment"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "insurance",
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "INSURANCE": {
                                    "numberOfTransactionDays": 90
                                },
                                "LOAN": {
                                    "numberOfTransactionDays": 90
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                },
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "insurance",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16441,
            "name": "Dag Site",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "https://dag2.yodlee.com/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_16441.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16441_1_2.SVG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:37:19Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "insurance",
                                "investment"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "insurance",
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "INSURANCE": {
                                    "numberOfTransactionDays": 90
                                },
                                "LOAN": {
                                    "numberOfTransactionDays": 90
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 365
                                },
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "insurance",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16442,
            "name": "Dag Site Multilevel",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16442_1_2.SVG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:43:14Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "investment"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                },
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16445,
            "name": "Dag Site TokenFMPA",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16445_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:40:42Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": false,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "insurance",
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "insurance"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "insurance"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "INSURANCE": {
                                    "numberOfTransactionDays": 90
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "insurance",
                                "bank"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "insurance",
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16446,
            "name": "Dag Site TokenPMPA",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16446_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:40:31Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "LOAN": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "loan",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16447,
            "name": "Dag Site TokenPMPS",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16447_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:42:26Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "investment"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "investment"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "investment"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "investment"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16477,
            "name": "DagSIteMFAAndNonMFA",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16477_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:42:50Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "reward",
                                "bank"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "reward",
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16486,
            "name": "Dag Site SecurityQA",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_16486.PNG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16486_1_2.SVG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-06-03T23:43:58Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        }
                    ]
                },
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 16487,
            "name": "Dag Site (no account summary)",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_16487_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2024-12-15T09:32:58Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "bank",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 18769,
            "name": "Dag Site Captcha",
            "loginUrl": "http://64.14.28.129/dag/index.do",
            "baseUrl": "http://64.14.28.129/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_18769_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2024-12-15T11:56:57Z",
            "forgetPasswordUrl": "http://64.14.28.129/dag/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 19335,
            "name": "Dag OAuth",
            "loginUrl": "https://dag2.yodlee.com/dag/tokenlogin.do",
            "baseUrl": "http://dag2.yodlee.com/dag/index.do",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_19335_1_2.SVG",
            "status": "Supported",
            "isConsentRequired": true,
            "authType": "OAUTH",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2025-05-09T21:37:00Z",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "authParameter": [
                "authResponse"
            ],
            "dataset": [
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "insurance",
                                "investment"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "insurance",
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "INSURANCE": {
                                    "numberOfTransactionDays": 90
                                },
                                "LOAN": {
                                    "numberOfTransactionDays": 90
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                },
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 90
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "insurance",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "insurance",
                                "reward",
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 22013,
            "name": "IQ Bank",
            "loginUrl": "https://iqbank.yodlee.com/iqbank/index.do",
            "baseUrl": "https://iqbank.beta.yodlee.com/pfm3/home",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_22013.PNG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_22013_1_1.PNG",
            "status": "Supported",
            "isConsentRequired": false,
            "authType": "MFA_CREDENTIALS",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "US",
            "lastModified": "2024-06-28T13:29:00Z",
            "forgetPasswordUrl": "https://iqbank.yodlee.com/iqbank/index.do",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "capability": [
                {
                    "name": "CHALLENGE_DEPOSIT_VERIFICATION",
                    "container": [
                        "bank"
                    ]
                }
            ],
            "dataset": [
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "HOLDINGS",
                            "container": [
                                "investment"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "loan",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "LOAN": {
                                    "numberOfTransactionDays": 365
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 365
                                },
                                "INVESTMENT": {
                                    "numberOfTransactionDays": 365
                                },
                                "CREDITCARD": {
                                    "numberOfTransactionDays": 365
                                }
                            },
                            "container": [
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "loan",
                                "bank",
                                "investment",
                                "creditCard"
                            ]
                        }
                    ]
                },
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "PRIORITY": "COBRAND",
            "id": 33062,
            "name": "CDR Sandbox",
            "loginUrl": "https://dr.cdrsandbox.gov.au/",
            "baseUrl": "https://dr.cdrsandbox.gov.au/",
            "favicon": "https://d1id6p0py4hgs9.cloudfront.net/FAVICON/FAV_Default.SVG",
            "logo": "https://d1id6p0py4hgs9.cloudfront.net/LOGO/LOGO_Default.SVG",
            "status": "Supported",
            "isConsentRequired": true,
            "authType": "OAUTH",
            "languageISOCode": "EN",
            "primaryLanguageISOCode": "EN",
            "countryISOCode": "AU",
            "lastModified": "2025-01-30T10:01:00Z",
            "isAutoRefreshEnabled": true,
            "isTanSupported": false,
            "dataset": [
                {
                    "name": "ACCT_PROFILE",
                    "attribute": [
                        {
                            "name": "FULL_ACCT_NUMBER",
                            "containerAttributes": {
                                "BANK": {
                                    "fullAccountNumberFields": [
                                        "paymentAccountNumber"
                                    ]
                                }
                            },
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "BANK_TRANSFER_CODE",
                            "container": [
                                "bank"
                            ]
                        },
                        {
                            "name": "HOLDER_NAME",
                            "container": [
                                "bank"
                            ]
                        }
                    ]
                },
                {
                    "name": "BASIC_AGG_DATA",
                    "attribute": [
                        {
                            "name": "ACCOUNT_DETAILS",
                            "container": [
                                "loan",
                                "bank"
                            ]
                        },
                        {
                            "name": "STATEMENTS",
                            "container": [
                                "loan"
                            ]
                        },
                        {
                            "name": "TRANSACTIONS",
                            "containerAttributes": {
                                "LOAN": {
                                    "numberOfTransactionDays": 90
                                },
                                "BANK": {
                                    "numberOfTransactionDays": 90
                                }
                            },
                            "container": [
                                "loan",
                                "bank"
                            ]
                        },
                        {
                            "name": "BASIC_ACCOUNT_INFO",
                            "container": [
                                "loan",
                                "bank"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

data.provider.forEach(provider => {
    console.log(`${provider.name} (ID: ${provider.id}) supports $
 {provider.dataset.length} datasets.`);
});

