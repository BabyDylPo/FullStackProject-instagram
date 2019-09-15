# json.extract! post, :id, :user_id, :image_url, :caption, :photo
# json.photourl url_for(post.photo)
# json.aws_photo_url post.photo.service_url


json.extract! post, :id, :caption, :user_id
json.photourl url_for(post.photo) 
json.aws_photo_url post.photo.service_url


if post.likers
    json.likerIds post.likers.pluck(:id)
else
    json.likerIds []
end