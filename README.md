[User]
  |
  |--- Calls ---> [dodoFlashLoan]
                   |
                   |--- Encodes data (FlashCallbackData) with loan details
                   |
                   |--- Initiates Flash Loan ---> [DODO Protocol]
                                                   |
                                                   |--- Provides loan
                                                   |--- Calls ---> [_flashLoanCallBack]
                                                                   |
                                                                   |--- Decodes FlashCallbackData
                                                                   |
                                                                   |--- Verifies receipt of loan amount
                                                                   |
                                                                   |--- Invokes ---> [routeLoop]
                                                                                      |
                                                                                      |--- Iterates over routes
                                                                                      |    |
                                                                                      |    |--- Calculates amount per route
                                                                                      |    |
                                                                                      |    |--- Invokes ---> [hopLoop]
                                                                                      |                         |
                                                                                      |                         |--- Iterates  over hops in route
                                                                                      |                         |    |
                                                                                      |                         |    |--- Selects protocol ---> [pickProtocol]
                                                                                      |                         |    |       |
                                                                                      |                         |    |       |--- Executes token swap (UniswapV3, UniswapV2, DODOV2)
                                                                                      |                         |    |       |
                                                                                      |                         |    |       |--- Returns swapped amount
                                                                                      |                         |
                                                                                      |                         |--- Updates amount for next hop
                                                                   |
                                                                   |--- Verifies ability to repay loan
                                                                   |
                                                                   |--- Repays Flash Loan to [DODO Protocol]
                                                                   |
                                                                   |--- Transfers any profit to [Contract Owner]# FlashLoanArbitrage
