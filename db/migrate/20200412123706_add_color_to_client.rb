class AddColorToClient < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :color, :string, :default => '#FFFFFF'
  end
end
