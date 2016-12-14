class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.integer :user_id, null: false
      t.integer :activatable_id, null: false
      t.string :activatable_type, null: false

      t.timestamps
    end

    add_index :activities, :user_id
    add_index :activities, [:activatable_id, :activatable_type]
  end
end
