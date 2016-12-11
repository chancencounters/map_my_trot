class AddNamesToTrots < ActiveRecord::Migration[5.0]
  def change
    add_column :trots, :name, :string, null: false
  end
end
