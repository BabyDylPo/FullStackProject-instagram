# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, presence: true
    validate :body_to_long


    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    # has_many :likes,
    #     primary_key: :id,
    #     foreign_key: :post_id,
    #     class_name: :CommentLike,
    #     dependent: :destroy

    # has_many :likers,
    #     through: :likes,
    #     source: :liker

    # has_many :comments,
    #     primary_key: :id,
    #     foreign_key: :post_id,
    #     class_name: :Comment


    def body_to_long
        if body && body.length > 3333
            errors[:body] << "too long"
        end
    end

end


