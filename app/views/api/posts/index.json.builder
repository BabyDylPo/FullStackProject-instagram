json.array! @posts do |post|
  json.extract! post, :id, :caption
  json.photourl url_for(post_photo)
end