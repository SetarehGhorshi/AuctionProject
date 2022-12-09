import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateHighestPerHundred } from "./types/carauction/car/tx";
import { MsgUpdateBids } from "./types/carauction/car/tx";
import { MsgCreateBids } from "./types/carauction/car/tx";
import { MsgDeleteBids } from "./types/carauction/car/tx";
import { MsgPlaceBid } from "./types/carauction/car/tx";
import { MsgCreateHighestPerHundred } from "./types/carauction/car/tx";
import { MsgDeleteHighestPerHundred } from "./types/carauction/car/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/carauction.car.MsgUpdateHighestPerHundred", MsgUpdateHighestPerHundred],
    ["/carauction.car.MsgUpdateBids", MsgUpdateBids],
    ["/carauction.car.MsgCreateBids", MsgCreateBids],
    ["/carauction.car.MsgDeleteBids", MsgDeleteBids],
    ["/carauction.car.MsgPlaceBid", MsgPlaceBid],
    ["/carauction.car.MsgCreateHighestPerHundred", MsgCreateHighestPerHundred],
    ["/carauction.car.MsgDeleteHighestPerHundred", MsgDeleteHighestPerHundred],
    
];

export { msgTypes }