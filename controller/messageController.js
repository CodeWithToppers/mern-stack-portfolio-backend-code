import { catchAsyncErrors } from "./../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
// before it create message schema
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message } = req.body;
  if (!senderName || !subject || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const data = await Message.create({ senderName, subject, message });
  res.status(200).json({
    success: true,
    message: "Message Sent.",
    data,
  });
});
// to test above model, we create its route in router folder

export const getAllMessage = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message does not Exist!", 400));
  }
  await message.deleteOne();
  res.status(200).json({
    success: true,
    message: "Message Deleted Successfully",
  });
});
