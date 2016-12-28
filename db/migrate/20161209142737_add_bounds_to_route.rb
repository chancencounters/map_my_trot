class AddBoundsToRoute < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :bounds, :json, null: false
  end
end
