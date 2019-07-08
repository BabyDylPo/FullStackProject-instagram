# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  image_url  :integer          not null
#  liker_id   :integer
#  caption    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :caption, presence: true
  validate :caption_too_long

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :PostLike

  has_many :likers,
    through: :likes,
    source: :user

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

  def caption_to_long
    if body && body.length > 140
      errors[:body] << "too long"
    end
  end
end
