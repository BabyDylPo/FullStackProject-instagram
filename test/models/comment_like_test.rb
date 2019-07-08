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

require 'test_helper'

class CommentLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
