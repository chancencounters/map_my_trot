class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :distance, null: false
      t.text :map_info, null: false
      
      t.timestamps
    end

    add_index :routes, :user_id
  end
end
