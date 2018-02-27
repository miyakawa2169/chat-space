json.array! @messages do |message|
  json.user_name          message.user.name
  json.created_at         message.created_at
  json.content            message.content
  json.image_url          message.image.url
end