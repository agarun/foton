require "paperclip/railtie"
Paperclip::Railtie.insert
# Paperclip::Attachment.default_options.merge!(default_url: ":style/missing.jpg")
Paperclip::Attachment.default_options[:default_url] = ":style/missing.jpg"
