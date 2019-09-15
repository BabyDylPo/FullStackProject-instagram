# == Schema Information
#
# Table name: post_likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PostLike < ApplicationRecord
    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
    
    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    

end
