import mongoose from 'mongoose';

// A schema for a comment with fields for user ID, user full name, content, and timestamp.
const CommentSchema = new mongoose.Schema({
    /* Implementation for UserId or UserName required */
    userId: mongoose.Schema.Types.ObjectId,
    userFullName: String,
    content: String,
    timestamp: Date,
});

// A schema for a news article with various fields.

const NewsArticleSchema = new mongoose.Schema({
    title: String,
    link: String,
    keywords: [String],
    creator: [String],
    video_url: String,
    description: String,
    content: String,
    pubDate: String,
    image_url: String,
    source_id: String,
    category: [String],
    country: [String],
    language: String,
    summary: String, // Field to store the summary generated by GPT-3
    likes: { type: Number, default: 0 }, // Field to store the number of likes
    likedBy: [mongoose.Schema.Types.ObjectId], // Array of user IDs who have liked the article
    bookmarkedBy: [mongoose.Schema.Types.ObjectId], // Array of user IDs who have bookmarked the article
    comments: [CommentSchema], // Field to store the comments
    shares: { type: Number, default: 0 }, // Field to store the number of shares
}, { collection: 'news' }); // Specify the custom collection name 'news'

const NewsArticleModel = mongoose.model('NewsArticle', NewsArticleSchema);

export default NewsArticleModel;
