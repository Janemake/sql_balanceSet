import {SubstrateEvent} from "@subql/types";
import {timestamp, eventId} from "./globalFunction";
import {BalanceSet} from "../types/models";

import {Balance} from "@polkadot/types/interfaces";

export async function handleBalanceSet(event: SubstrateEvent): Promise<void> {

    const {event: {data: [from,free, lock]}} = event;

    const addressFrom = from.toString();
    const freeBalance = (free as Balance).toBigInt();
    const lockBalance = (lock as Balance).toBigInt();

    const element = new BalanceSet(eventId(event));

    element.timestamp = timestamp(event.block);
    element.accountSet = addressFrom;
    element.freeAmount = freeBalance;
    element.reservedAmount = lockBalance;

    await element.save();
    logger.info('Balance set for' + from);
}
