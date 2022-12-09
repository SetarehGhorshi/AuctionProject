package keeper

import (
	"context"
	"fmt"

	"CarAuction/x/car/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PlaceBid(goCtx context.Context, msg *types.MsgPlaceBid) (*types.MsgPlaceBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	bid := msg.BidValue
	if bid <= 0 {
		panic(fmt.Errorf("invalid bid value!"))
	}
	k.Keeper.SetBid(ctx, int(bid), msg.Creator)

	_ = ctx

	return &types.MsgPlaceBidResponse{}, nil
}
