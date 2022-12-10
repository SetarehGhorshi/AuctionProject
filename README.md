# AuctionProject

## CarAuction
The auction functionality has been added to the underlying blockchain by defining a custom module named `car`. We also add a message type called `PlaceBid` which is used to place a bid in the auction. The message goes through the handler to the keeper to update the state. We implemented the handler to check the validity of the bid and make sure that its value is higher than 0. We also implemented a function in the keeper, `SetBid`, to check if the new bid is higher than the previous highest bid which is stored in a map variable, and then set the new highest bid if required. 

In order to get the highest bid in every 100 blocks, we used the `EndBlock` function which is automatically called at the end of each block. In this function, we check the height of the block and if the block height is a multiplication of 100, we set the current highest bid as the winning bid for that 100 block epoch (we maintain a list of winning bids for the 100 block epochs which can be read through a query) and reset the highest bid to 0 for the next period. 

### Instructions to build and run
```bash
cd CarAuction
PATH=$PATH:$(go env GOPATH)/bin
ignite c serve -r
```
## CarAuctionClient

We implemented a separate project to test the functionality of the auction module as a client. This simple test connects to the chain and uses an account (Alice's account which is a sample account generated when creating the chain) to send randomly generated bids to the chain (the maximum value is also stored locally to later validate the output from the chain). The current block number is being checked when sending the first bid. As the block number reaches the next multiplication of 100, we send a query to get the winning bid for that epoch. Finally, we check if the winning bid from the chain is equal to the maximum locally stored bid value.

We also added a case where an invalid bid (zero or negative value) is sent to the chain to make sure that it will result in an error.

### Instructions to run the test
First you need to start the chain using the above instruction. Then, from the main directory, follow these commands:

```bash
cd CarAuctionClient 
PATH=$PATH:$(go env GOPATH)/bin
go run main.go
```
