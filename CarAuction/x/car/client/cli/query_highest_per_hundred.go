package cli

import (
	"context"
	"strconv"

	"CarAuction/x/car/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListHighestPerHundred() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-highest-per-hundred",
		Short: "list all highestPerHundred",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllHighestPerHundredRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.HighestPerHundredAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowHighestPerHundred() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-highest-per-hundred [id]",
		Short: "shows a highestPerHundred",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetHighestPerHundredRequest{
				Id: id,
			}

			res, err := queryClient.HighestPerHundred(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
