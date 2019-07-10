json.extract! post, :id, :user_id, :image_url, :caption, :photo
json.photourl url_for(post.photo)