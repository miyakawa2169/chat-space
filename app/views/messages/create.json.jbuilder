json.user_name          @message.user.name
json.created_at         @message.created_at
json.is_content_present @message.content.present?
json.content            @message.content
json.image_url          @message.image.url
json.is_image_present   @message.image.present?
