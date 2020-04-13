class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.date :date
      t.integer :maneger_id
      t.string :action
      t.integer :client_id

      t.timestamps
    end
  end
end
