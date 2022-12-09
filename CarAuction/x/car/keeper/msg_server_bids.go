package keeper

import (
	"context"

	"CarAuction/x/car/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateBids(goCtx context.Context, msg *types.MsgCreateBids) (*types.MsgCreateBidsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBids(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var bids = types.Bids{
		Creator: msg.Creator,
		Index:   msg.Index,
		Bid:     msg.Bid,
		Bidder:  msg.Bidder,
	}

	k.SetBids(
		ctx,
		bids,
	)
	return &types.MsgCreateBidsResponse{}, nil
}

func (k msgServer) UpdateBids(goCtx context.Context, msg *types.MsgUpdateBids) (*types.MsgUpdateBidsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBids(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var bids = types.Bids{
		Creator: msg.Creator,
		Index:   msg.Index,
		Bid:     msg.Bid,
		Bidder:  msg.Bidder,
	}

	k.SetBids(ctx, bids)

	return &types.MsgUpdateBidsResponse{}, nil
}

func (k msgServer) DeleteBids(goCtx context.Context, msg *types.MsgDeleteBids) (*types.MsgDeleteBidsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBids(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBids(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteBidsResponse{}, nil
}
