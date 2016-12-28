class ChangeDistanceTypeInRoutes < ActiveRecord::Migration[5.0]
  def change
    change_column :routes, :distance, 'integer USING CAST(distance AS integer)'
  end
end
