package keeper

import (
	"context"

	"CarAuction/x/car/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) HighestPerHundredAll(c context.Context, req *types.QueryAllHighestPerHundredRequest) (*types.QueryAllHighestPerHundredResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var highestPerHundreds []types.HighestPerHundred
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	highestPerHundredStore := prefix.NewStore(store, types.KeyPrefix(types.HighestPerHundredKey))

	pageRes, err := query.Paginate(highestPerHundredStore, req.Pagination, func(key []byte, value []byte) error {
		var highestPerHundred types.HighestPerHundred
		if err := k.cdc.Unmarshal(value, &highestPerHundred); err != nil {
			return err
		}

		highestPerHundreds = append(highestPerHundreds, highestPerHundred)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHighestPerHundredResponse{HighestPerHundred: highestPerHundreds, Pagination: pageRes}, nil
}

func (k Keeper) HighestPerHundred(c context.Context, req *types.QueryGetHighestPerHundredRequest) (*types.QueryGetHighestPerHundredResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	highestPerHundred, found := k.GetHighestPerHundred(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetHighestPerHundredResponse{HighestPerHundred: highestPerHundred}, nil
}
