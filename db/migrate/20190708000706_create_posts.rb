class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.integer :image_url, null: false
      t.integer :liker_id
      t.string :caption, 
      t.timestamps
    end
    add_index :posts, :user_id, unique: true
    add_index :posts, :liker_id, unique: true
  end
end
