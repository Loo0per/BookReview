import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;  // Make sure this line is present