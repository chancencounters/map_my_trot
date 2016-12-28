class DeleteNameFromTrots < ActiveRecord::Migration[5.0]
  def change
    remove_column :trots, :name
  end
end
