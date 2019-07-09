json.users do 
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :email, :display_name
    end
  end
end