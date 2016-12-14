@activities.each do |activity|
  json.set! activity.id do
    json.extract! activity, :id, :activatable_id, :activatable_type
  end
end
