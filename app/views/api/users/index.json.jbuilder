@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.email user.email
    json.first_name user.first_name
    json.last_name user.last_name
    json.image_url asset_path(user.avatar.url)
  end
end
