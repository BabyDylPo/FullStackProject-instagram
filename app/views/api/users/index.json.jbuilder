json.users do 
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :email, :display_name
      json.photourl url_for(user.photo)
    end
  end
end