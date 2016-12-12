@friends.each do |friend|
  json.set! friend.id do
    json.id friend.id
    # json.status friend.friendship.status
    json.name "#{friend.first_name} #{friend.last_name}"
    json.image_url asset_path(friend.avatar.url)
  end
end
