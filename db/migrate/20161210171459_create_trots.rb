class CreateTrots < ActiveRecord::Migration[5.0]
  def change
    create_table :trots do |t|
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.date :date, null: false
      t.string :duration, null: false
      t.timestamps
    end

    add_index :trots, [:user_id, :route_id]
  end
end
