package keeper

import (
	"context"
	"fmt"

	"CarAuction/x/car/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateHighestPerHundred(goCtx context.Context, msg *types.MsgCreateHighestPerHundred) (*types.MsgCreateHighestPerHundredResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var highestPerHundred = types.HighestPerHundred{
		Creator: msg.Creator,
		Value:   msg.Value,
		Period:  msg.Period,
	}

	id := k.AppendHighestPerHundred(
		ctx,
		highestPerHundred,
	)

	return &types.MsgCreateHighestPerHundredResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateHighestPerHundred(goCtx context.Context, msg *types.MsgUpdateHighestPerHundred) (*types.MsgUpdateHighestPerHundredResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var highestPerHundred = types.HighestPerHundred{
		Creator: msg.Creator,
		Id:      msg.Id,
		Value:   msg.Value,
		Period:  msg.Period,
	}

	// Checks that the element exists
	val, found := k.GetHighestPerHundred(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetHighestPerHundred(ctx, highestPerHundred)

	return &types.MsgUpdateHighestPerHundredResponse{}, nil
}

func (k msgServer) DeleteHighestPerHundred(goCtx context.Context, msg *types.MsgDeleteHighestPerHundred) (*types.MsgDeleteHighestPerHundredResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetHighestPerHundred(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveHighestPerHundred(ctx, msg.Id)

	return &types.MsgDeleteHighestPerHundredResponse{}, nil
}
