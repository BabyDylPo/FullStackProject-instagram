# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  image_url  :integer          not null   THIS NEEDS TO BE A STRING
#  liker_id   :integer
#  caption    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :caption, presence: true
  validate :caption_to_long

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :PostLike,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :liker

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

  has_one_attached :photo

  def caption_to_long
    if caption && caption.length > 10000
      errors[:caption] << "too long"
    end
  end
end
