class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, unique: true
      t.string :session_token, null: false, unique: true
      t.string :password_digest, null: false
      t.string :website
      t.string :bio, maximum: 200
      t.string :display_name, maximum: 50
      t.string :phone_number, maximum: 15
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :website, unique: true
  end
end
