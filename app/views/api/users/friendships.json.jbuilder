@friendships.each do |friendship|
  json.set! friendship.id do
    json.id friendship.id
    json.status friendship.status
    json.name "#{friendship.user.first_name} #{friendship.user.last_name}"
    json.avatar friendship.user.avatar
  end
end
