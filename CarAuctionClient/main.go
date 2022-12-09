package main

import (
	"context"
	"fmt"
	"testing"

	"carauction/x/car/types"
	"log"
	"math/rand"
	"time"

	"github.com/ignite/cli/ignite/pkg/cosmosclient"
	"github.com/stretchr/testify/require"
)

func main() {

	addressPrefix := "cosmos"

	cosmos, err := cosmosclient.New(
		context.Background(),
		cosmosclient.WithAddressPrefix(addressPrefix),
	)
	if err != nil {
		log.Fatal(err)
	}

	accountName := "alice"

	account, err := cosmos.Account(accountName)
	if err != nil {
		log.Fatal(err)
	}

	addr, err := account.Address(addressPrefix)
	if err != nil {
		log.Fatal(err)
	}
	// Random generators
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)

	// Sending bids until reaching a multiplication of 100 blocks
	j := 0
	max := int32(0)
	fmt.Print("\n\nTesting car auction functionality...\n\n")
	for i := 0; i < 1000; i++ {

		bid := int32(r1.Intn(100) + 1)
		if bid > max {
			max = bid
		}
		msg := &types.MsgPlaceBid{
			Creator:  addr,
			BidValue: bid,
		}

		txResp, err := cosmos.BroadcastTx(context.Background(), account, msg)
		if err != nil {
			log.Fatal(err)
		}
		if i == 0 {
			j = int(txResp.Height / 100)
		}
		if int(txResp.Height) > 100*(j+1) {
			break
		}
	}

	// Verifying the highest bid
	queryClient := types.NewQueryClient(cosmos.Context())

	queryResp, err := queryClient.HighestPerHundredAll(context.Background(), &types.QueryAllHighestPerHundredRequest{})
	if err != nil {
		log.Fatal(err)
	}
	winner := queryResp.HighestPerHundred[j].Value
	require.Equal(&testing.T{}, winner, max)

	// Verifying that invalid bid would not be accepted.
	msg := &types.MsgPlaceBid{
		Creator:  addr,
		BidValue: 0,
	}

	txResp, err := cosmos.BroadcastTx(context.Background(), account, msg)
	require.NotNil(&testing.T{}, err)
	_ = txResp

	fmt.Print("\n\nPASS!\n\n")

}
