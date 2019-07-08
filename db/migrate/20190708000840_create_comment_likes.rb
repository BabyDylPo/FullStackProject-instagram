class CreateCommentLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :comment_likes do |t|
      t.integer :liker_id, null: false;
      t.integer :comment_id, null: false;
      t.timestamps
    end
    add_index :comment_likes, [:liker_id, :comment_id], unique: true
  end
end
