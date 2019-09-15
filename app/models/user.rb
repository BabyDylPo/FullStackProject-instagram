# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  website         :string
#  bio             :string
#  display_name    :string
#  phone_number    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password

    #########################  VALIDATIONS  ###############################
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :bio, length: { maximum: 200, allow_nil: true}
    validates :display_name, length: { maximum: 50, allow_nil: true}
    validates :phone_number, length: { minimum: 15, allow_nil: true}
    #######################################################################

    after_initialize :ensure_session_token

    has_one_attached :photo

    #########################  ASSOCIATION  ###############################
    has_many :posts, foreign_key: :user_id, class_name: :Post
    has_many :post_likes, foreign_key: :user_id, class_name: :PostLike, dependent: :destroy

    has_many :comments, foreign_key: :user_id, class_name: :Comment

    has_many :follower_relationships, foreign_key: :following_id, class_name: :Follow
    has_many :followers, through: :follower_relationships, source: :follower
    has_many :following_relationships, foreign_key: :follower_id, class_name: :Follow
    has_many :following, through: :following_relationships, source: :following
    #######################################################################

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, email, password)
    user = User.find_by(username: username) #find errors badly, booo

    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def is_password?(password) #can be named w/e you want ex:password_is 
    # BCrypt::Password.new(self.password_digest).is_password?(password) #not and inifinite loop
    encrypted_password = BCrypt::Password.new(self.password_digest) #turning into a BCrypt password object
    encrypted_password.is_password?(password) #argument password is a string (Plain text). 
  end

  def ensure_session_token #this is called after being initialized
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # Reassigning session token gives it new object_id, so `be` matcher works
    self.session_token = SecureRandom.urlsafe_base64
    self.save! #if we dont have this then we dont actually save to the database
    self.session_token #need to return 
  end

  def password=(password) #this is called during initialized
    @password = password
    self.password_digest = BCrypt::Password.create(password) #BCrypt inherits from string. 
  end

end
