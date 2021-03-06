import { Schema, model } from "mongoose";

const consignmentSchema: Schema = new Schema(
    {
        "id": { type: String, required: true },
        "userId": { type: String, required: true },
        "consignmentId": { type: String, required: true },
        "deliveryLocation": { type: [Number], required: true },
        "senderLocation": { type: [Number], required: true },
        "consignmentStateUpdated": { type: [Date] },
        "consignmentEntryCreated": { type: Date, default: Date.now },
        "state": {
            type: String,
            enum: ['processing_order', 'order_accepted', 'order_rejected', 'being_prepared', 'shipped', 'out_for_delivery', 'delivered', 'order_cancelled',
                "en_route_to_sender", "waiting_at_sender", "en_route_to_recipient", "delivered", "unsuccesful"],
            default: 'order_accepted'
        },
    });

export const consignmentModel = model('feods-consignment', consignmentSchema);