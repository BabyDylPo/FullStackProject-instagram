json.post do
  json.partial! '/api/posts/post', post: @post
#   json.commentId @post.comments.pluck(:id)
end

# @bench.reviews.includes(:author).each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end

#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :username
#     end
#   end
# end