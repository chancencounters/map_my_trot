@friendships.each do |friendship|
  json.set! friendship.id do
    json.id friendship.id
    json.user_id friendship.user_id
    json.friend_id friendship.friend_id
    json.status friendship.status
    json.friend_name "#{friendship.user.first_name} #{friendship.user.last_name}"
    json.friend_image_url asset_path(friendship.user.avatar.url)
  end
end
