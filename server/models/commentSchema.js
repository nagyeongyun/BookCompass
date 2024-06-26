const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Comment", CommentSchema);
