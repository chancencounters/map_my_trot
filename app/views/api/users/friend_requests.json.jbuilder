@friend_requests.each do |friend_request|
  json.set! friend_request.id do
    json.id friend_request.id
    json.name "#{friend_request.user.first_name} #{friend_request.user.last_name}"
    json.avatar friend_request.user.avatar
  end
end
