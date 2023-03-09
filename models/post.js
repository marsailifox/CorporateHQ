const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    created_at: { type: Date, default: Date.now },
  });
  
  const Post = mongoose.model('Post', postSchema);