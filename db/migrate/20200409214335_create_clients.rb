class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :project
      t.string :department
      t.integer :estimate
      t.integer :budget
      t.date :start_date

      t.timestamps
    end
  end
end
