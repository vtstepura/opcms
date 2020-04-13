class CreateManegers < ActiveRecord::Migration[5.2]
  def change
    create_table :manegers do |t|
      t.string :email
      t.string :password_digest
      t.string :name

      t.timestamps
    end
  end
end
