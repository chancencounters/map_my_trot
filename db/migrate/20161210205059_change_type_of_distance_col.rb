class ChangeTypeOfDistanceCol < ActiveRecord::Migration[5.0]
  def change
    change_column :routes, :distance, 'float USING CAST(distance AS float)'
  end
end
