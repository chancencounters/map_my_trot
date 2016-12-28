class RenameRouteColumns < ActiveRecord::Migration[5.0]
  def change
    rename_column :routes, :map_info, :polyline
  end
end
