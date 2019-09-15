json.extract! comment, :id, :body, :user_id, :post_id


# if comment.likers
#     json.likerIds comment.likers.pluck(:id)
# else
#     json.likerIds []
# end