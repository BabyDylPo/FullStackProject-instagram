json.posts do 
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :caption, :user_id
      json.photourl url_for(post.photo) 
    end
  end
end