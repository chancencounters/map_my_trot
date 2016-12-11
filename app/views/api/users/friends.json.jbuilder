@friends.each do |friend|
  json.set! friend.id do
    json.id friend.id
    json.name "#{friend.first_name} #{friend.last_name}"
    json.avatar friend.avatar
  end
end
