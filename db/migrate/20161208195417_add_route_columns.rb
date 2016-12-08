class AddRouteColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :origin, :string, null: false
    add_column :routes, :destination, :string, null: false
  end
end
