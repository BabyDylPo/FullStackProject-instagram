# == Schema Information
#
# Table name: comment_likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  comment_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CommentLike < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
    
    belongs_to :comment,
        primary_key: :id,
        foreign_key: :comment_id,
        class_name: :Comment
end
