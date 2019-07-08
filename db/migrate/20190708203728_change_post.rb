class ChangePost < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :image_url, :string
  end
end
