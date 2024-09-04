import mongoose from "mongoose";

//  Schema create
const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLenght: [2, "Name must contain At Least 2 characters!"],
  },
  subject: {
    type: String,
    minLenght: [2, "Subject must contain At Least 2 characters!"],
  },
  message: {
    type: String,
    minLenght: [2, "Message must contain At Least 2 characters!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Message = mongoose.model("Message", messageSchema);
